// AP English Literature & Composition Exam Simulator — App.jsx
import { useState, useEffect, useRef, Component } from "react";
import ALL_TESTS from "./data/tests.js";

// ── Brand System (matches ap-exam-simulator-hub) ───────────────────────────
const C = {
  bg:     "#060B14",
  mid:    "#0D1A2D",
  dark:   "#081022",
  g:      "#00F5A0",
  b:      "#38BDF8",
  r:      "#FF4757",
  gold:   "#FFD60A",
  white:  "#FFFFFF",
  muted:  "#94A3B8",
  border: "#1E293B",
};
const font = "'DM Sans', 'Segoe UI', system-ui, sans-serif";
const gradient = "linear-gradient(135deg, #060b14 0%, #0d1a2d 50%, #081022 100%)";

function useMobile() {
  const [mob, setMob] = useState(()=>window.innerWidth<640);
  useEffect(()=>{
    const fn=()=>setMob(window.innerWidth<640);
    window.addEventListener("resize",fn);
    return ()=>window.removeEventListener("resize",fn);
  },[]);
  return mob;
}

// ── Inject Google Font + global styles ────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("ap-lit-styles")) {
  const lk = document.createElement("link");
  lk.rel = "stylesheet";
  lk.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(lk);
  const st = document.createElement("style");
  st.id = "ap-lit-styles";
  st.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; background: #060b14; }
    textarea { outline: none !important; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0d1a2d; }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes spin { to{transform:rotate(360deg)} }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.4} }
  `;
  document.head.appendChild(st);
}

// ── Shared constants ──────────────────────────────────────────────────────
const noiseBg = {
  position:"fixed",inset:0,zIndex:0,opacity:0.02,
  backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize:"200px",pointerEvents:"none"
};

const backBtn = {
  background:"rgba(255,255,255,0.08)",color:C.muted,
  border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,
  padding:"6px 14px",cursor:"pointer",fontSize:13,
  fontFamily:font,fontWeight:600
};

// ── Subject Config ────────────────────────────────────────────────────────
const SUBJECT_CONFIG = {
  name: "AP English Literature & Composition",
  shortName: "AP English Lit",
  emoji: "\u{1F4D6}",
  hasAudio: false,
  hasConversation: false,
  mcCount: 55,
  mcTime: 60,
  mcWeight: 45,
  frqCount: 3,
  frqTime: 120,
  frqWeight: 55,
  totalTime: "3 hours",
};

// ── Timer ─────────────────────────────────────────────────────────────────
function Timer({ totalSeconds }) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => setRemaining(p => p > 0 ? p-1 : 0), 1000);
    return () => clearInterval(ref.current);
  }, []);
  const pct = remaining / totalSeconds;
  const col = pct < 0.25 ? C.r : pct < 0.5 ? "#FB923C" : C.g;
  const bg  = pct < 0.25 ? "rgba(255,71,87,0.12)" : pct < 0.5 ? "rgba(251,146,60,0.12)" : "rgba(0,245,160,0.1)";
  const m = Math.floor(remaining/60).toString().padStart(2,"0");
  const s = (remaining%60).toString().padStart(2,"0");
  return (
    <div style={{background:bg,border:`1px solid ${col}40`,borderRadius:8,padding:"6px 14px",
      fontFamily:font,fontWeight:700,fontSize:"0.95rem",color:col,
      display:"flex",alignItems:"center",gap:6,
      animation:pct<0.25?"blink 1.2s ease infinite":"none"}}>
      ⏱ {m}:{s}
    </div>
  );
}

// ── FeedbackBox ───────────────────────────────────────────────────────────
function FeedbackBox({ text, loading }) {
  return (
    <div style={{marginTop:10,padding:"14px 16px",
      background:"rgba(56,189,248,0.07)",border:"1px solid rgba(56,189,248,0.2)",
      borderRadius:8,fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,0.8)"}}>
      <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",
        textTransform:"uppercase",color:C.b,marginBottom:6,display:"flex",alignItems:"center",gap:8}}>
        {loading
          ? <><span style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${C.b}`,
              borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/> Generating AI Feedback...</>
          : <>✦ AI Feedback</>}
      </div>
      {!loading && text}
    </div>
  );
}

// ── AP Score Conversion ───────────────────────────────────────────────────
function calcAPScore(mcCorrect, frqTotal) {
  const composite = (mcCorrect / 55 * 45) + (frqTotal / 18 * 55);
  if (composite >= 75) return 5;
  if (composite >= 60) return 4;
  if (composite >= 45) return 3;
  if (composite >= 30) return 2;
  return 1;
}

function calcAPScoreFRQOnly(frqEarned, frqPossible) {
  if (!frqPossible) return 1;
  const pct = frqEarned / frqPossible;
  if (pct >= 0.82) return 5;
  if (pct >= 0.67) return 4;
  if (pct >= 0.50) return 3;
  if (pct >= 0.33) return 2;
  return 1;
}

const AP_SCORE_LABELS = {
  5: "Extremely Well Qualified",
  4: "Well Qualified",
  3: "Qualified",
  2: "Possibly Qualified",
  1: "No Recommendation",
};

const AP_SCORE_COLORS = {
  5: C.g,
  4: "#4ADE80",
  3: C.b,
  2: "#FB923C",
  1: C.r,
};

// ── PassageDisplay ────────────────────────────────────────────────────────
function PassageDisplay({ passage, footnotes, label }) {
  return (
    <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
      padding:"20px 24px",marginBottom:20,overflow:"auto"}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
        textTransform:"uppercase",color:C.b,marginBottom:14}}>{label || "\u{1F4C4} Passage"}</div>
      <div style={{fontFamily:"'Georgia', 'Times New Roman', serif",fontSize:"0.9rem",
        lineHeight:1.85,color:"rgba(255,255,255,0.88)"}}>
        {passage.map((line,i)=>(
          <div key={i} style={{display:"flex",gap:16,minHeight:line.text===""?16:"auto"}}>
            <span style={{width:28,flexShrink:0,textAlign:"right",
              color:"rgba(148,163,184,0.35)",fontSize:12,fontFamily:"'DM Sans',monospace",
              paddingTop:2,userSelect:"none"}}>{line.lineStart}</span>
            <span>{line.text}</span>
          </div>
        ))}
      </div>
      {footnotes && footnotes.length > 0 && (
        <div style={{marginTop:16,paddingTop:14,borderTop:`1px solid ${C.border}`}}>
          {footnotes.map((fn,i)=>(
            <div key={i} style={{fontSize:12,color:"rgba(148,163,184,0.6)",
              lineHeight:1.55,marginBottom:4}}>{fn}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── FRQ Task Components ───────────────────────────────────────────────────

// FRQ 1: Poetry Analysis
function PoetryAnalysisTask({ q, answer, onAnswer }) {
  return (
    <div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"20px 24px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.g,marginBottom:6}}>Poetry Analysis</div>
        <div style={{fontSize:13,color:C.muted,marginBottom:12}}>
          <strong style={{color:C.white}}>{q.author}</strong> — {q.source}
        </div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",lineHeight:1.65,
          marginBottom:14,fontStyle:"italic"}}>{q.context}</div>
        <div style={{fontSize:"0.92rem",lineHeight:1.75,color:"rgba(255,255,255,0.88)",
          whiteSpace:"pre-wrap"}}>{q.prompt}</div>
      </div>
      <PassageDisplay passage={q.passage} footnotes={q.footnotes} label="\u{1F4DC} Poem"/>
      <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.15)",
        borderRadius:10,padding:"14px 18px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.gold,marginBottom:8}}>Essay Instructions</div>
        <ul style={{margin:0,paddingLeft:18,fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75}}>
          <li>Respond to the prompt with a <strong style={{color:C.white}}>thesis</strong> that presents a defensible interpretation</li>
          <li>Select and use <strong style={{color:C.white}}>evidence</strong> to support your line of reasoning</li>
          <li>Explain how the evidence supports your line of reasoning</li>
          <li>Use appropriate grammar and punctuation in communicating your argument</li>
        </ul>
      </div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
        <label style={{display:"block",fontSize:13,fontWeight:700,color:C.muted,marginBottom:10}}>
          Your Poetry Analysis Essay <span style={{fontWeight:400}}>({q.points} points)</span>
        </label>
        <textarea value={answer||""} onChange={e=>onAnswer(e.target.value)}
          placeholder="Write your poetry analysis essay here. Analyze how the poet uses literary elements and techniques to develop meaning..."
          style={{width:"100%",minHeight:360,padding:14,background:"rgba(255,255,255,0.04)",
            border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
            lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
          <span style={{fontSize:12,color:C.muted}}>
            {(answer||"").split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </div>
    </div>
  );
}

// FRQ 2: Prose Fiction Analysis
function ProseAnalysisTask({ q, answer, onAnswer }) {
  return (
    <div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"20px 24px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.g,marginBottom:6}}>Prose Fiction Analysis</div>
        <div style={{fontSize:13,color:C.muted,marginBottom:12}}>
          <strong style={{color:C.white}}>{q.author}</strong> — {q.source}
        </div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",lineHeight:1.65,
          marginBottom:14,fontStyle:"italic"}}>{q.context}</div>
        <div style={{fontSize:"0.92rem",lineHeight:1.75,color:"rgba(255,255,255,0.88)",
          whiteSpace:"pre-wrap"}}>{q.prompt}</div>
      </div>
      <PassageDisplay passage={q.passage} footnotes={q.footnotes} label="\u{1F4C4} Prose Passage"/>
      <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.15)",
        borderRadius:10,padding:"14px 18px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.gold,marginBottom:8}}>Essay Instructions</div>
        <ul style={{margin:0,paddingLeft:18,fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75}}>
          <li>Respond to the prompt with a <strong style={{color:C.white}}>thesis</strong> that presents a defensible interpretation</li>
          <li>Select and use <strong style={{color:C.white}}>evidence</strong> to support your line of reasoning</li>
          <li>Explain how the evidence supports your line of reasoning</li>
          <li>Use appropriate grammar and punctuation in communicating your argument</li>
        </ul>
      </div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
        <label style={{display:"block",fontSize:13,fontWeight:700,color:C.muted,marginBottom:10}}>
          Your Prose Fiction Analysis Essay <span style={{fontWeight:400}}>({q.points} points)</span>
        </label>
        <textarea value={answer||""} onChange={e=>onAnswer(e.target.value)}
          placeholder="Write your prose fiction analysis essay here. Analyze how the author uses literary elements and techniques to develop meaning..."
          style={{width:"100%",minHeight:360,padding:14,background:"rgba(255,255,255,0.04)",
            border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
            lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
          <span style={{fontSize:12,color:C.muted}}>
            {(answer||"").split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </div>
    </div>
  );
}

// FRQ 3: Literary Argument (NO passage)
function LiteraryArgumentTask({ q, answer, onAnswer }) {
  return (
    <div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"20px 24px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.g,marginBottom:10}}>Literary Argument</div>
        <div style={{fontSize:"0.92rem",lineHeight:1.75,color:"rgba(255,255,255,0.88)",
          whiteSpace:"pre-wrap"}}>{q.prompt}</div>
      </div>
      <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.15)",
        borderRadius:10,padding:"14px 18px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.gold,marginBottom:8}}>Essay Instructions</div>
        <ul style={{margin:0,paddingLeft:18,fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75}}>
          <li>Respond to the prompt with a <strong style={{color:C.white}}>thesis</strong> that presents a defensible interpretation</li>
          <li>Select and use <strong style={{color:C.white}}>evidence</strong> from your chosen work to support your line of reasoning</li>
          <li>Explain how the evidence supports your line of reasoning</li>
          <li>Use appropriate grammar and punctuation in communicating your argument</li>
        </ul>
      </div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
        <label style={{display:"block",fontSize:13,fontWeight:700,color:C.muted,marginBottom:10}}>
          Your Literary Argument Essay <span style={{fontWeight:400}}>({q.points} points)</span>
        </label>
        <textarea value={answer||""} onChange={e=>onAnswer(e.target.value)}
          placeholder="Write your literary argument essay here. Choose a work of fiction, present a thesis, and support it with evidence from the text..."
          style={{width:"100%",minHeight:400,padding:14,background:"rgba(255,255,255,0.04)",
            border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
            lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
          <span style={{fontSize:12,color:C.muted}}>
            {(answer||"").split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Landing Screen ────────────────────────────────────────────────────────
function LandingScreen({ onSelect }) {
  const mob = useMobile();
  const [screen, setScreen] = useState("landing");

  const sectionIRows = [
    { section:"Section I", type:"Multiple Choice", qs:"55 Qs", time:"60 min", pct:"45%", note:"5 literary passage sets (poetry + prose fiction)" },
  ];

  const sectionIIRows = [
    { q:"1", type:"Poetry Analysis", pts:"6 pts", time:"~40 min", pct:"~18%" },
    { q:"2", type:"Prose Fiction Analysis", pts:"6 pts", time:"~40 min", pct:"~18%" },
    { q:"3", type:"Literary Argument", pts:"6 pts", time:"~40 min", pct:"~18%" },
  ];

  const skills = [
    { n:1, name:"Literary Analysis", desc:"Analyze how authors use literary elements to develop meaning in poetry and prose" },
    { n:2, name:"Textual Evidence", desc:"Select and interpret specific textual evidence to support interpretive claims" },
    { n:3, name:"Argumentation", desc:"Construct a defensible thesis supported by evidence and insightful commentary" },
    { n:4, name:"Sophistication", desc:"Develop nuanced interpretations that account for complexity and ambiguity in literature" },
  ];

  const officialTests = ALL_TESTS.filter(t => t.badge === "Official")
    .sort((a,b) => b.year - a.year || a.label.localeCompare(b.label));
  const simTests = ALL_TESTS.filter(t => t.badge !== "Official");

  // ── Home: Official Exams ──
  if (screen === "home-official") {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"fixed",...noiseBg}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
            display:"flex",alignItems:"center",gap:12}}>
            <button style={backBtn} onClick={()=>setScreen("landing")}>&larr; Back</button>
            <span style={{color:"#334155",fontSize:13}}>Official AP Exams</span>
          </div>
          <div style={{maxWidth:680,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>
            <div style={{marginBottom:36}}>
              <span style={{background:"rgba(255,71,87,0.15)",color:C.r,
                border:"1px solid rgba(255,71,87,0.3)",borderRadius:6,
                padding:"3px 12px",fontSize:11,fontWeight:700,
                textTransform:"uppercase",letterSpacing:"0.08em"}}>Official College Board</span>
              <h1 style={{fontSize:mob?"1.7rem":"2.4rem",fontWeight:900,margin:"16px 0 10px",
                letterSpacing:"-0.03em"}}>Official AP Exams</h1>
              <p style={{color:"#64748b",fontSize:"0.95rem",lineHeight:1.65,margin:0}}>
                Authentic free-response questions from the College Board.
                Practice with real exam prompts and score with AI feedback calibrated to AP rubrics.
              </p>
            </div>

            <div style={{background:"rgba(255,214,10,0.08)",border:"1px solid rgba(255,214,10,0.2)",
              borderRadius:12,padding:"14px 18px",marginBottom:36,display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{fontSize:"1.1rem",flexShrink:0}}>{"\u26A0\uFE0F"}</span>
              <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.65}}>
                <strong style={{color:C.gold}}>Section II (FRQ) only.</strong> The College Board does not publicly
                release Section I (Multiple Choice) questions. These tests cover the free-response section only (Poetry Analysis + Prose Analysis + Literary Argument).
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:28}}>
              {[...new Set(officialTests.map(t => t.year))].sort((a,b) => b - a).map(year => {
                const yearTests = officialTests.filter(t => t.year === year);
                return (
                  <div key={year}>
                    <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",
                      color:"#475569",fontWeight:700,marginBottom:12,
                      display:"flex",alignItems:"center",gap:10}}>
                      <span style={{color:C.r}}>{year}</span>
                      <span style={{flex:1,height:1,background:"rgba(255,255,255,0.06)"}}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:10}}>
                      {yearTests.map(test => (
                        <div key={test.id}
                          onClick={()=>onSelect(test)}
                          style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,71,87,0.2)",
                            borderRadius:16,padding:mob?"12px 12px":"20px 24px",cursor:"pointer",
                            display:"flex",alignItems:"center",gap:20,transition:"all 0.2s"}}
                          onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,71,87,0.1)";e.currentTarget.style.borderColor="rgba(255,71,87,0.5)";e.currentTarget.style.transform="translateY(-2px)";}}
                          onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,71,87,0.2)";e.currentTarget.style.transform="translateY(0)";}}>
                          <div style={{width:52,height:52,borderRadius:12,
                            background:"rgba(255,71,87,0.15)",border:"1px solid rgba(255,71,87,0.3)",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            fontSize:11,fontWeight:800,color:C.r,flexShrink:0,textAlign:"center",lineHeight:1.2}}>
                            {`SET\n${test.label.match(/Set (\d+)/)?.[1] ?? "1"}`}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:700,fontSize:"1rem",marginBottom:4}}>{test.label}</div>
                            <div style={{color:"#475569",fontSize:13}}>3 essays &middot; AI scoring &middot; ~120 minutes &middot; Up to 18 points</div>
                          </div>
                          <div style={{color:"#334155",fontSize:"1.2rem"}}>&rarr;</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {officialTests.length === 0 && (
              <div style={{textAlign:"center",padding:40,color:"#475569",fontSize:14}}>
                No official exams added yet. Check back soon!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Home: Simulations ──
  if (screen === "home-sim") {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"fixed",...noiseBg}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
            display:"flex",alignItems:"center",gap:12}}>
            <button style={backBtn} onClick={()=>setScreen("landing")}>&larr; Back</button>
            <span style={{color:"#334155",fontSize:13}}>Practice Simulations</span>
          </div>
          <div style={{maxWidth:800,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>
            <div style={{marginBottom:36}}>
              <span style={{background:"rgba(0,245,160,0.12)",color:C.g,
                border:"1px solid rgba(0,245,160,0.25)",borderRadius:6,
                padding:"3px 12px",fontSize:11,fontWeight:700,
                textTransform:"uppercase",letterSpacing:"0.08em"}}>AI Practice &middot; Not Official</span>
              <h1 style={{fontSize:mob?"1.7rem":"2.4rem",fontWeight:900,margin:"16px 0 10px",
                letterSpacing:"-0.03em"}}>Practice Simulations</h1>
              <p style={{color:"#64748b",fontSize:"0.95rem",lineHeight:1.65,margin:"0 0 20px"}}>
                Full-length AP English Literature exams replicating the official format &mdash;
                <strong style={{color:"#94a3b8"}}> Section I: 55 Multiple Choice (60 min)</strong> followed by
                <strong style={{color:"#94a3b8"}}> Section II: 3 Free-Response Essays (120 min)</strong>.
                AI scoring calibrated to College Board rubrics.
              </p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {[["\u{1F522}","55 MC \u00b7 60 min"],["\u{1F4DC}","Poetry Analysis"],["\u{1F4C4}","Prose Analysis"],["\u{1F4A1}","Literary Argument"]].map(([icon,label])=>(
                  <span key={label} style={{background:"rgba(255,255,255,0.05)",
                    border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,
                    padding:"4px 12px",fontSize:12,color:"#94a3b8"}}>{icon} {label}</span>
                ))}
              </div>
            </div>

            <div style={{background:"rgba(56,189,248,0.06)",border:"1px solid rgba(56,189,248,0.15)",
              borderRadius:12,padding:"12px 18px",marginBottom:36,fontSize:13,
              color:"#64748b",lineHeight:1.65}}>
              <strong style={{color:C.b}}>Practice only.</strong> These simulations are AI-generated materials
              for study purposes. Not affiliated with, endorsed by, or representative of official College Board AP exam content.
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {simTests.map((test,i)=>(
                <div key={test.id}
                  onClick={()=>onSelect(test)}
                  style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(0,245,160,0.15)",
                    borderRadius:16,padding:"22px 24px",cursor:"pointer",
                    display:"flex",alignItems:"center",gap:20,transition:"all 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,245,160,0.07)";e.currentTarget.style.borderColor="rgba(0,245,160,0.35)";e.currentTarget.style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(0,245,160,0.15)";e.currentTarget.style.transform="translateY(0)";}}>
                  <div style={{width:60,height:60,borderRadius:14,
                    background:"rgba(0,245,160,0.1)",border:"1px solid rgba(0,245,160,0.25)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:13,fontWeight:800,color:C.g,flexShrink:0}}>
                    SIM {i+1}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:"1rem",marginBottom:4}}>{test.label}</div>
                    <div style={{color:"#475569",fontSize:13}}>{test.description}</div>
                  </div>
                  <div style={{color:"#334155",fontSize:"1.2rem"}}>&rarr;</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Landing ──
  return (
    <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
      <div style={{position:"fixed",...noiseBg}}/>
      <div style={{position:"relative",zIndex:1}}>
        {/* Nav */}
        <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
          display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:"1.1rem"}}>{SUBJECT_CONFIG.emoji}</span>
          <span style={{fontWeight:700,fontSize:14,color:"#e2e8f0"}}>{SUBJECT_CONFIG.shortName}</span>
          <span style={{color:"#334155",fontSize:13,marginLeft:4}}>/ Exam Simulator</span>
        </div>

        <div style={{maxWidth:820,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>

          {/* Hero */}
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{marginBottom:20}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:8,
                background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",
                borderRadius:100,padding:"5px 16px",fontSize:13,color:"#94a3b8"}}>
                {SUBJECT_CONFIG.emoji} {SUBJECT_CONFIG.name}
              </span>
            </div>
            <h1 style={{fontSize:mob?"1.8rem":"clamp(2rem,5vw,3.2rem)",fontWeight:900,margin:"0 0 16px",
              lineHeight:1.1,letterSpacing:"-0.03em"}}>
              Master the Full AP English Lit Exam.<br/>
              <span style={{background:`linear-gradient(90deg,${C.g},${C.b})`,
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                Earn your 5.
              </span>
            </h1>
            <p style={{color:"#64748b",fontSize:"1rem",maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>
              Practice with AP English Literature questions &mdash; <strong style={{color:"#94a3b8"}}>55 Multiple Choice</strong> + <strong style={{color:"#94a3b8"}}>3 Essay FRQs</strong> &mdash;
              with instant AI scoring calibrated to College Board rubrics.
            </p>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
              {["\u{1F522} 55 MC questions","\u{1F4DC} Poetry + Prose Analysis","\u{1F4A1} Literary Argument","\u{1F916} AI scoring","\u{1F4C4} PDF Report"].map(t=>(
                <span key={t} style={{display:"inline-flex",alignItems:"center",gap:6,
                  background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",
                  borderRadius:100,padding:"4px 14px",fontSize:12,color:"#94a3b8"}}>{t}</span>
              ))}
            </div>
          </div>

          {/* Exam at a glance */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:18,padding:mob?"16px 14px":"28px 32px",marginBottom:32}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
              <div style={{width:3,height:22,background:C.g,borderRadius:2}}/>
              <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                letterSpacing:"0.1em",color:"#94a3b8"}}>Full Exam Structure &mdash; At a Glance</span>
              <span style={{marginLeft:"auto",background:"rgba(255,214,10,0.12)",color:C.gold,
                border:"1px solid rgba(255,214,10,0.25)",borderRadius:6,
                padding:"2px 10px",fontSize:11,fontWeight:600}}>{SUBJECT_CONFIG.totalTime} &middot; 2 Sections</span>
            </div>

            {/* Section I block */}
            <div style={{borderRadius:12,border:"1px solid rgba(56,189,248,0.2)",
              background:"rgba(56,189,248,0.04)",marginBottom:16,overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid rgba(56,189,248,0.15)",
                display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div>
                  <span style={{fontWeight:800,fontSize:14,color:C.b}}>Section I &mdash; Multiple Choice</span>
                  <span style={{fontSize:12,color:"#64748b",marginLeft:12}}>55 Questions &middot; 60 Minutes</span>
                </div>
                <span style={{background:"rgba(56,189,248,0.15)",color:C.b,
                  border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,
                  padding:"3px 12px",fontSize:12,fontWeight:700}}>45% of Exam Score</span>
              </div>
              <div style={{padding:"14px 18px"}}>
                <div style={{fontSize:12,color:"#64748b",marginBottom:8,fontWeight:600}}>&bull; Question format:</div>
                <div style={{display:"flex",gap:10,alignItems:"flex-start",
                  marginBottom:8,paddingLeft:16}}>
                  <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{"\u{1F4D6}"}</span>
                  <div style={{fontSize:12,lineHeight:1.55}}>
                    <strong style={{color:"#cbd5e1"}}>Literary passage sets (8&ndash;13 Qs per passage):</strong>
                    <span style={{color:"#64748b",marginLeft:6}}>Analyze poetry, prose fiction, and drama passages spanning pre-20th century to contemporary</span>
                  </div>
                </div>
                <div style={{marginTop:12,display:"flex",alignItems:"center",gap:8,
                  background:"rgba(255,71,87,0.06)",border:"1px solid rgba(255,71,87,0.18)",
                  borderRadius:8,padding:"7px 12px"}}>
                  <span style={{fontSize:13}}>{"\u{1F512}"}</span>
                  <span style={{fontSize:11,color:"#94a3b8"}}>
                    Section I questions are <strong style={{color:"#cbd5e1"}}>never publicly released</strong> by College Board.
                    Available in <strong style={{color:C.b}}>Practice Simulations</strong> only.
                  </span>
                </div>
              </div>
            </div>

            {/* Section II block */}
            <div style={{borderRadius:12,border:"1px solid rgba(0,245,160,0.2)",
              background:"rgba(0,245,160,0.03)",overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid rgba(0,245,160,0.15)",
                display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div>
                  <span style={{fontWeight:800,fontSize:14,color:C.g}}>Section II &mdash; Free Response</span>
                  <span style={{fontSize:12,color:"#64748b",marginLeft:12}}>3 Essays &middot; 2 Hours</span>
                </div>
                <span style={{background:"rgba(0,245,160,0.12)",color:C.g,
                  border:"1px solid rgba(0,245,160,0.25)",borderRadius:20,
                  padding:"3px 12px",fontSize:12,fontWeight:700}}>55% of Exam Score</span>
              </div>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                  <thead>
                    <tr>
                      {["FRQ","Type","Points","Time","Weight"].map((h,i)=>(
                        <th key={h} style={{padding:"8px 12px 6px",textAlign:i>1?"center":"left",
                          color:"#475569",fontSize:10,fontWeight:700,textTransform:"uppercase",
                          letterSpacing:"0.08em",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sectionIIRows.map((row,i)=>(
                      <tr key={i}>
                        <td style={{padding:"10px 12px",fontWeight:600,fontSize:12,color:C.b}}>{row.q}</td>
                        <td style={{padding:"10px 12px",fontWeight:600,color:"#e2e8f0"}}>{row.type}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:"#94a3b8",fontWeight:600}}>{row.pts}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:"#64748b"}}>{row.time}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:C.g,fontWeight:700}}>{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Skills assessed */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:18,padding:"28px 32px",marginBottom:52}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
              <div style={{width:3,height:22,background:C.b,borderRadius:2}}/>
              <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                letterSpacing:"0.1em",color:"#94a3b8"}}>Skills Assessed</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:10}}>
              {skills.map(s=>(
                <div key={s.n} style={{background:"rgba(255,255,255,0.03)",borderRadius:10,
                  padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)",
                  display:"flex",gap:12,alignItems:"flex-start"}}>
                  <div style={{width:26,height:26,borderRadius:"50%",
                    background:"rgba(0,245,160,0.12)",border:"1px solid rgba(0,245,160,0.25)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:11,fontWeight:700,color:C.g,flexShrink:0}}>{s.n}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:13,color:"#e2e8f0",marginBottom:3}}>{s.name}</div>
                    <div style={{fontSize:11,color:"#64748b",lineHeight:1.5}}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA cards */}
          <div style={{textAlign:"center",marginBottom:20}}>
            <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.15em",
              color:"#334155",marginBottom:16}}>Choose your practice mode</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16,marginBottom:24}}>

            {/* Official */}
            <div onClick={()=>setScreen("home-official")}
              style={{background:"rgba(255,71,87,0.08)",border:"1px solid rgba(255,71,87,0.25)",
                borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,71,87,0.15)";e.currentTarget.style.borderColor="rgba(255,71,87,0.6)";e.currentTarget.style.boxShadow="0 0 40px rgba(255,71,87,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,71,87,0.08)";e.currentTarget.style.borderColor="rgba(255,71,87,0.25)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{fontSize:"2rem",marginBottom:12}}>{"\u{1F4CB}"}</div>
              <div style={{fontWeight:800,fontSize:"1.15rem",marginBottom:6}}>Official AP Exams</div>
              <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.65,marginBottom:18}}>
                Authentic Section II free-response questions from College Board AP Central.
                <br/><span style={{color:"#475569",fontSize:12}}>{"\u26A0\uFE0F"} Section I (MC) not publicly released &mdash; FRQ only.</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                {[...new Set(officialTests.map(t=>t.year))].sort((a,b)=>b-a).map(yr=>(
                  <span key={yr} style={{background:"rgba(255,71,87,0.2)",color:C.r,
                    border:"1px solid rgba(255,71,87,0.4)",borderRadius:8,
                    padding:"4px 12px",fontWeight:700,fontSize:12}}>{yr}</span>
                ))}
                {officialTests.length === 0 && <span style={{color:"#475569",fontSize:12}}>Coming soon</span>}
                <span style={{color:"#475569",fontSize:13,marginLeft:4}}>&rarr;</span>
              </div>
            </div>

            {/* Simulations */}
            <div onClick={()=>setScreen("home-sim")}
              style={{background:"rgba(0,245,160,0.05)",border:"1px solid rgba(0,245,160,0.2)",
                borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,245,160,0.1)";e.currentTarget.style.borderColor="rgba(0,245,160,0.5)";e.currentTarget.style.boxShadow="0 0 40px rgba(0,245,160,0.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,245,160,0.05)";e.currentTarget.style.borderColor="rgba(0,245,160,0.2)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{fontSize:"2rem",marginBottom:12}}>{"\u{1F680}"}</div>
              <div style={{fontWeight:800,fontSize:"1.15rem",marginBottom:6}}>Practice Simulations</div>
              <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.65,marginBottom:18}}>
                Full-length exams: <strong style={{color:"rgba(255,255,255,0.6)"}}>55 MC</strong> + <strong style={{color:"rgba(255,255,255,0.6)"}}>3 Essays</strong> &mdash; complete exam.
                <br/><span style={{color:"#475569",fontSize:12}}>Not official College Board material.</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{background:C.g,color:"#060b14",borderRadius:8,
                  padding:"6px 16px",fontWeight:800,fontSize:13}}>{simTests.length} simulation{simTests.length!==1?"s":""}</span>
                <span style={{color:"#475569",fontSize:13}}>&rarr;</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:14,padding:mob?"12px 12px":"20px 24px",marginTop:8}}>
            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr 1fr",gap:mob?12:16}}>
              {[
                {icon:"\u{1F4CB}",title:"Official Tests",text:`${officialTests.length} official FRQ set${officialTests.length!==1?"s":""} from College Board AP Central. Section I (55 MC) is never publicly released.`},
                {icon:"\u{1F680}",title:"Simulations",text:"Full-exam simulations: Section I (55 MC) + 3 FRQ essays. Not official College Board material."},
                {icon:"\u{1F916}",title:"AI Scoring & Feedback",text:"Results and comments are AI-generated for practice only. Not endorsed by College Board."},
              ].map(item=>(
                <div key={item.title} style={{display:"flex",gap:10}}>
                  <span style={{fontSize:"1.1rem",flexShrink:0}}>{item.icon}</span>
                  <div style={{fontSize:12,color:"#94a3b8",lineHeight:1.6}}>
                    <strong style={{color:"#e2e8f0",display:"block",marginBottom:3}}>{item.title}</strong>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{textAlign:"center",marginTop:24,fontSize:11,color:"rgba(148,163,184,0.3)"}}>
            For practice only. Not endorsed by College Board.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Exam Screen ───────────────────────────────────────────────────────────
function ExamScreen({ test, onFinish }) {
  const mob = useMobile();
  const hasMC = !!(test.mcQuestions && test.mcQuestions.length);

  // Phases: mc -> frq1 -> frq2 -> frq3
  const [phase, setPhase] = useState(hasMC ? "mc" : "frq1");

  // MC state
  const [currentMC, setCurrentMC] = useState(0);
  const [mcAnswers, setMcAnswers] = useState({});
  const totalMC = hasMC ? test.mcQuestions.length : 0;
  const answeredMCCount = Object.keys(mcAnswers).length;

  // FRQ state
  const frq1 = test.questions.find(q => q.type === "poetry-analysis");
  const frq2 = test.questions.find(q => q.type === "prose-analysis");
  const frq3 = test.questions.find(q => q.type === "literary-argument");
  const [frqAnswers, setFrqAnswers] = useState({ 1:"", 2:"", 3:"" });

  // Submitted state
  const [submitted, setSubmitted] = useState(false);

  const isFrqDone = (n) => (frqAnswers[n] || "").trim().length > 0;

  if (submitted)
    return <ResultsScreen test={test} mcAnswers={mcAnswers}
      frqAnswers={frqAnswers}
      onHome={onFinish}
      onRetry={()=>{setMcAnswers({});setFrqAnswers({1:"",2:"",3:""});setSubmitted(false);setCurrentMC(0);setPhase(hasMC?"mc":"frq1");}}/>;

  // ── SECTION I: MC ──────────────────────────────────────────────────────
  if (phase === "mc") {
    const mcQ = test.mcQuestions[currentMC];
    const setInfo = test.mcSets ? test.mcSets.find(s => {
      const setNum = parseInt(s.id.replace("set",""));
      return mcQ.set === setNum;
    }) : null;

    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        {/* Header */}
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.b,marginBottom:2}}>
                Section I &mdash; Multiple Choice
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; 55 Questions &middot; 60 Minutes
              </div>
            </div>
            <Timer totalSeconds={test.totalMCTime || 60*60}/>
          </div>
          {/* Progress bar */}
          <div style={{height:3,background:"rgba(255,255,255,0.06)"}}>
            <div style={{height:"100%",background:C.b,width:`${(answeredMCCount/totalMC)*100}%`,transition:"width 0.3s"}}/>
          </div>
          {/* MC nav */}
          <div style={{padding:mob?"8px 12px":"8px 24px",maxWidth:960,margin:"0 auto",
            display:"flex",alignItems:"center",gap:mob?3:6,flexWrap:"wrap",overflowX:mob?"auto":"visible",
            borderTop:`1px solid rgba(30,41,59,0.4)`}}>
            <span style={{fontSize:10,color:C.muted,marginRight:4,fontWeight:700,
              textTransform:"uppercase",letterSpacing:"0.06em",flexShrink:0}}>Q:</span>
            {test.mcQuestions.map((mq,i)=>{
              const active=i===currentMC, answered=!!mcAnswers[mq.num];
              return (
                <button key={i} onClick={()=>setCurrentMC(i)} style={{
                  width:mob?22:26,height:mob?22:26,borderRadius:5,border:"none",cursor:"pointer",
                  fontFamily:font,fontWeight:700,fontSize:10,transition:"all 0.15s",
                  background:active?C.b:answered?"rgba(56,189,248,0.2)":"rgba(255,255,255,0.06)",
                  color:active?C.bg:answered?C.b:C.muted,
                  outline:active?`2px solid ${C.b}`:"none",outlineOffset:2}}>
                  {answered&&!active?"\u2713":mq.num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div style={{maxWidth:860,margin:"0 auto",padding:mob?"16px 12px 80px":"32px 24px 80px"}}>
          {/* Set passage */}
          {setInfo && (
            <div style={{marginBottom:20}}>
              <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",
                letterSpacing:"0.1em",color:C.b,marginBottom:8}}>
                {setInfo.title}
              </div>
              <PassageDisplay passage={setInfo.passage} label={setInfo.type === "poetry" ? "\u{1F4DC} Poem" : "\u{1F4C4} Passage"}/>
            </div>
          )}

          {/* Q counter */}
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{background:"rgba(56,189,248,0.1)",border:`2px solid ${C.b}`,
              borderRadius:8,padding:"6px 14px",fontWeight:800,fontSize:14,color:C.b}}>
              {currentMC+1} / {totalMC}
            </div>
            <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",
              letterSpacing:"0.1em",color:C.muted}}>
              Set {mcQ.set}
            </div>
          </div>

          {/* Question stem */}
          <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
            padding:"22px 24px",marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",
              letterSpacing:"0.1em",color:C.muted,marginBottom:12}}>Question {mcQ.num}</div>
            <p style={{margin:0,fontSize:"1rem",lineHeight:1.75,color:"rgba(255,255,255,0.95)",
              fontWeight:500}}>{mcQ.stem}</p>
          </div>

          {/* Choices (5 choices A-E) */}
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
            {Array.from({length:mcQ.choices.length/2},(_,i)=>{
              const letter = mcQ.choices[i*2];
              const text   = mcQ.choices[i*2+1];
              const selected = mcAnswers[mcQ.num] === letter;
              return (
                <button key={letter} onClick={()=>setMcAnswers(prev=>({...prev,[mcQ.num]:letter}))}
                  style={{display:"flex",alignItems:"flex-start",gap:14,
                    background:selected?"rgba(56,189,248,0.12)":"rgba(255,255,255,0.03)",
                    border:`1.5px solid ${selected?C.b:"rgba(255,255,255,0.08)"}`,
                    borderRadius:10,padding:"14px 18px",cursor:"pointer",
                    textAlign:"left",transition:"all 0.15s",width:"100%",
                    boxShadow:selected?`0 0 16px rgba(56,189,248,0.15)`:"none"}}>
                  <span style={{width:28,height:28,borderRadius:6,flexShrink:0,
                    background:selected?C.b:"rgba(255,255,255,0.07)",
                    border:`1.5px solid ${selected?C.b:"rgba(255,255,255,0.15)"}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:800,fontSize:13,
                    color:selected?C.bg:C.muted,transition:"all 0.15s"}}>
                    {letter}
                  </span>
                  <span style={{fontSize:"0.94rem",lineHeight:1.65,
                    color:selected?"rgba(255,255,255,0.98)":"rgba(255,255,255,0.78)",
                    fontWeight:selected?600:400,paddingTop:2}}>{text}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div style={{display:"flex",justifyContent:"space-between",gap:12}}>
            <button onClick={()=>setCurrentMC(p=>Math.max(0,p-1))} disabled={currentMC===0}
              style={{background:"rgba(255,255,255,0.06)",color:currentMC===0?C.muted:C.white,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,
                cursor:currentMC===0?"default":"pointer",opacity:currentMC===0?0.4:1}}>
              &larr; Previous
            </button>
            {currentMC < totalMC-1 ? (
              <button onClick={()=>setCurrentMC(p=>p+1)}
                style={{background:C.b,color:C.bg,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Next &rarr;
              </button>
            ) : (
              <button onClick={()=>setPhase("frq1")}
                style={{background:answeredMCCount===totalMC?C.g:"rgba(255,255,255,0.06)",
                  color:answeredMCCount===totalMC?C.bg:C.muted,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                  cursor:"pointer",opacity:answeredMCCount===totalMC?1:0.55,transition:"all 0.2s"}}>
                {answeredMCCount===totalMC?"Proceed to Free Response \u2192":`${answeredMCCount}/${totalMC} Answered`}
              </button>
            )}
          </div>

          {/* Skip to FRQ */}
          <div style={{textAlign:"center",marginTop:16}}>
            <button onClick={()=>setPhase("frq1")}
              style={{background:"rgba(56,189,248,0.07)",border:`1px solid rgba(56,189,248,0.2)`,
                color:"#64748b",fontSize:12,borderRadius:8,padding:"8px 18px",
                cursor:"pointer",fontFamily:font,fontWeight:600,transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.b;}}
              onMouseLeave={e=>{e.currentTarget.style.color="#64748b";}}>
              Skip to Free Response &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── FRQ phases ─────────────────────────────────────────────────────────
  const frqPhases = [
    { key:"frq1", q:frq1, label:"Poetry Analysis", Component:PoetryAnalysisTask, next:"frq2", prev:hasMC?"mc":null, nextLabel:"Prose Fiction Analysis" },
    { key:"frq2", q:frq2, label:"Prose Fiction Analysis", Component:ProseAnalysisTask, next:"frq3", prev:"frq1", nextLabel:"Literary Argument" },
    { key:"frq3", q:frq3, label:"Literary Argument", Component:LiteraryArgumentTask, next:null, prev:"frq2", nextLabel:null },
  ];

  const currentFrq = frqPhases.find(f => f.key === phase);
  if (currentFrq && currentFrq.q) {
    const { q, label, Component, next, prev, nextLabel } = currentFrq;
    const frqNum = q.num;
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.g,marginBottom:2}}>
                Section II &mdash; {label}
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; FRQ {frqNum} &middot; ~{q.suggestedTime} Minutes
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              {prev && (
                <button onClick={()=>setPhase(prev)}
                  style={{background:"rgba(0,245,160,0.1)",color:C.g,
                    border:`1px solid rgba(0,245,160,0.3)`,borderRadius:8,
                    padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:font}}>
                  &larr; {prev === "mc" ? "MC" : prev === "frq1" ? "FRQ 1" : "FRQ 2"}
                </button>
              )}
              <Timer totalSeconds={q.suggestedTime * 60}/>
            </div>
          </div>
          {/* FRQ nav pills */}
          <div style={{padding:"8px 24px",display:"flex",gap:8,alignItems:"center",
            maxWidth:960,margin:"0 auto",borderTop:`1px solid rgba(30,41,59,0.4)`}}>
            <span style={{fontSize:11,color:C.muted,marginRight:4,fontWeight:600,
              letterSpacing:"0.06em",textTransform:"uppercase"}}>FRQ:</span>
            {frqPhases.map((fp,i)=>{
              const active = fp.key === phase;
              const done = isFrqDone(fp.q?.num);
              return (
                <button key={fp.key} onClick={()=>setPhase(fp.key)} style={{
                  height:32,borderRadius:8,border:"none",cursor:"pointer",
                  fontFamily:font,fontWeight:700,fontSize:12,transition:"all 0.2s",
                  padding:"0 14px",
                  background:active?C.g:done?"rgba(0,245,160,0.15)":"rgba(255,255,255,0.07)",
                  color:active?C.bg:done?C.g:C.muted,
                  outline:active?`2px solid ${C.g}`:"none",outlineOffset:2}}>
                  {done&&!active?"\u2713 ":""}{i+1}. {fp.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"16px 12px 60px":"32px 24px 72px"}}>
          {/* Q header */}
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
            <div style={{width:40,height:40,borderRadius:"50%",
              background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontWeight:800,fontSize:16,color:C.g,flexShrink:0}}>{frqNum}</div>
            <div>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                textTransform:"uppercase",color:C.b}}>{label}</span>
              <span style={{fontSize:12,color:C.muted}}> &middot; {q.points} points &middot; ~{q.suggestedTime} min</span>
            </div>
          </div>

          <Component q={q} answer={frqAnswers[frqNum]} onAnswer={val=>setFrqAnswers(prev=>({...prev,[frqNum]:val}))}/>

          {/* Navigation */}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:24,gap:12}}>
            <button onClick={()=>{ if (prev) setPhase(prev); }}
              disabled={!prev}
              style={{background:"rgba(255,255,255,0.06)",color:prev?C.white:C.muted,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,
                cursor:prev?"pointer":"default",opacity:prev?1:0.4}}>
              &larr; Previous
            </button>
            {next ? (
              <button onClick={()=>setPhase(next)}
                style={{background:isFrqDone(frqNum)?C.g:"rgba(255,255,255,0.06)",
                  color:isFrqDone(frqNum)?C.bg:C.muted,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                  cursor:"pointer",opacity:isFrqDone(frqNum)?1:0.55,transition:"all 0.2s"}}>
                {nextLabel} &rarr;
              </button>
            ) : (
              <button onClick={()=>setSubmitted(true)}
                style={{background:isFrqDone(frqNum)?C.g:"rgba(255,255,255,0.06)",
                  color:isFrqDone(frqNum)?C.bg:C.muted,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                  cursor:isFrqDone(frqNum)?"pointer":"default",opacity:isFrqDone(frqNum)?1:0.55,transition:"all 0.2s"}}>
                Submit Exam {"\u2192"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Results Screen ────────────────────────────────────────────────────────
function ResultsScreen({ test, mcAnswers, frqAnswers, onHome, onRetry }) {
  const mob = useMobile();
  const [aiScores, setAiScores] = useState({});
  const [aiFeedback, setAiFeedback] = useState({});
  const [loadingKeys, setLoadingKeys] = useState({});
  const [expanded, setExpanded] = useState({frq1:true, frq2:true, frq3:true});
  const [manualScores, setManualScores] = useState({});
  const getScore = (key) => manualScores[key] !== undefined ? manualScores[key] : (aiScores[key] ?? null);

  const hasMC = !!(test.mcQuestions && test.mcQuestions.length);
  const mcTotal = hasMC ? test.mcQuestions.length : 0;
  const mcCorrect = hasMC ? test.mcQuestions.filter(q => mcAnswers?.[q.num] === q.answer).length : 0;
  const mcPct = mcTotal ? Math.round((mcCorrect/mcTotal)*100) : 0;

  const frq1 = test.questions.find(q => q.type === "poetry-analysis");
  const frq2 = test.questions.find(q => q.type === "prose-analysis");
  const frq3 = test.questions.find(q => q.type === "literary-argument");
  const frqs = [frq1, frq2, frq3].filter(Boolean);

  const totalFRQPossible = frqs.reduce((a,q)=>a+q.points,0);
  const getFrqEarned = () => {
    let total = 0;
    frqs.forEach(q => {
      const key = `frq-${q.num}-total`;
      const s = getScore(key);
      if (s !== null) total += s;
    });
    return total;
  };
  const frqEarned = getFrqEarned();
  const frqPct = totalFRQPossible ? Math.round((frqEarned/totalFRQPossible)*100) : 0;

  const apScore = hasMC
    ? calcAPScore(mcCorrect, frqEarned)
    : calcAPScoreFRQOnly(frqEarned, totalFRQPossible);
  const apColor = AP_SCORE_COLORS[apScore] || C.muted;

  // AI Scoring
  const fetchScoreAndFeedback = async (key, maxPoints, systemPrompt, userPrompt) => {
    setLoadingKeys(prev=>({...prev,[key]:true}));
    try {
      const resp = await fetch("https://ap-gov-simulator-production-edc0.up.railway.app/api/score", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ systemPrompt, userPrompt })
      });
      if (!resp.ok) {
        const errText = await resp.text().catch(()=>"");
        setAiFeedback(prev=>({...prev,[key]:`\u26A0\uFE0F Scoring server returned ${resp.status}. ${errText.slice(0,120)}`}));
        return;
      }
      const text = await resp.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch(parseErr) {
        const jsonMatch = text.match(/\{[\s\S]*"score"[\s\S]*"feedback"[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          setAiFeedback(prev=>({...prev,[key]:`\u26A0\uFE0F Could not parse scoring response.`}));
          return;
        }
      }
      const score = parsed.score !== null && parsed.score !== undefined
        ? Math.min(maxPoints, Math.max(0, parseInt(parsed.score)))
        : null;
      if(score !== null) setAiScores(prev=>({...prev,[key]:score}));
      if(parsed.feedback) setAiFeedback(prev=>({...prev,[key]:parsed.feedback}));
    } catch(e) {
      setAiFeedback(prev=>({...prev,[key]:`\u26A0\uFE0F Could not reach scoring server: ${e.message}`}));
    } finally {
      setLoadingKeys(prev=>({...prev,[key]:false}));
    }
  };

  useEffect(()=>{
    const tasks = [];
    frqs.forEach(q => {
      const answer = frqAnswers[q.num] || "(no response)";
      const rubricText = q.rubric.map(r=>`Row ${r.row} \u2014 ${r.category} (${r.points} pts): ${r.description}`).join("\n");
      const key = `frq-${q.num}-total`;
      const sys = q.scoringPrompt;
      const prompt = `${q.title} \u2014 Max ${q.points} points
Prompt: ${q.prompt}

Rubric:
${rubricText}

Student's essay:
"${answer}"

Return JSON: {"score": integer 0-${q.points}, "feedback": "..."}`;
      tasks.push({key, maxPts:q.points, sys, prompt});
    });

    (async()=>{
      for(const t of tasks){
        await fetchScoreAndFeedback(t.key, t.maxPts, t.sys, t.prompt);
        await new Promise(r=>setTimeout(r,300));
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
      <div style={{position:"fixed",...noiseBg}}/>
      <div style={{position:"relative",zIndex:1}}>
        {/* Header nav */}
        <div style={{background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`,padding:mob?"10px 12px":"14px 32px",
          display:"flex",alignItems:"center",gap:12}}>
          <button style={backBtn} onClick={onHome}>&larr; All Exams</button>
          <span style={{color:"#334155",fontSize:13}}>{test.label} &middot; Results &amp; Review</span>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"20px 12px 80px":"40px 24px 80px"}}>

          {/* ── AP Score card ── */}
          <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:20,
            padding:"36px 40px",marginBottom:28,overflow:"hidden",position:"relative"}}>
            <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,
              borderRadius:"50%",background:apColor,opacity:0.05,pointerEvents:"none"}}/>

            <div style={{display:"flex",alignItems:"center",gap:32,flexWrap:"wrap",marginBottom:28}}>
              <div style={{width:100,height:100,borderRadius:"50%",
                border:`4px solid ${apColor}`,
                display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,position:"relative"}}>
                <div style={{fontSize:48,fontWeight:900,color:apColor,lineHeight:1}}>{apScore}</div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",
                  textTransform:"uppercase",color:C.muted,marginBottom:4}}>AP Score</div>
                <div style={{fontSize:"1.6rem",fontWeight:800,color:apColor,marginBottom:4}}>
                  {AP_SCORE_LABELS[apScore]}
                </div>
                <div style={{fontSize:13,color:C.muted}}>
                  {hasMC && `MC: ${mcCorrect}/${mcTotal} (${mcPct}%) \u00b7 `}FRQ: {frqEarned}/{totalFRQPossible} ({frqPct}%)
                </div>
              </div>
            </div>

            {/* Score scale */}
            <div style={{display:"flex",gap:6,marginBottom:24}}>
              {[1,2,3,4,5].map(n=>(
                <div key={n} style={{flex:1,textAlign:"center",padding:"8px 0",
                  borderRadius:8,
                  background:n===apScore?apColor:"rgba(255,255,255,0.05)",
                  color:n===apScore?C.bg:C.muted,
                  fontWeight:n===apScore?800:600,fontSize:14,
                  border:n===apScore?`2px solid ${apColor}`:`1px solid ${C.border}`,
                  transition:"all 0.2s"}}>{n}</div>
              ))}
            </div>

            {/* Section breakdown */}
            <div style={{display:"grid",gridTemplateColumns:hasMC?"1fr 1fr":"1fr",gap:12}}>
              {hasMC && (
                <div style={{background:"rgba(56,189,248,0.06)",border:"1px solid rgba(56,189,248,0.15)",
                  borderRadius:12,padding:"16px 20px"}}>
                  <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                    textTransform:"uppercase",color:C.b,marginBottom:8}}>Section I &mdash; MC</div>
                  <div style={{fontSize:"1.5rem",fontWeight:800,color:C.b}}>{mcCorrect}/{mcTotal}</div>
                  <div style={{fontSize:12,color:C.muted}}>{mcPct}% correct &middot; 45% weight</div>
                </div>
              )}
              <div style={{background:"rgba(0,245,160,0.06)",border:"1px solid rgba(0,245,160,0.15)",
                borderRadius:12,padding:"16px 20px"}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                  textTransform:"uppercase",color:C.g,marginBottom:8}}>Section II &mdash; FRQ</div>
                <div style={{fontSize:"1.5rem",fontWeight:800,color:C.g}}>{frqEarned}/{totalFRQPossible}</div>
                <div style={{fontSize:12,color:C.muted}}>{frqPct}% earned &middot; 55% weight</div>
              </div>
            </div>

            {/* Download report button */}
            <div style={{textAlign:"center",marginTop:24}}>
              <button onClick={()=>generatePDF({test,mcAnswers,frqAnswers,mcCorrect,mcTotal,hasMC,frqs,getScore:getScore,aiFeedback,frqEarned,totalFRQPossible,frqPct,apScore})}
                style={{background:"linear-gradient(135deg,#7c3aed,#6d28d9)",color:"white",
                  border:"none",borderRadius:12,padding:"12px 32px",fontSize:14,fontWeight:700,
                  cursor:"pointer",fontFamily:font,maxWidth:280,width:"100%"}}>
                {"\u{1F4E5}"} Download Teacher Report
              </button>
            </div>
          </div>

          {/* ── MC Review ── */}
          {hasMC && (
            <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:16,
              padding:"24px 28px",marginBottom:20}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:3,height:22,background:C.b,borderRadius:2}}/>
                  <span style={{fontWeight:700,fontSize:14,color:C.white}}>Multiple Choice Review</span>
                </div>
                <span style={{fontSize:14,fontWeight:800,color:C.b}}>{mcCorrect}/{mcTotal}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:8}}>
                {test.mcQuestions.map(mq => {
                  const chosen = mcAnswers[mq.num];
                  const isCorrect = chosen === mq.answer;
                  const bg = isCorrect ? "rgba(0,245,160,0.06)" : !chosen ? "rgba(255,255,255,0.02)" : "rgba(255,71,87,0.06)";
                  const border = isCorrect ? "rgba(0,245,160,0.2)" : !chosen ? C.border : "rgba(255,71,87,0.2)";
                  return (
                    <div key={mq.num} style={{background:bg,border:`1px solid ${border}`,
                      borderRadius:8,padding:"8px 12px",fontSize:12,display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontWeight:800,color:isCorrect?C.g:!chosen?C.muted:C.r,width:28}}>{mq.num}</span>
                      <span style={{color:C.muted,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{mq.stem.slice(0,60)}{mq.stem.length>60?"...":""}</span>
                      <span style={{fontWeight:700,color:isCorrect?C.g:C.r,flexShrink:0}}>
                        {chosen ? (isCorrect ? "\u2713" : `${chosen} \u2192 ${mq.answer}`) : `\u2013 ${mq.answer}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── FRQ Review ── */}
          {frqs.map(q => {
            const key = `frq-${q.num}-total`;
            const score = getScore(key);
            const fb = aiFeedback[key];
            const loading = loadingKeys[key];
            const isExpanded = expanded[`frq${q.num}`];
            const answer = frqAnswers[q.num] || "";
            const typeLabel = q.type === "poetry-analysis" ? "Poetry Analysis" : q.type === "prose-analysis" ? "Prose Fiction Analysis" : "Literary Argument";

            return (
              <div key={q.num} style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:16,
                marginBottom:16,overflow:"hidden"}}>
                <button onClick={()=>setExpanded(p=>({...p,[`frq${q.num}`]:!p[`frq${q.num}`]}))}
                  style={{width:"100%",display:"flex",alignItems:"center",gap:14,
                    padding:"18px 24px",background:"none",border:"none",cursor:"pointer",
                    fontFamily:font,color:C.white,textAlign:"left"}}>
                  <div style={{width:36,height:36,borderRadius:"50%",
                    background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:800,fontSize:14,color:C.g,flexShrink:0}}>{q.num}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:14}}>{typeLabel}</div>
                    <div style={{fontSize:12,color:C.muted}}>
                      {score !== null ? `${score}/${q.points} pts` : "Scoring..."} &middot; ~{q.suggestedTime} min
                    </div>
                  </div>
                  {score !== null && (
                    <div style={{fontSize:"1.2rem",fontWeight:800,
                      color:score>=q.points*0.7?C.g:score>=q.points*0.4?C.b:C.r}}>{score}/{q.points}</div>
                  )}
                  {loading && (
                    <span style={{width:16,height:16,borderRadius:"50%",border:`2px solid ${C.b}`,
                      borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/>
                  )}
                  <span style={{color:C.muted,fontSize:16}}>{isExpanded?"\u25BE":"\u25B8"}</span>
                </button>

                {isExpanded && (
                  <div style={{padding:"0 24px 24px",borderTop:`1px solid ${C.border}`}}>
                    <div style={{padding:"16px 0"}}>
                      {/* Prompt */}
                      <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                        borderRadius:8,padding:"12px 16px",marginBottom:14,fontSize:13,
                        color:"rgba(255,255,255,0.7)",lineHeight:1.65}}>
                        <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",
                          letterSpacing:"0.1em",color:C.b,marginBottom:6}}>Prompt</div>
                        {q.prompt.slice(0,200)}{q.prompt.length>200?"...":""}
                      </div>

                      {/* Student response */}
                      <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                        borderRadius:8,padding:"12px 16px",marginBottom:14}}>
                        <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",
                          letterSpacing:"0.1em",color:C.muted,marginBottom:6}}>
                          Your Essay &middot; {answer.split(/\s+/).filter(Boolean).length} words
                        </div>
                        <div style={{fontSize:13,lineHeight:1.75,color:"rgba(255,255,255,0.78)",
                          whiteSpace:"pre-wrap",maxHeight:200,overflow:"auto"}}>
                          {answer || "(No response submitted)"}
                        </div>
                      </div>

                      {/* Rubric */}
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",
                          letterSpacing:"0.1em",color:C.gold,marginBottom:8}}>Rubric</div>
                        {q.rubric.map(r=>(
                          <div key={r.row} style={{display:"flex",gap:10,marginBottom:6,fontSize:12,
                            color:"rgba(255,255,255,0.65)",lineHeight:1.55}}>
                            <span style={{fontWeight:700,color:C.gold,flexShrink:0,width:32}}>
                              {r.category.slice(0,4)} ({r.points})
                            </span>
                            <span>{r.description}</span>
                          </div>
                        ))}
                      </div>

                      {/* AI Score with override */}
                      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                        <span style={{fontSize:12,fontWeight:700,color:C.muted}}>AI Score:</span>
                        {Array.from({length:q.points+1},(_,n)=>(
                          <button key={n} onClick={()=>setManualScores(p=>({...p,[key]:n}))}
                            style={{width:28,height:28,borderRadius:6,border:"none",cursor:"pointer",
                              fontFamily:font,fontWeight:700,fontSize:12,
                              background:(getScore(key)===n)?"rgba(0,245,160,0.2)":"rgba(255,255,255,0.06)",
                              color:(getScore(key)===n)?C.g:C.muted}}>{n}</button>
                        ))}
                        <span style={{fontSize:12,color:C.muted}}>/ {q.points}</span>
                      </div>

                      {/* Feedback */}
                      {(fb || loading) && <FeedbackBox text={fb} loading={loading}/>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* ── Bottom action buttons ── */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginTop:28}}>
            <button onClick={onRetry}
              style={{background:"rgba(255,255,255,0.06)",color:C.white,border:`1px solid ${C.border}`,
                borderRadius:12,padding:"14px 0",fontFamily:font,fontWeight:700,fontSize:14,
                cursor:"pointer",textAlign:"center"}}>
              {"\u{1F504}"} Retry
            </button>
            <button onClick={()=>generatePDF({test,mcAnswers,frqAnswers,mcCorrect,mcTotal,hasMC,frqs,getScore:getScore,aiFeedback,frqEarned,totalFRQPossible,frqPct,apScore})}
              style={{background:"rgba(255,255,255,0.06)",color:C.white,border:`1px solid ${C.border}`,
                borderRadius:12,padding:"14px 0",fontFamily:font,fontWeight:700,fontSize:14,
                cursor:"pointer",textAlign:"center"}}>
              {"\u{1F4E5}"} Download
            </button>
            <button onClick={onHome}
              style={{background:"rgba(255,255,255,0.06)",color:C.white,border:`1px solid ${C.border}`,
                borderRadius:12,padding:"14px 0",fontFamily:font,fontWeight:700,fontSize:14,
                cursor:"pointer",textAlign:"center"}}>
              {"\u{1F3E0}"} All Exams
            </button>
          </div>

          <div style={{textAlign:"center",marginTop:20,fontSize:11,color:"rgba(148,163,184,0.3)"}}>
            AI-generated scores and feedback are for practice only. Not endorsed by College Board.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Generate PDF Report ──────────────────────────────────────────────────
function generatePDF({ test, mcAnswers, frqAnswers, mcCorrect, mcTotal, hasMC, frqs, getScore, aiFeedback, frqEarned, totalFRQPossible, frqPct, apScore }) {
  const esc = str => (str||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const nl2br = str => esc(str).split("\n").join("<br/>");
  const today = new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  const mcPct = mcTotal ? Math.round((mcCorrect/mcTotal)*100) : 0;

  // MC block
  const mcBlock = hasMC ? `
    <div class="task-card" style="margin-bottom:14px;">
      <div class="task-hdr" style="background:#1a3a5c;">
        <div class="task-num" style="border-color:#38bdf8;color:#38bdf8;">I</div>
        <div>
          <div class="task-hdr-lbl">Section I</div>
          <div class="task-hdr-name">Multiple Choice \u00b7 55 Questions \u00b7 60 Minutes</div>
        </div>
        <div class="task-score" style="color:#38bdf8;">${mcCorrect} / ${mcTotal}</div>
      </div>
      <div class="task-body">
        <div style="display:flex;align-items:center;gap:16px;padding:10px 0 14px;border-bottom:1px solid #eee;margin-bottom:18px;">
          <div style="font-size:32px;font-weight:800;font-family:monospace;color:#111;">${mcCorrect}<span style="font-size:16px;color:#888;">/${mcTotal}</span></div>
          <div style="flex:1;background:#eee;height:10px;border-radius:5px;overflow:hidden;">
            <div style="height:100%;width:${mcPct}%;background:${mcPct>=70?"#27ae60":mcPct>=50?"#e67e22":"#e74c3c"};border-radius:5px;"></div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${mcPct>=70?"#27ae60":mcPct>=50?"#e67e22":"#e74c3c"};">${mcPct}%</div>
        </div>
        ${(test.mcQuestions||[]).map(mq=>{
          const chosen = mcAnswers?.[mq.num];
          const isCorrect = chosen === mq.answer;
          const unanswered = !chosen;
          const borderCol = isCorrect?"#b8e4c8":unanswered?"#ddd":"#f5c6c6";
          const hdrBg = isCorrect?"#e8f8f0":unanswered?"#f9f9f9":"#fdf0f0";
          const statusCol = isCorrect?"#27ae60":unanswered?"#999":"#e74c3c";
          const statusLabel = isCorrect?"\u2713 Correct":unanswered?"\u2013 Not answered":"\u2717 Incorrect";
          return `<div style="border:1px solid ${borderCol};border-radius:6px;margin-bottom:10px;overflow:hidden;page-break-inside:avoid;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;background:${hdrBg};border-bottom:1px solid ${borderCol};">
              <div style="font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#777;">Q${mq.num}</div>
              <div style="font-size:11px;font-weight:800;color:${statusCol};">${statusLabel}</div>
            </div>
            <div style="padding:10px 12px 6px;">
              <div style="font-size:12px;font-weight:600;color:#111;line-height:1.6;margin-bottom:10px;">${esc(mq.stem)}</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
                ${Array.from({length:mq.choices.length/2},(_,i)=>{
                  const letter = mq.choices[i*2];
                  const text   = mq.choices[i*2+1];
                  const isChosen  = chosen === letter;
                  const isAnsKey  = mq.answer === letter;
                  let bg="#fff", border="#ddd", col="#333", badge="";
                  if(isAnsKey && isChosen) { bg="#e8f8f0"; border="#27ae60"; col="#27ae60"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#27ae60;white-space:nowrap;">\u2713 Correct</span>'; }
                  else if(isAnsKey)        { bg="#e8f8f0"; border="#27ae60"; col="#27ae60"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#27ae60;white-space:nowrap;">\u2713 Answer</span>'; }
                  else if(isChosen)        { bg="#fdf0f0"; border="#e74c3c"; col="#e74c3c"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#e74c3c;white-space:nowrap;">\u2717 Selected</span>'; }
                  return `<div style="display:flex;align-items:flex-start;gap:7px;padding:5px 8px;background:${bg};border:1px solid ${border};border-radius:4px;">
                    <span style="font-weight:800;font-size:11px;color:${col};flex-shrink:0;min-width:14px;">${letter}</span>
                    <span style="font-size:11px;color:${col};line-height:1.4;flex:1;">${esc(text)}${badge}</span>
                  </div>`;
                }).join("")}
              </div>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>` : "";

  // FRQ blocks
  const frqBlocks = frqs.map(q => {
    const key = `frq-${q.num}-total`;
    const score = getScore(key) ?? 0;
    const fb = aiFeedback[key] || "";
    const answer = frqAnswers[q.num] || "";
    const typeLabel = q.type === "poetry-analysis" ? "Poetry Analysis" : q.type === "prose-analysis" ? "Prose Fiction Analysis" : "Literary Argument";
    const rubricHtml = q.rubric.map(r=>
      `<tr><td style="padding:4px 8px;font-weight:700;font-size:11px;">${esc(r.category)}</td><td style="padding:4px 8px;font-size:11px;">${r.points} pts</td><td style="padding:4px 8px;font-size:11px;">${esc(r.description)}</td></tr>`
    ).join("");

    return `<div class="task-card">
      <div class="task-hdr">
        <div class="task-num">${q.num}</div>
        <div>
          <div class="task-hdr-lbl">Free Response Question ${q.num}</div>
          <div class="task-hdr-name">${esc(typeLabel)} \u00b7 ${q.points} points</div>
        </div>
        <div class="task-score">${score} / ${q.points}</div>
      </div>
      <div class="task-body">
        <table style="width:100%;border-collapse:collapse;margin-bottom:12px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          <thead><tr style="background:#f8f9fa;"><th style="padding:6px 8px;text-align:left;font-size:10px;text-transform:uppercase;color:#666;">Category</th><th style="padding:6px 8px;font-size:10px;text-transform:uppercase;color:#666;">Points</th><th style="padding:6px 8px;text-align:left;font-size:10px;text-transform:uppercase;color:#666;">Description</th></tr></thead>
          <tbody>${rubricHtml}</tbody>
        </table>
        <div class="response-wrap">
          <div class="response-hdr">\u270F Response \u00b7 ${answer.split(/\s+/).filter(Boolean).length} words</div>
          <div class="response-body ${!answer.trim()?"empty":""}">${answer.trim()?nl2br(answer):"No response submitted."}</div>
        </div>
        ${fb?`<div class="ai-fb"><span class="ai-fb-label">\u2726 AI Feedback</span>${nl2br(fb)}</div>`:""}
      </div>
    </div>`;
  }).join("");

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>AP English Lit Report - ${esc(test.label)}</title>
<style>
@page{size:letter;margin:0.6in 0.7in}
body{margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:13px;color:#111;line-height:1.6;background:#fff}
.cover{text-align:center;padding:40px 0 30px;border-bottom:3px solid #111;margin-bottom:24px}
.cover h1{font-size:22px;margin:0 0 4px}
.cover .sub{font-size:13px;color:#555}
.task-card{border:1px solid #ddd;border-radius:8px;margin-bottom:14px;overflow:hidden;page-break-inside:avoid}
.task-hdr{display:flex;align-items:center;gap:14px;padding:12px 16px;background:#1a2a3a;color:white}
.task-num{width:32px;height:32px;border-radius:50%;border:2px solid #00f5a0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#00f5a0;flex-shrink:0}
.task-hdr-lbl{font-size:9px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.7}
.task-hdr-name{font-weight:700;font-size:14px}
.task-score{margin-left:auto;font-size:18px;font-weight:800;color:#00f5a0}
.task-body{padding:14px 16px}
.response-wrap{border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:10px}
.response-hdr{background:#f8f9fa;padding:6px 12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#666;border-bottom:1px solid #e5e7eb}
.response-body{padding:10px 12px;font-size:12px;line-height:1.7;white-space:pre-wrap}
.response-body.empty{color:#999;font-style:italic}
.ai-fb{background:#f0f7ff;border:1px solid #d0e4f5;border-radius:6px;padding:10px 14px;margin-top:8px;font-size:12px;line-height:1.6}
.ai-fb-label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#2563eb;margin-bottom:4px}
.score-summary{display:flex;gap:16px;justify-content:center;margin:16px 0 24px;flex-wrap:wrap}
.score-summary div{text-align:center;padding:10px 20px;border:1px solid #ddd;border-radius:8px}
.score-summary .val{font-size:22px;font-weight:800}
.score-summary .lbl{font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#888}
@media print{.no-print{display:none!important}}
</style></head><body>
<div class="cover">
  <h1>\u{1F4D6} AP English Literature &amp; Composition</h1>
  <div class="sub">${esc(test.label)} &middot; ${today}</div>
</div>
<div class="score-summary">
  <div><div class="val" style="color:${AP_SCORE_COLORS[apScore]||"#333"}">${apScore}</div><div class="lbl">AP Score</div></div>
  ${hasMC?`<div><div class="val">${mcCorrect}/${mcTotal}</div><div class="lbl">MC (${mcPct}%)</div></div>`:""}
  <div><div class="val">${frqEarned}/${totalFRQPossible}</div><div class="lbl">FRQ (${frqPct}%)</div></div>
</div>
${mcBlock}
${frqBlocks}
<div style="text-align:center;margin-top:20px;padding:12px;font-size:10px;color:#aaa;border-top:1px solid #eee;">
  AI-generated report for practice only. Not endorsed by College Board. &middot; Generated ${today}
</div>
<div class="no-print" style="text-align:center;margin:20px 0;">
  <button onclick="window.print()" style="padding:10px 24px;font-size:14px;font-weight:700;background:#4f46e5;color:white;border:none;border-radius:8px;cursor:pointer;">Print / Save as PDF</button>
</div>
</body></html>`;

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
  } else {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "teacher-report-ap-english-lit.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
}

// ── BetaBanner ────────────────────────────────────────────────────────────
function BetaBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div style={{
      position:"fixed", top:0, left:0, right:0, zIndex:9999,
      background:"linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #6d28d9 100%)",
      borderBottom:"1px solid rgba(255,255,255,0.1)",
      padding:"8px 16px",
      display:"flex", alignItems:"center", justifyContent:"center", gap:10,
      fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.9)",
    }}>
      <div style={{width:32, flexShrink:0}}/>
      <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", justifyContent:"center"}}>
        <span style={{
          background:"white", color:"#4f46e5",
          fontSize:10, fontWeight:800, letterSpacing:"0.08em",
          textTransform:"uppercase", padding:"2px 7px", borderRadius:4, flexShrink:0,
        }}>BETA</span>
        <span style={{color:"rgba(255,255,255,0.9)"}}>
          This simulator is in beta. Found a bug or have feedback?{" "}
          <a href="mailto:apexamsimulator@gmail.com"
            style={{color:"white", fontWeight:700, textDecoration:"none"}}>
            apexamsimulator@gmail.com
          </a>
        </span>
      </div>
      <button onClick={()=>setDismissed(true)} style={{
        background:"none", border:"none", color:"rgba(255,255,255,0.6)",
        cursor:"pointer", fontSize:18, lineHeight:1, padding:"2px 4px",
        flexShrink:0, width:32,
      }}>
        &times;
      </button>
    </div>
  );
}

// ── ErrorBoundary ─────────────────────────────────────────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{minHeight:"100vh",background:"#060b14",display:"flex",
          alignItems:"center",justifyContent:"center",fontFamily:font,color:"#fff",
          flexDirection:"column",gap:16,padding:32,textAlign:"center"}}>
          <div style={{fontSize:48}}>{"⚠️"}</div>
          <h2 style={{margin:0,fontSize:20}}>Something went wrong</h2>
          <p style={{color:"#94a3b8",fontSize:14,maxWidth:400}}>
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <button onClick={()=>window.location.reload()}
            style={{background:"#38bdf8",color:"#060b14",border:"none",borderRadius:10,
              padding:"10px 24px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:font}}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("landing");
  const [selectedTest, setSelectedTest] = useState(null);
  return (
    <ErrorBoundary>
      <BetaBanner/>
      <div style={{paddingTop:40}}>
        {screen==="exam" && selectedTest
          ? <ExamScreen test={selectedTest} onFinish={()=>{setSelectedTest(null);setScreen("landing");}}/>
          : <LandingScreen onSelect={t=>{setSelectedTest(t);setScreen("exam");}}/>
        }
      </div>
    </ErrorBoundary>
  );
}
