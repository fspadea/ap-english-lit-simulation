// AP English Literature & Composition — Test Data
// Format: interleaved choices ["A","text","B","text","C","text","D","text","E","text"]
// Passages: [{ lineStart, text }] arrays — NEVER raw strings

const ALL_TESTS = [
  {
    id: "sim1",
    label: "Practice Simulation 1",
    badge: "Simulation",
    badgeColor: "#00F5A0",
    badgeBg: "rgba(0,245,160,0.12)",
    badgeBorder: "rgba(0,245,160,0.25)",
    description: "Full-length AP English Lit exam: 55 MC (5 literary passage sets) + 3 FRQ essays with AI scoring.",
    totalTime: 180 * 60,
    totalMCTime: 60 * 60,

    // ── MC PASSAGE SETS ──────────────────────────────────────────────────
    mcSets: [
      {
        id: "set1",
        title: "Set 1 — Poetry: \"To His Coy Mistress\" by Andrew Marvell (1681)",
        type: "poetry",
        passage: [
          { lineStart: 1, text: "Had we but world enough and time," },
          { lineStart: 2, text: "This coyness, lady, were no crime." },
          { lineStart: 3, text: "We would sit down, and think which way" },
          { lineStart: 4, text: "To walk, and pass our long love's day." },
          { lineStart: 5, text: "Thou by the Indian Ganges' side" },
          { lineStart: 6, text: "Shouldst rubies find; I by the tide" },
          { lineStart: 7, text: "Of Humber would complain. I would" },
          { lineStart: 8, text: "Love you ten years before the flood," },
          { lineStart: 9, text: "And you should, if you please, refuse" },
          { lineStart: 10, text: "Till the conversion of the Jews." },
          { lineStart: 11, text: "My vegetable love should grow" },
          { lineStart: 12, text: "Vaster than empires and more slow;" },
          { lineStart: 13, text: "An hundred years should go to praise" },
          { lineStart: 14, text: "Thine eyes, and on thy forehead gaze;" },
          { lineStart: 15, text: "Two hundred to adore each breast," },
          { lineStart: 16, text: "But thirty thousand to the rest;" },
          { lineStart: 17, text: "An age at least to every part," },
          { lineStart: 18, text: "And the last age should show your heart." },
          { lineStart: 19, text: "For, lady, you deserve this state," },
          { lineStart: 20, text: "Nor would I love at lower rate." },
          { lineStart: "", text: "" },
          { lineStart: 21, text: "But at my back I always hear" },
          { lineStart: 22, text: "Time's wingèd chariot hurrying near;" },
          { lineStart: 23, text: "And yonder all before us lie" },
          { lineStart: 24, text: "Deserts of vast eternity." },
          { lineStart: 25, text: "Thy beauty shall no more be found;" },
          { lineStart: 26, text: "Nor, in thy marble vault, shall sound" },
          { lineStart: 27, text: "My echoing song; then worms shall try" },
          { lineStart: 28, text: "That long-preserved virginity," },
          { lineStart: 29, text: "And your quaint honour turn to dust," },
          { lineStart: 30, text: "And into ashes all my lust:" },
          { lineStart: 31, text: "The grave's a fine and private place," },
          { lineStart: 32, text: "But none, I think, do there embrace." },
          { lineStart: "", text: "" },
          { lineStart: 33, text: "Now therefore, while the youthful hue" },
          { lineStart: 34, text: "Sits on thy skin like morning dew," },
          { lineStart: 35, text: "And while thy willing soul transpires" },
          { lineStart: 36, text: "At every pore with instant fires," },
          { lineStart: 37, text: "Now let us sport us while we may," },
          { lineStart: 38, text: "And now, like amorous birds of prey," },
          { lineStart: 39, text: "Rather at once our time devour" },
          { lineStart: 40, text: "Than languish in his slow-chapped power." },
          { lineStart: 41, text: "Let us roll all our strength and all" },
          { lineStart: 42, text: "Our sweetness up into one ball," },
          { lineStart: 43, text: "And tear our pleasures with rough strife" },
          { lineStart: 44, text: "Through the iron gates of life:" },
          { lineStart: 45, text: "Thus, though we cannot make our sun" },
          { lineStart: 46, text: "Stand still, yet we will make him run." },
        ]
      },
      {
        id: "set2",
        title: "Set 2 — Prose Fiction: from \"The Yellow Wallpaper\" by Charlotte Perkins Gilman (1892)",
        type: "prose",
        passage: [
          { lineStart: 1, text: "It is very seldom that mere ordinary people like John and myself secure ancestral halls for the summer." },
          { lineStart: 2, text: "A colonial mansion, a hereditary estate, I would say a haunted house, and reach the height of romantic" },
          { lineStart: 3, text: "felicity—but that would be asking too much of fate!" },
          { lineStart: 4, text: "Still I will proudly declare that there is something queer about it." },
          { lineStart: 5, text: "Else, why should it be let so cheaply? And why have stood so long untenanted?" },
          { lineStart: 6, text: "John laughs at me, of course, but one expects that in marriage." },
          { lineStart: 7, text: "John is practical in the extreme. He has no patience with faith, an intense horror of" },
          { lineStart: 8, text: "superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures." },
          { lineStart: 9, text: "John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is" },
          { lineStart: 10, text: "dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster." },
          { lineStart: 11, text: "You see, he does not believe I am sick!" },
          { lineStart: 12, text: "And what can one do?" },
          { lineStart: 13, text: "If a physician of high standing, and one's own husband, assures friends and relatives that there is" },
          { lineStart: 14, text: "really nothing the matter with one but temporary nervous depression—a slight hysterical tendency—" },
          { lineStart: 15, text: "what is one to do?" },
          { lineStart: 16, text: "My brother is also a physician, and also of high standing, and he says the same thing." },
          { lineStart: 17, text: "So I take phosphates or phosphites—whichever it is, and tonics, and journeys, and air, and" },
          { lineStart: 18, text: "exercise, and am absolutely forbidden to \"work\" until I am well again." },
          { lineStart: 19, text: "Personally, I disagree with their ideas." },
          { lineStart: 20, text: "Personally, I believe that congenial work, with excitement and change, would do me good." },
          { lineStart: 21, text: "But what is one to do?" },
          { lineStart: 22, text: "I did write for a while in spite of them; but it does exhaust me a good deal—having to be so" },
          { lineStart: 23, text: "sly about it, or else meet with heavy opposition." },
          { lineStart: 24, text: "I sometimes fancy that in my condition if I had less opposition and more society and stimulus—" },
          { lineStart: 25, text: "but John says the very worst thing I can do is to think about my condition, and I confess it" },
          { lineStart: 26, text: "always makes me feel bad." },
          { lineStart: 27, text: "So I will let it alone and talk about the house." },
          { lineStart: 28, text: "The most beautiful place! It is quite alone, standing well back from the road, quite three miles" },
          { lineStart: 29, text: "from the village. It makes me think of English places that you read about, for there are hedges" },
          { lineStart: 30, text: "and walls and gates that lock, and lots of separate little houses for the gardeners and people." },
          { lineStart: 31, text: "There is a delicious garden! I never saw such a garden—large and shady, full of box-bordered" },
          { lineStart: 32, text: "paths, and lined with long grape-covered arbors with seats under them." },
          { lineStart: 33, text: "There were greenhouses, too, but they are all broken now." },
          { lineStart: 34, text: "There was some legal trouble, I believe, something about the heirs and co-heirs; anyhow, the" },
          { lineStart: 35, text: "place has been empty for years." },
          { lineStart: 36, text: "That spoils my ghostliness, I am afraid; but I don't care—there is something strange about the" },
          { lineStart: 37, text: "house—I can feel it." },
          { lineStart: 38, text: "I even said so to John one moonlight evening, but he said what I felt was a draught, and shut" },
          { lineStart: 39, text: "the window." },
          { lineStart: 40, text: "I get unreasonably angry with John sometimes. I'm sure I never used to be so sensitive. I think" },
          { lineStart: 41, text: "it is due to this nervous condition." },
          { lineStart: 42, text: "But John says if I feel so I shall neglect proper self-control; so I take pains to control myself—" },
          { lineStart: 43, text: "before him, at least, and that makes me very tired." },
        ]
      },
      {
        id: "set3",
        title: "Set 3 — Poetry: \"Those Winter Sundays\" by Robert Hayden (1962)",
        type: "poetry",
        passage: [
          { lineStart: 1, text: "Sundays too my father got up early" },
          { lineStart: 2, text: "and put his clothes on in the blueblack cold," },
          { lineStart: 3, text: "then with cracked hands that ached" },
          { lineStart: 4, text: "from labor in the weekday weather made" },
          { lineStart: 5, text: "banked fires blaze. No one ever thanked him." },
          { lineStart: "", text: "" },
          { lineStart: 6, text: "I'd wake and hear the cold splintering, breaking." },
          { lineStart: 7, text: "When the rooms were warm, he'd call," },
          { lineStart: 8, text: "and slowly I would rise and dress," },
          { lineStart: 9, text: "fearing the chronic angers of that house," },
          { lineStart: "", text: "" },
          { lineStart: 10, text: "Speaking indifferently to him," },
          { lineStart: 11, text: "who had driven out the cold" },
          { lineStart: 12, text: "and polished my good shoes as well." },
          { lineStart: 13, text: "What did I know, what did I know" },
          { lineStart: 14, text: "of love's austere and lonely offices?" },
        ]
      },
      {
        id: "set4",
        title: "Set 4 — Prose Fiction: from Pride and Prejudice by Jane Austen (1813)",
        type: "prose",
        passage: [
          { lineStart: 1, text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must" },
          { lineStart: 2, text: "be in want of a wife." },
          { lineStart: 3, text: "However little known the feelings or views of such a man may be on his first entering a" },
          { lineStart: 4, text: "neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is" },
          { lineStart: 5, text: "considered as the rightful property of some one or other of their daughters." },
          { lineStart: 6, text: "\"My dear Mr. Bennet,\" said his lady to him one day, \"have you heard that Netherfield Park is" },
          { lineStart: 7, text: "let at last?\"" },
          { lineStart: 8, text: "Mr. Bennet replied that he had not." },
          { lineStart: 9, text: "\"But it is,\" returned she; \"for Mrs. Long has just been here, and she told me all about it.\"" },
          { lineStart: 10, text: "Mr. Bennet made no answer." },
          { lineStart: 11, text: "\"Do not you want to know who has taken it?\" cried his wife impatiently." },
          { lineStart: 12, text: "\"You want to tell me, and I have no objection to hearing it.\"" },
          { lineStart: 13, text: "This was invitation enough." },
          { lineStart: 14, text: "\"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large" },
          { lineStart: 15, text: "fortune from the north of England; that he came down on Monday in a chaise and four to see the" },
          { lineStart: 16, text: "place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to" },
          { lineStart: 17, text: "take possession before Michaelmas, and some of his servants are to be in the house by the end of" },
          { lineStart: 18, text: "next week.\"" },
          { lineStart: 19, text: "\"What is his name?\"" },
          { lineStart: 20, text: "\"Bingley.\"" },
          { lineStart: 21, text: "\"Is he married or single?\"" },
          { lineStart: 22, text: "\"Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year." },
          { lineStart: 23, text: "What a fine thing for our girls!\"" },
          { lineStart: 24, text: "\"How so? How can it affect them?\"" },
          { lineStart: 25, text: "\"My dear Mr. Bennet,\" replied his wife, \"how can you be so tiresome! You must know that I am" },
          { lineStart: 26, text: "thinking of his marrying one of them.\"" },
          { lineStart: 27, text: "\"Is that his design in settling here?\"" },
          { lineStart: 28, text: "\"Design! Nonsense, how can you talk so! But it is very likely that he may fall in love with one" },
          { lineStart: 29, text: "of them, and therefore you must visit him as soon as he comes.\"" },
          { lineStart: 30, text: "\"I see no occasion for that. You and the girls may go, or you may send them by themselves, which" },
          { lineStart: 31, text: "perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley might like" },
          { lineStart: 32, text: "you the best of the party.\"" },
          { lineStart: 33, text: "\"My dear, you flatter me. I certainly have had my share of beauty, but I do not pretend to be" },
          { lineStart: 34, text: "anything extraordinary now. When a woman has five grown-up daughters, she ought to give over" },
          { lineStart: 35, text: "thinking of her own beauty.\"" },
          { lineStart: 36, text: "\"In such cases, a woman has not often much beauty to think of.\"" },
          { lineStart: 37, text: "\"But, my dear, you must indeed go and see Mr. Bingley when he comes into the neighbourhood.\"" },
          { lineStart: 38, text: "\"It is more than I engage for, I assure you.\"" },
          { lineStart: 39, text: "\"But consider your daughters. Only think what an establishment it would be for one of them. Sir" },
          { lineStart: 40, text: "William and Lady Lucas are determined to go, merely on that account, for in general, you know," },
          { lineStart: 41, text: "they visit no newcomers. Indeed you must go, for it will be impossible for us to visit him, if you" },
          { lineStart: 42, text: "do not.\"" },
        ]
      },
      {
        id: "set5",
        title: "Set 5 — Drama: from A Raisin in the Sun by Lorraine Hansberry (1959)",
        type: "prose",
        passage: [
          { lineStart: 1, text: "[The YOUNGER living room. RUTH is ironing. WALTER enters from the bedroom.]" },
          { lineStart: 2, text: "WALTER: You know what I was thinking about in the bathroom this morning?" },
          { lineStart: 3, text: "RUTH: No." },
          { lineStart: 4, text: "WALTER: How come you always try to be so pleasant!" },
          { lineStart: 5, text: "RUTH: What is there to be pleasant about!" },
          { lineStart: 6, text: "WALTER: You want to know what I was thinking about in the bathroom or not!" },
          { lineStart: 7, text: "RUTH: I know what you was thinking about." },
          { lineStart: 8, text: "WALTER: (ignoring her) About what me and Willy Harris was talking about last night." },
          { lineStart: 9, text: "RUTH: (immediately—a refrain) Willy Harris is a good-for-nothing loudmouth." },
          { lineStart: 10, text: "WALTER: Anybody who talks to me has got to be a good-for-nothing loudmouth, ain't he? And" },
          { lineStart: 11, text: "what you know about who is just a good-for-nothing loudmouth? Charlie Atkins was just a" },
          { lineStart: 12, text: "\"good-for-nothing loudmouth\" too, wasn't he! When he wanted me to go in the dry-cleaning" },
          { lineStart: 13, text: "business with him. And now—he's grossing a hundred thousand a year. A hundred thousand dollars" },
          { lineStart: 14, text: "a year! You still call him a loudmouth!" },
          { lineStart: 15, text: "RUTH: (bitterly) Oh, Walter Lee ..." },
          { lineStart: 16, text: "[She folds her head on her arms over the table.]" },
          { lineStart: 17, text: "WALTER: (rising and coming to her and standing over her) You tired, ain't you? Tired of" },
          { lineStart: 18, text: "everything. Me, the boy, the way we live—this beat-up hole—everything. Ain't you? (She doesn't" },
          { lineStart: 19, text: "look up, doesn't answer.) So tired—moaning and groaning all the time, but you wouldn't do nothing" },
          { lineStart: 20, text: "to help, would you? You couldn't be on my side that long for nothing, could you?" },
          { lineStart: 21, text: "RUTH: Walter, please leave me alone." },
          { lineStart: 22, text: "WALTER: A man needs for a woman to back him up ..." },
          { lineStart: 23, text: "RUTH: Walter—" },
          { lineStart: 24, text: "WALTER: Mama would listen to you. You know she listen to you more than she do me and Bennie." },
          { lineStart: 25, text: "She think more of you. All you have to do is just sit down with her when you drinking your coffee" },
          { lineStart: 26, text: "one morning and talking 'bout things like you do and—(He sits down beside her and demonstrates" },
          { lineStart: 27, text: "graphically what he thinks her methods and tone should be.)—you just sip your coffee, see, and" },
          { lineStart: 28, text: "say easy like that you been thinking 'bout that deal Walter Lee is so interested in, 'bout the" },
          { lineStart: 29, text: "store and all, and sip some more coffee, like what you saying ain't really that important to you—" },
          { lineStart: 30, text: "And the next thing you know, she be listening good and asking you questions and when I come home—" },
          { lineStart: 31, text: "I can tell her the details. This ain't no fly-by-night proposition, baby. I mean we figured it" },
          { lineStart: 32, text: "out, me and Willy and Bobo." },
          { lineStart: 33, text: "RUTH: (with a frown) Bobo?" },
          { lineStart: 34, text: "WALTER: Yeah. You see, this little liquor store we got in mind cost seventy-five thousand and we" },
          { lineStart: 35, text: "figured the initial investment on the place be 'bout thirty thousand, see. That be ten thousand" },
          { lineStart: 36, text: "each. Course, there's a couple of hundred you got to pay so's you don't spend your life just" },
          { lineStart: 37, text: "waiting for them clowns to let your license get approved—" },
          { lineStart: 38, text: "RUTH: You mean graft?" },
          { lineStart: 39, text: "WALTER: (frowning impatiently) Don't call it that. See there, that just goes to show you what" },
          { lineStart: 40, text: "women understand about the world. Baby, don't nothing happen for you in this world 'less you pay" },
          { lineStart: 41, text: "somebody off!" },
          { lineStart: 42, text: "RUTH: Walter, leave me alone! (She raises her head and stares at him vigorously—then says, more" },
          { lineStart: 43, text: "quietly) Eat your eggs, they gonna be cold." },
          { lineStart: 44, text: "WALTER: (straightening up from her and looking off) That's it. There you are. Man say to his" },
          { lineStart: 45, text: "woman: I got me a dream. His woman say: Eat your eggs. (Sadly, but with gathering power) Man" },
          { lineStart: 46, text: "say: I got to take hold of this here world, baby! And a woman will say: Eat your eggs and go to" },
          { lineStart: 47, text: "work. (Passionately now) Man say: I got to change my life, I'm choking to death, baby! And his" },
          { lineStart: 48, text: "woman say—(in utter anguish as he brings his fists down on his thighs)—Your eggs is getting cold!" },
        ]
      }
    ],

    // ── MC QUESTIONS ──────────────────────────────────────────────────────
    mcQuestions: [
      // ── SET 1: Marvell "To His Coy Mistress" (11 Qs) ──
      { num:1, set:1, stem:"The speaker's tone in lines 1–20 is best described as", choices:["A","urgently desperate","B","playfully hyperbolic","C","bitterly resentful","D","calmly philosophical","E","coldly indifferent"], answer:"B" },
      { num:2, set:1, stem:"In context, the phrase \"vegetable love\" (line 11) most nearly conveys the idea of", choices:["A","a love rooted in the natural world","B","a love that is nourishing and healthy","C","a love that grows slowly and organically","D","a love that is plain and unremarkable","E","a love that withers quickly"], answer:"C" },
      { num:3, set:1, stem:"The images in lines 21–32 (\"But at my back ... do there embrace\") primarily serve to", choices:["A","romanticize the passage of time","B","introduce a counter-argument to the speaker's proposal","C","underscore the inevitability of death and decay","D","celebrate the endurance of physical beauty","E","contrast rural and urban settings"], answer:"C" },
      { num:4, set:1, stem:"The phrase \"Time's wingèd chariot\" (line 22) functions as", choices:["A","an allusion to classical mythology","B","a personification of death","C","an example of synecdoche","D","a metaphor for the relentless advance of time","E","a simile comparing time to flight"], answer:"D" },
      { num:5, set:1, stem:"Which of the following best describes the shift that occurs at line 33 (\"Now therefore\")?", choices:["A","From hypothetical leisure to urgent action","B","From praise of beauty to criticism of vanity","C","From private meditation to public declaration","D","From literal description to extended metaphor","E","From first person to second person address"], answer:"A" },
      { num:6, set:1, stem:"In lines 38–40, the comparison of the lovers to \"amorous birds of prey\" suggests they should", choices:["A","flee from their enemies","B","aggressively seize the moment","C","observe nature more carefully","D","hunt for new romantic partners","E","protect one another from harm"], answer:"B" },
      { num:7, set:1, stem:"The poem's overall argument is best summarized as", choices:["A","love is eternal and transcends mortality","B","physical beauty is more valuable than intellect","C","time is fleeting, so lovers should act now","D","women should be more modest in their behavior","E","nature provides the model for ideal romance"], answer:"C" },
      { num:8, set:1, stem:"The poem employs which of the following structural strategies?", choices:["A","A three-part syllogism: if, but, therefore","B","A series of unrelated lyric fragments","C","An alternating pattern of dialogue and monologue","D","A chronological narrative from youth to old age","E","A question-and-answer format between two speakers"], answer:"A" },
      { num:9, set:1, stem:"The word \"quaint\" in line 29 most likely carries a connotation of", choices:["A","charming simplicity","B","old-fashioned irrelevance","C","curious peculiarity","D","deliberate modesty","E","ironic futility"], answer:"E" },
      { num:10, set:1, stem:"Lines 43–44 (\"And tear our pleasures with rough strife / Through the iron gates of life\") contain an example of", choices:["A","pastoral imagery","B","paradox","C","violent imagery suggesting passionate assertion","D","understatement","E","comic hyperbole"], answer:"C" },
      { num:11, set:1, stem:"The concluding couplet (lines 45–46) achieves its effect primarily through", choices:["A","an appeal to religious authority","B","a witty reversal in which the lovers master time rather than submit to it","C","a tone of melancholy resignation","D","an extended comparison to a race","E","a shift from plural to singular pronouns"], answer:"B" },

      // ── SET 2: Gilman "The Yellow Wallpaper" (11 Qs) ──
      { num:12, set:2, stem:"The narrator's parenthetical remark in lines 9–10 (\"I would not say it to a living soul ... dead paper and a great relief to my mind\") primarily reveals her", choices:["A","distrust of her husband's medical competence","B","awareness that her private thoughts must be concealed","C","desire to entertain the reader with humor","D","preference for writing over speaking","E","suspicion that she is being watched"], answer:"B" },
      { num:13, set:2, stem:"The repetition of \"what is one to do?\" and \"But what is one to do?\" (lines 12, 15, 21) serves to emphasize the narrator's", choices:["A","intellectual curiosity about her condition","B","acceptance of her prescribed treatment","C","frustration and sense of powerlessness","D","indifference to her situation","E","hostility toward other women"], answer:"C" },
      { num:14, set:2, stem:"In the context of the passage, the narrator's description of John as \"practical in the extreme\" (line 7) functions as", choices:["A","a compliment that reveals her admiration","B","an ironic characterization that highlights his limitations","C","an objective assessment of his professional skills","D","an exaggeration meant to amuse the reader","E","a comparison to other physicians she has known"], answer:"B" },
      { num:15, set:2, stem:"The dash in \"temporary nervous depression—a slight hysterical tendency\" (line 14) serves to", choices:["A","introduce a medical definition","B","indicate the narrator's confusion about terminology","C","downplay the severity of her condition through clinical euphemism","D","mark a shift in the narrator's tone from serious to playful","E","signal a change in speaker"], answer:"C" },
      { num:16, set:2, stem:"The narrator's comment that writing \"does exhaust me a good deal—having to be so sly about it\" (lines 22–23) suggests that", choices:["A","writing is physically too demanding for her","B","the secrecy required by her situation increases her stress","C","she lacks talent as a writer","D","her husband approves of her writing in moderation","E","she writes only at night"], answer:"B" },
      { num:17, set:2, stem:"Which of the following best describes the narrator's relationship with John as presented in the passage?", choices:["A","Mutual respect tempered by occasional disagreement","B","Loving partnership characterized by shared decision-making","C","Power imbalance in which his authority suppresses her autonomy","D","Hostile antagonism that both parties acknowledge","E","Formal indifference typical of the era"], answer:"C" },
      { num:18, set:2, stem:"The description of the house and garden (lines 28–35) contributes to the passage by", choices:["A","establishing a gothic atmosphere of beauty and decay","B","providing evidence that the narrator is wealthy","C","contrasting the narrator's mental state with a cheerful setting","D","foreshadowing the narrator's eventual recovery","E","illustrating John's taste in real estate"], answer:"A" },
      { num:19, set:2, stem:"The narrator's statement \"John laughs at me, of course, but one expects that in marriage\" (line 6) is best characterized as", choices:["A","genuinely humorous","B","sarcastically bitter","C","matter-of-fact with an undercurrent of resignation","D","deliberately provocative","E","naively optimistic"], answer:"C" },
      { num:20, set:2, stem:"The narrator's tone throughout the passage is best described as", choices:["A","detached and analytical","B","conversational yet subtly distressed","C","angry and accusatory","D","cheerful and optimistic","E","melodramatic and self-pitying"], answer:"B" },
      { num:21, set:2, stem:"The passage as a whole is most concerned with", choices:["A","the joys of country living","B","the tension between a woman's inner experience and her prescribed role","C","the narrator's quest for a diagnosis","D","a comparison of traditional and modern medicine","E","the difficulty of maintaining a marriage"], answer:"B" },
      { num:22, set:2, stem:"The narrator's admission that she gets \"unreasonably angry with John sometimes\" (line 40) followed by her attributing it to her \"nervous condition\" (line 41) illustrates", choices:["A","her tendency to rationalize her emotions using the framework imposed on her","B","her growing awareness that John is abusive","C","her medical expertise about her own illness","D","her desire to appear rational to the reader","E","her playful sense of humor about their disagreements"], answer:"A" },

      // ── SET 3: Hayden "Those Winter Sundays" (11 Qs) ──
      { num:23, set:3, stem:"The word \"too\" in the opening line (\"Sundays too my father got up early\") implies that", choices:["A","the father woke early only on Sundays","B","Sunday was the one day the father could rest, but he did not","C","both parents shared the morning routine","D","the speaker also rose early on Sundays","E","the father's early rising was unusual"], answer:"B" },
      { num:24, set:3, stem:"The image of \"cracked hands that ached / from labor in the weekday weather\" (lines 3–4) primarily conveys", choices:["A","the father's age and frailty","B","the physical toll of the father's working life","C","the harshness of the winter climate","D","the father's carelessness about his health","E","the family's poverty"], answer:"B" },
      { num:25, set:3, stem:"The phrase \"banked fires blaze\" (line 5) contains an example of", choices:["A","simile","B","alliteration","C","oxymoron","D","apostrophe","E","synecdoche"], answer:"B" },
      { num:26, set:3, stem:"\"No one ever thanked him\" (line 5) functions in the poem as", choices:["A","a humorous aside","B","a pivotal statement of guilt and regret","C","an exaggeration for rhetorical effect","D","a detail that motivates the father to stop helping","E","a criticism of the mother's ingratitude"], answer:"B" },
      { num:27, set:3, stem:"The phrase \"the cold splintering, breaking\" (line 6) uses sound imagery primarily to", choices:["A","emphasize the violence of the winter weather outside","B","suggest the house is falling apart","C","dramatize the effect of the fire conquering the cold","D","create a sense of danger for the speaker","E","contrast indoor warmth with outdoor cold"], answer:"C" },
      { num:28, set:3, stem:"The \"chronic angers of that house\" (line 9) most likely refers to", choices:["A","the speaker's hatred of winter","B","persistent emotional tensions within the family","C","the physical deterioration of the building","D","the father's violent temper","E","arguments between neighbors"], answer:"B" },
      { num:29, set:3, stem:"The speaker's admission of \"Speaking indifferently to him\" (line 10) expresses", choices:["A","the speaker's youthful inability to recognize the father's love","B","a deliberate strategy to avoid conflict","C","respect for the father's preference for silence","D","the speaker's resentment about being woken early","E","a cultural norm of the time period"], answer:"A" },
      { num:30, set:3, stem:"The repetition in \"What did I know, what did I know\" (line 13) achieves which of the following effects?", choices:["A","It creates a rhythm that mirrors the father's repetitive labor","B","It conveys the depth of the speaker's adult regret","C","It suggests the speaker still does not understand","D","It provides a musical conclusion to the poem","E","It mimics a child's cadence of speech"], answer:"B" },
      { num:31, set:3, stem:"The word \"offices\" in the final line most nearly means", choices:["A","business spaces","B","official positions","C","dutiful acts of service","D","religious ceremonies","E","professional obligations"], answer:"C" },
      { num:32, set:3, stem:"The poem as a whole can best be read as", choices:["A","an elegy mourning the father's death","B","a meditation on the unrecognized sacrifices of parental love","C","a critique of patriarchal family structures","D","a celebration of winter's beauty","E","a narrative about overcoming poverty"], answer:"B" },
      { num:33, set:3, stem:"The poem's emotional power depends most significantly on the contrast between", choices:["A","winter and summer","B","mother and father","C","the father's silent acts of love and the family's indifference","D","rural and urban settings","E","the speaker's childhood and adulthood"], answer:"C" },

      // ── SET 4: Austen Pride and Prejudice (11 Qs) ──
      { num:34, set:4, stem:"The opening sentence of the passage is best described as", choices:["A","a factual observation about marriage customs","B","an ironic statement whose humor depends on the gap between appearance and reality","C","a sincere declaration of the author's beliefs","D","a hyperbolic claim intended to shock the reader","E","a thesis statement for a philosophical argument"], answer:"B" },
      { num:35, set:4, stem:"The word \"property\" in line 5 (\"considered as the rightful property of some one or other of their daughters\") carries a tone of", choices:["A","celebration of romantic possibility","B","legal precision","C","satire of the mercenary view of marriage","D","sympathy for eligible bachelors","E","nostalgia for traditional values"], answer:"C" },
      { num:36, set:4, stem:"Mr. Bennet's responses throughout the dialogue are primarily characterized by", choices:["A","enthusiastic agreement","B","anxious concern for his daughters","C","dry wit and deliberate provocation","D","sullen refusal to engage","E","careful reasoning and logic"], answer:"C" },
      { num:37, set:4, stem:"Mrs. Bennet's dialogue reveals her to be chiefly motivated by", choices:["A","intellectual curiosity about the new neighbor","B","concern for her husband's social standing","C","a desire to secure advantageous marriages for her daughters","D","jealousy of Lady Lucas","E","a need to share local gossip"], answer:"C" },
      { num:38, set:4, stem:"Mr. Bennet's remark \"for as you are as handsome as any of them, Mr. Bingley might like you the best of the party\" (lines 31–32) is best read as", choices:["A","a sincere compliment to his wife","B","a sarcastic deflection of her request","C","an expression of jealousy","D","an attempt to boost her self-confidence","E","a reflection of period courtship customs"], answer:"B" },
      { num:39, set:4, stem:"The passage's humor arises primarily from", choices:["A","slapstick physical comedy","B","the contrast between Mrs. Bennet's urgency and Mr. Bennet's detachment","C","witty wordplay and puns","D","the narrator's direct addresses to the reader","E","exaggerated descriptions of the setting"], answer:"B" },
      { num:40, set:4, stem:"The narrative voice in the opening paragraph (lines 1–5) can best be described as", choices:["A","first-person intimate","B","third-person omniscient with an ironic tone","C","second-person instructional","D","stream-of-consciousness","E","unreliable and contradictory"], answer:"B" },
      { num:41, set:4, stem:"The transition from the narrator's voice (lines 1–5) to dialogue (line 6 onward) serves to", choices:["A","shift from general social commentary to a specific domestic illustration of that commentary","B","introduce a new character who will become the protagonist","C","contradict the claims made in the opening paragraph","D","move the setting from a public to a private space","E","change the time period of the narrative"], answer:"A" },
      { num:42, set:4, stem:"Mrs. Bennet's exclamation \"how can you be so tiresome!\" (line 25) reveals", choices:["A","genuine anger that threatens their marriage","B","her impatience with her husband's teasing resistance","C","a deep philosophical disagreement","D","concern that Mr. Bennet is unwell","E","frustration with the neighbors"], answer:"B" },
      { num:43, set:4, stem:"In the context of the passage, the phrase \"a single man of large fortune\" functions as", choices:["A","a character description that humanizes Bingley","B","an economic detail that drives the social plot","C","an example of the narrator's admiration for wealth","D","foreshadowing of Bingley's generosity","E","a contrast to Mr. Bennet's modest income"], answer:"B" },
      { num:44, set:4, stem:"The passage as a whole establishes", choices:["A","the central romance between Elizabeth and Darcy","B","the social world and family dynamics that will drive the novel's plot","C","a dark and foreboding atmosphere","D","the narrator's unreliability","E","the historical context of the Napoleonic Wars"], answer:"B" },

      // ── SET 5: Hansberry A Raisin in the Sun (11 Qs) ──
      { num:45, set:5, stem:"Walter's opening question to Ruth (\"You know what I was thinking about in the bathroom this morning?\") reveals his", choices:["A","concern about household plumbing","B","preoccupation with his business aspirations","C","desire to improve his relationship with Ruth","D","anxiety about his children's future","E","tendency to reflect on philosophical questions"], answer:"B" },
      { num:46, set:5, stem:"Ruth's immediate response \"Willy Harris is a good-for-nothing loudmouth\" (line 9) suggests that", choices:["A","she has never met Willy Harris","B","she supports Walter's business plan secretly","C","this conversation is a recurring source of conflict between them","D","she dislikes all of Walter's friends equally","E","Willy Harris has personally wronged her"], answer:"C" },
      { num:47, set:5, stem:"Walter's reference to Charlie Atkins (lines 11–14) serves primarily as", choices:["A","evidence that Walter has many successful friends","B","a counterexample to Ruth's dismissal of his associates","C","proof that the dry-cleaning business is profitable","D","an attempt to make Ruth jealous","E","a digression from the main topic"], answer:"B" },
      { num:48, set:5, stem:"The stage direction \"She folds her head on her arms over the table\" (line 16) conveys Ruth's", choices:["A","fatigue and emotional exhaustion","B","disrespect toward Walter","C","physical illness","D","amusement at Walter's intensity","E","attempt to end the conversation permanently"], answer:"A" },
      { num:49, set:5, stem:"Walter's speech in lines 17–20 (\"You tired, ain't you? Tired of everything...\") is best described as", choices:["A","an empathetic attempt to understand Ruth's feelings","B","an accusatory monologue that projects his frustrations onto Ruth","C","a calm and rational assessment of their situation","D","a rehearsed speech he has given many times before","E","an attempt to comfort Ruth about their living conditions"], answer:"B" },
      { num:50, set:5, stem:"Walter's plan to have Ruth persuade Mama (lines 24–32) reveals", choices:["A","his understanding that women control the household finances","B","his recognition that Ruth and Mama share a close bond he wants to exploit","C","his confidence that the business plan will succeed","D","his respect for Ruth's intelligence","E","his awareness that Mama disapproves of him"], answer:"B" },
      { num:51, set:5, stem:"Ruth's single-word response \"Bobo?\" (line 33) accompanied by a frown most likely expresses", choices:["A","curiosity about a new character","B","skepticism about the reliability of Walter's business partners","C","approval of the expanding partnership","D","confusion about the financial details","E","jealousy that Walter has other confidants"], answer:"B" },
      { num:52, set:5, stem:"Walter's dismissal of the word \"graft\" (lines 39–41) and his claim about paying people off reveals his", choices:["A","moral corruption","B","willingness to rationalize ethically questionable practices to achieve his dream","C","deep understanding of business law","D","contempt for Ruth's vocabulary","E","experience in the liquor industry"], answer:"B" },
      { num:53, set:5, stem:"The recurring motif of the eggs (lines 43–48) functions symbolically to represent", choices:["A","the nourishment Ruth provides for the family","B","the mundane domestic reality that Walter feels trapped by","C","the fertility and future of the Younger family","D","Ruth's skill as a homemaker","E","Walter's preference for a simple life"], answer:"B" },
      { num:54, set:5, stem:"The passage as a whole is primarily concerned with", choices:["A","the economic pressures facing African American families in the 1950s","B","the tension between Walter's ambitions and the constraints of his domestic life","C","Ruth's desire for a better marriage","D","the dangers of the liquor business","E","Mama's influence over the family"], answer:"B" },
      { num:55, set:5, stem:"Walter's final speech (lines 44–48) achieves its emotional effect primarily through", choices:["A","elevated, formal diction","B","repetition and escalation that contrast his grand dreams with Ruth's practical responses","C","logical argumentation and evidence","D","appeals to religious faith","E","direct address to the audience"], answer:"B" },
    ],

    // ── FRQ QUESTIONS ──────────────────────────────────────────────────────
    questions: [
      // FRQ 1 — Poetry Analysis
      {
        num: 1,
        type: "poetry-analysis",
        title: "Poetry Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Emily Dickinson",
        source: "\"Because I could not stop for Death\" (c. 1862)",
        context: "In the following poem by Emily Dickinson, the speaker recounts a journey with Death personified as a gentleman caller. Read the poem carefully. Then, in a well-written essay, analyze how Dickinson uses literary elements and techniques to develop the speaker's complex understanding of mortality.",
        prompt: "In the following poem by Emily Dickinson (published posthumously in 1890), the speaker describes an encounter with Death. Read the poem carefully. Then, in a well-written essay, analyze how Dickinson uses literary elements and techniques — such as imagery, personification, tone, and structure — to portray the speaker's complex attitude toward death.",
        passage: [
          { lineStart: 1, text: "Because I could not stop for Death –" },
          { lineStart: 2, text: "He kindly stopped for me –" },
          { lineStart: 3, text: "The Carriage held but just Ourselves –" },
          { lineStart: 4, text: "And Immortality." },
          { lineStart: "", text: "" },
          { lineStart: 5, text: "We slowly drove – He knew no haste" },
          { lineStart: 6, text: "And I had put away" },
          { lineStart: 7, text: "My labor and my leisure too," },
          { lineStart: 8, text: "For His Civility –" },
          { lineStart: "", text: "" },
          { lineStart: 9, text: "We passed the School, where Children strove" },
          { lineStart: 10, text: "At Recess – in the Ring –" },
          { lineStart: 11, text: "We passed the Fields of Gazing Grain –" },
          { lineStart: 12, text: "We passed the Setting Sun –" },
          { lineStart: "", text: "" },
          { lineStart: 13, text: "Or rather – He passed Us –" },
          { lineStart: 14, text: "The Dews drew quivering and Chill –" },
          { lineStart: 15, text: "For only Gossamer, my Gown –" },
          { lineStart: 16, text: "My Tippet – only Tulle –" },
          { lineStart: "", text: "" },
          { lineStart: 17, text: "We paused before a House that seemed" },
          { lineStart: 18, text: "A Swelling of the Ground –" },
          { lineStart: 19, text: "The Roof was scarcely visible –" },
          { lineStart: 20, text: "The Cornice – in the Ground –" },
          { lineStart: "", text: "" },
          { lineStart: 21, text: "Since then – 'tis Centuries – and yet" },
          { lineStart: 22, text: "Feels shorter than the Day" },
          { lineStart: 23, text: "I first surmised the Horses' Heads" },
          { lineStart: 24, text: "Were toward Eternity –" },
        ],
        footnotes: [],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a defensible thesis that presents an interpretation of the poem." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence; 1 = evidence but no commentary; 2 = evidence with some commentary; 3 = specific evidence with clear explanation of how it supports the thesis; 4 = specific, well-chosen evidence with thorough, insightful commentary that deepens the interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument through vivid prose style, effective use of literary terminology, situating the interpretation within a broader literary context, or accounting for alternative interpretations." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Poetry Analysis essay (FRQ 1).
The student analyzed Emily Dickinson's "Because I could not stop for Death."
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of literary elements: imagery, personification, tone, structure, diction, sound devices, and how they contribute to the poem's meaning about mortality.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // FRQ 2 — Prose Fiction Analysis
      {
        num: 2,
        type: "prose-analysis",
        title: "Prose Fiction Analysis",
        points: 6,
        suggestedTime: 40,
        author: "James Baldwin",
        source: "\"Sonny's Blues\" (1957)",
        context: "In the following passage from James Baldwin's short story \"Sonny's Blues\" (1957), the unnamed narrator — a schoolteacher in Harlem — reflects on learning that his younger brother Sonny has been arrested for using and selling heroin. Read the passage carefully. Then, in a well-written essay, analyze how Baldwin uses literary elements and techniques to convey the narrator's complex response to the news about his brother.",
        prompt: "Read the following passage from James Baldwin's \"Sonny's Blues\" (1957) carefully. Then, in a well-written essay, analyze how Baldwin uses literary elements and techniques — such as narration, imagery, diction, and figurative language — to convey the narrator's complex response to his brother's arrest.",
        passage: [
          { lineStart: 1, text: "I read about it in the paper, in the subway, on my way to work. I read it, and I couldn't believe" },
          { lineStart: 2, text: "it, and I read it again. Then perhaps I just stared at it, at the newsprint spelling out his name," },
          { lineStart: 3, text: "spelling out the story. I stared at it in the swinging lights of the subway car, and in the faces" },
          { lineStart: 4, text: "and bodies of the people, and in my own face, trapped in the darkness which roared outside." },
          { lineStart: 5, text: "It was not to be believed and I kept telling myself that, as I walked from the subway station to" },
          { lineStart: 6, text: "the high school. And at the same time I couldn't doubt it. I was scared, scared for Sonny. He" },
          { lineStart: 7, text: "became real to me again. A great block of ice got settled in my belly and kept melting there slowly" },
          { lineStart: 8, text: "all day long, while I taught my classes algebra. It was a special kind of ice. It kept melting," },
          { lineStart: 9, text: "sending trickles of ice water all up and down my veins, but it never got less. Sometimes it" },
          { lineStart: 10, text: "hardened and seemed to expand until I felt my guts were going to come spilling out or that I was" },
          { lineStart: 11, text: "going to choke or scream. This would always be at a moment when I was remembering some specific" },
          { lineStart: 12, text: "thing Sonny had once said or done." },
          { lineStart: 13, text: "When he was about as old as the boys in my classes his face had been bright and open, there was" },
          { lineStart: 14, text: "a lot of copper in it; and he'd had wonderfully direct brown eyes, and great gentleness and" },
          { lineStart: 15, text: "privacy. I wondered what he looked like now. He had been picked up, the evening before, in a raid" },
          { lineStart: 16, text: "on an apartment downtown, for peddling and using heroin." },
          { lineStart: 17, text: "I couldn't believe it: but what I mean by that is that I couldn't find any room for it anywhere" },
          { lineStart: 18, text: "inside me. I had kept it outside me for a long time. I hadn't wanted to know. I had had suspicions," },
          { lineStart: 19, text: "but I didn't name them, I kept putting them away. I told myself that Sonny was wild, but he wasn't" },
          { lineStart: 20, text: "crazy. And he'd always been a good boy, he hadn't ever turned hard or evil or disrespectful, the" },
          { lineStart: 21, text: "way kids can, so quick, so quick, especially in Harlem. I didn't want to believe that I'd ever see" },
          { lineStart: 22, text: "my brother going down, coming to nothing, all that light in his face gone out, in the condition" },
          { lineStart: 23, text: "I'd already seen so many others. Yet it had happened and here I was, talking about algebra to a" },
          { lineStart: 24, text: "lot of boys who might, every one of them for all I knew, be popping off needles every time they" },
          { lineStart: 25, text: "went to the head. Maybe it did more for them than algebra could." },
          { lineStart: 26, text: "I was sure that the first time Sonny had ever had horse, he couldn't have been much older than" },
          { lineStart: 27, text: "these boys were now. These boys, now, were living as we'd been living then, they were growing up" },
          { lineStart: 28, text: "with a rush and their heads bumped abruptly against the low ceiling of their actual possibilities." },
          { lineStart: 29, text: "They were filled with rage. All they really knew were two darknesses, the darkness of their lives," },
          { lineStart: 30, text: "which was now closing in on them, and the darkness of the movies, which had blinded them to that" },
          { lineStart: 31, text: "other darkness, and in which they now, vindictively, dreamed, at once more together than they were" },
          { lineStart: 32, text: "at any other time, and more alone." },
        ],
        footnotes: [],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a defensible thesis that presents an interpretation of the passage." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence; 1 = evidence but no commentary; 2 = evidence with some commentary; 3 = specific evidence with clear explanation of how it supports the thesis; 4 = specific, well-chosen evidence with thorough, insightful commentary that deepens the interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument through vivid prose style, effective use of literary terminology, situating the interpretation within a broader literary context, or accounting for alternative interpretations." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Prose Fiction Analysis essay (FRQ 2).
The student analyzed a passage from James Baldwin's "Sonny's Blues."
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of narrative techniques: point of view, characterization, imagery, diction, figurative language, pacing, syntax, and how they contribute to the passage's meaning about the narrator's complex response to his brother.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // FRQ 3 — Literary Argument (NO passage provided)
      {
        num: 3,
        type: "literary-argument",
        title: "Literary Argument",
        points: 6,
        suggestedTime: 40,
        prompt: `Many works of literature feature a character who is caught between two conflicting loyalties — for example, loyalty to family versus loyalty to personal conscience, loyalty to community versus loyalty to an individual, or loyalty to tradition versus loyalty to change. These divided loyalties often reveal important truths about the character and the work as a whole.

Either from your own reading or from the list below, choose a work of fiction in which a character experiences divided loyalties. Then, in a well-written essay, analyze how the character's divided loyalties contribute to an interpretation of the work as a whole. Do not merely summarize the plot.

In your response you should do the following:
• Respond to the prompt with a thesis that presents a defensible interpretation.
• Select and use evidence to support your line of reasoning.
• Explain how the evidence supports your line of reasoning.
• Use appropriate grammar and punctuation in communicating your argument.

Suggested works:
Antigone, Beloved, Crime and Punishment, The Crucible, A Doll's House, Frankenstein, The Great Gatsby, Hamlet, The Handmaid's Tale, The House on Mango Street, Invisible Man, Jane Eyre, The Kite Runner, A Raisin in the Sun, The Scarlet Letter, Things Fall Apart`,
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a defensible thesis that presents an interpretation of the chosen work." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence; 1 = evidence but no commentary; 2 = evidence with some commentary; 3 = specific evidence with clear explanation of how it supports the thesis; 4 = specific, well-chosen evidence with thorough, insightful commentary that deepens the interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument through vivid prose style, effective use of literary terminology, situating the interpretation within a broader literary context, or accounting for alternative interpretations." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Literary Argument essay (FRQ 3).
The student chose their own literary work to respond to a prompt about divided loyalties in fiction.
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
The student must demonstrate genuine knowledge of their chosen work, not just plot summary. Look for a clear interpretive claim supported by specific textual evidence with insightful commentary about how divided loyalties contribute to the meaning of the work as a whole.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // OFFICIAL 2025 — SET 1 (FRQ only)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: "official2025s1",
    label: "2025 AP Exam - Set 1",
    year: "2025",
    badge: "Official",
    badgeColor: "#FF4757",
    badgeBg: "rgba(255,71,87,0.15)",
    badgeBorder: "rgba(255,71,87,0.3)",
    description: "Official 2025 AP English Literature FRQ Set 1 — Poetry Analysis + Prose Fiction Analysis + Literary Argument.",
    totalTime: 120 * 60,

    questions: [
      // ── FRQ 1: Poetry Analysis — McElroy "Monologue for Saint Louis" ──
      {
        num: 1,
        type: "poetry-analysis",
        title: "Poetry Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Colleen McElroy",
        source: "\"Monologue for Saint Louis\" from Queen of the Ebony Isles (1984)",
        context: "In Colleen McElroy's poem \"Monologue for Saint Louis,\" published in 1980, the speaker returns to her childhood home in St. Louis, Missouri, after an extended absence and contemplates how she has changed. Read the poem carefully.",
        prompt: "In a well-written essay, analyze how McElroy uses literary elements and techniques to convey the speaker's complex experience of returning home.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: "", text: "Monologue for Saint Louis" },
          { lineStart: "", text: "" },
          { lineStart: 1, text: "home again and the heart barely there" },
          { lineStart: 2, text: "when choked by clusters of words" },
          { lineStart: 3, text: "thick as the clumps of blue-black" },
          { lineStart: 4, text: "grapes we snitched every summer" },
          { lineStart: 5, text: "from the neighbor\u2019s arbor\u00B9" },
          { lineStart: 6, text: "succulent pockets of flesh laced" },
          { lineStart: 7, text: "with green staining our lips and fingers" },
          { lineStart: "", text: "" },
          { lineStart: 8, text: "it is summer again and I am home" },
          { lineStart: 9, text: "vowing penance\u00B2 for all my disappearances" },
          { lineStart: 10, text: "since that first summer" },
          { lineStart: 11, text: "when the arbor was clotted" },
          { lineStart: 12, text: "with pockets of grapes latticed on each" },
          { lineStart: 13, text: "interlocking vine" },
          { lineStart: "", text: "" },
          { lineStart: 14, text: "now earthworms have trellised the arbor" },
          { lineStart: 15, text: "and that crumbling heap of rotting black" },
          { lineStart: 16, text: "sticks cannot shield us from wind or words" },
          { lineStart: 17, text: "we are the women we whispered about each summer" },
          { lineStart: 18, text: "familiar houses and schoolyards have disappeared" },
          { lineStart: 19, text: "childhood streets are blocked with singular black" },
          { lineStart: 20, text: "one-way signs aligned like a lacework" },
          { lineStart: 21, text: "of warnings or accusing fingers" },
          { lineStart: 22, text: "I am home again" },
          { lineStart: 23, text: "and my cousins sit in their cloaks of black" },
          { lineStart: 24, text: "skin dragging me through twisted vines" },
          { lineStart: 25, text: "of genetic maps thick with childhood vows" },
          { lineStart: "", text: "" },
          { lineStart: 26, text: "they remember each summer" },
          { lineStart: 27, text: "how each year I vowed to return home" },
          { lineStart: 28, text: "forever but I am lost in a riddle of words" },
          { lineStart: 29, text: "home is a vacant lot its back yard clotted" },
          { lineStart: 30, text: "with a stainless-steel arch\u00B3 and clusters" },
          { lineStart: 31, text: "of tiny parks sprouting like trelliswork" },
          { lineStart: "", text: "" },
          { lineStart: 32, text: "enclosing some strange summer" },
          { lineStart: 33, text: "resort my cousins have disappeared" },
          { lineStart: 34, text: "into like the shadows of beasts and bad air" },
          { lineStart: 35, text: "that infect this flat country and I am home" },
          { lineStart: 36, text: "a stranger in love with words" },
          { lineStart: 37, text: "with tart sweet clusters of poems" },
        ],
        footnotes: [
          "1 vining plants trained to grow over a lattice, framework, or trellis",
          "2 an act that demonstrates regret and offers amends through self-sacrifice",
          "3 the Gateway Arch, a 630-foot-tall arch located in a national park",
        ],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the poem. The thesis must provide a defensible interpretation of the speaker's complex experience of returning home." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, explains how at least one literary element contributes to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the poem, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Poetry Analysis essay (FRQ 1).
The student analyzed Colleen McElroy's "Monologue for Saint Louis" — a poem about a speaker returning to her childhood home in St. Louis after an extended absence.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of literary elements: imagery (grapes, vines, arbor decay), repetition ("I am home"), diction ("clotted," "snitched," "succulent"), structure (progression from memory to present), figurative language, tone shifts, and how they convey the speaker's complex experience of returning home — nostalgia mixed with alienation and loss.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 2: Prose Fiction Analysis — Cusk, The Bradshaw Variations ──
      {
        num: 2,
        type: "prose-analysis",
        title: "Prose Fiction Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Rachel Cusk",
        source: "The Bradshaw Variations (2008)",
        context: "The following excerpt is from Rachel Cusk's novel The Bradshaw Variations, published in 2008. This passage describes Thomas Bradshaw's morning interactions with members of his household. Read the passage carefully.",
        prompt: "In a well-written essay, analyze how Cusk uses literary elements and techniques to develop a complex portrayal of Thomas.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: "", text: "Par." },
          { lineStart: 1, text: "    What is art? Thomas Bradshaw asks himself this question frequently. He does not yet know" },
          { lineStart: "", text: "the answer. He used to believe art was a kind of pretending, but he doesn\u2019t think that any more." },
          { lineStart: "", text: "He uses the word authenticity to describe what he thinks now. Some things are artificial and" },
          { lineStart: "", text: "some are authentic. It is easy to tell when something is artificial. The other is harder." },
          { lineStart: "", text: "" },
          { lineStart: 2, text: "    In the mornings he listens to music, to Bach or Schubert. He stands in the kitchen in his" },
          { lineStart: "", text: "dressing gown. He waits for his wife and daughter to come downstairs. He is forty-one, the age" },
          { lineStart: "", text: "when a life comes out of its own past like something out of a mould; and either it is solid, all of a" },
          { lineStart: "", text: "piece, or it fails to hold its shape and disintegrates. The disintegration is not difficult to imagine." },
          { lineStart: "", text: "It is the solidity, the concrete form, that is mystifying. Disintegration does not involve questions" },
          { lineStart: "", text: "of authenticity, but of a solid form the questions must be asked." },
          { lineStart: "", text: "" },
          { lineStart: 3, text: "    Mostly, in fact, it is the lodger\u00B9 Olga who comes down first. He hears her tread on the stairs" },
          { lineStart: "", text: "and doesn\u2019t recognise it: that is how, every day, he identifies her, by hearing her quiet, slightly" },
          { lineStart: "", text: "plodding step and wondering who on earth it belongs to. She ducks her peroxided head at" },
          { lineStart: "", text: "him, flashes her uncertain train-track smile. For six months now Olga has been embroiled in" },
          { lineStart: "", text: "protracted dentistry. Beneath the metal braces her teeth are grey and disorderly. As a child her" },
          { lineStart: "", text: "mother apparently never took her to the dentist. This was not out of neglect, Olga has told him." },
          { lineStart: "", text: "It was because Olga was frightened of going, and her mother couldn\u2019t bear her to be frightened," },
          { lineStart: "", text: "or to feel pain. She has told Thomas that she is saving up for a bridge and a set of caps. She" },
          { lineStart: "", text: "has three different jobs and all the money goes on her teeth. She complains of the expense: in" },
          { lineStart: "", text: "Poland the cost of dentistry is much lower. There, she could have all the work done\u2014\u2018All!\u2019 Olga" },
          { lineStart: "", text: "repeats, making a chopping motion with her hand\u2014for what she pays here for just one monthly" },
          { lineStart: "", text: "visit." },
          { lineStart: "", text: "" },
          { lineStart: 4, text: "    These conversations do not entirely engage Thomas. When he talks to Olga he is both there" },
          { lineStart: "", text: "and not there. He is waiting for Tonie\u00B2 to come down, as the platform guard waits for the" },
          { lineStart: "", text: "London train to come through. Tonie\u2019s appearances in the kitchen are brief. Like the train she" },
          { lineStart: "", text: "stops, disgorging\u00B3 activity, and then departs again. It is a matter of minutes, but he needs to be" },
          { lineStart: "", text: "ready. He hears Olga\u2014in some ways he even identifies himself with her, both of them platform" },
          { lineStart: "", text: "dwellers\u2014but when she speaks he cannot reciprocate. He is as though sealed behind glass. He" },
          { lineStart: "", text: "wonders if she realises this, realises that she can see but not touch him. She drinks tea from a" },
          { lineStart: "", text: "giant Garfield\u2074 mug and eats cereal, topping up the milk frequently from the plastic container" },
          { lineStart: "", text: "that stands beside her bowl. He glimpses her bare, mushroom-coloured legs beneath the table," },
          { lineStart: "", text: "her feet clad in large soft slippers. He turns the music up a little: it is an offering, a form of" },
          { lineStart: "", text: "explanation. He wants her to know that he is aware of his own limitations, of his failure to" },
          { lineStart: "", text: "make anything of their conversations in the morning. Sometimes this failure appears to him" },
          { lineStart: "", text: "as something intrinsic to time itself, as an inner force, like decay. They pass and are forgotten," },
          { lineStart: "", text: "these interludes in the kitchen. And yet they are always the same: he could stand here for" },
          { lineStart: "", text: "a hundred years and still have much the same conversation with Olga. There are, it seems," },
          { lineStart: "", text: "limitless copies of this conversation, but it never goes anywhere or develops. By the same token," },
          { lineStart: "", text: "it never dies. It has no relationship to time. This may be because it lacks authenticity." },
        ],
        footnotes: [
          "1 a person who rents a room in a house",
          "2 his wife",
          "3 pouring out, releasing",
          "4 a cartoon cat",
        ],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the passage. The thesis must provide a defensible interpretation of the complex portrayal of Thomas." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, explains how at least one literary element contributes to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the passage, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Prose Fiction Analysis essay (FRQ 2).
The student analyzed an excerpt from Rachel Cusk's The Bradshaw Variations (2008) — a passage about Thomas Bradshaw's morning interactions with his lodger Olga while waiting for his wife Tonie.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of narrative techniques: point of view (close third person), characterization (Thomas's introspection, his relationship to authenticity), imagery (platform guard metaphor, sealed behind glass), diction, figurative language, and how they develop a complex portrayal of Thomas — his philosophical nature, emotional distance, self-awareness of his limitations, and preoccupation with authenticity vs. artificiality.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 3: Literary Argument — Memories of the Past ──
      {
        num: 3,
        type: "literary-argument",
        title: "Literary Argument",
        points: 6,
        suggestedTime: 40,
        prompt: `In many works of literature, characters may be significantly affected by memories of the past. A character may be inspired by the past, haunted by the past, unable to let go of the past, or motivated by the past to craft a better future.

Either from your own reading or from the list below, choose a work of fiction in which a character is significantly affected by a memory. Then, in a well-written essay, analyze how the impact of the memory on the character contributes to an interpretation of the work as a whole. Do not merely summarize the plot.

In your response you should do the following:
\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.
\u2022 Provide evidence to support your line of reasoning.
\u2022 Explain how the evidence supports your line of reasoning.
\u2022 Use appropriate grammar and punctuation in communicating your argument.

Suggested works:
Afterlife, Annie John, Behold the Dreamers, Beloved, Big Fish, The Buried Giant, Ceremony, Crime and Punishment, A Doll\u2019s House, Dominicana, The English Patient, The Farming of Bones, Fences, A Gesture Life, The Glass Menagerie, The Importance of Being Earnest, Invisible Man, Jane Eyre, Kindred, Love Medicine, Macbeth, The Mayor of Casterbridge, Mrs. Dalloway, The Nickel Boys, Obasan, Of Mice and Men, On Earth We\u2019re Briefly Gorgeous, Purple Hibiscus, The Scarlet Letter, The Secret History, The Sound and the Fury, A Tale of Two Cities, Washington Black, The Woman Warrior, Wuthering Heights, The Yellow Birds`,
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the selected work. The thesis must provide a defensible interpretation of the impact of a memory on a character in the selected work, or make a claim about how the impact of a memory on a character contributes to an interpretation of the work as a whole." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, tends to focus on overarching narrative or description rather than specific details; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, focuses on importance of specific details from selected work; 4 = specific evidence supporting all claims, consistently explains how specific details contribute to interpretation of the work as a whole." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the selected work, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Literary Argument essay (FRQ 3).
The student chose their own literary work to respond to a prompt about how memories of the past significantly affect a character — a character may be inspired by, haunted by, unable to let go of, or motivated by the past.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
The student must demonstrate genuine knowledge of their chosen work, not just plot summary. Look for a clear interpretive claim about how the impact of the memory on the character contributes to an interpretation of the work as a whole, supported by specific textual evidence with insightful commentary.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // OFFICIAL 2025 — SET 2 (FRQ only)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: "official2025s2",
    label: "2025 AP Exam - Set 2",
    year: "2025",
    badge: "Official",
    badgeColor: "#FF4757",
    badgeBg: "rgba(255,71,87,0.15)",
    badgeBorder: "rgba(255,71,87,0.3)",
    description: "Official 2025 AP English Literature FRQ Set 2 — Poetry Analysis + Prose Fiction Analysis + Literary Argument.",
    totalTime: 120 * 60,

    questions: [
      // ── FRQ 1: Poetry Analysis — Hern\u00e1ndez Cruz "Two Guitars" ──
      {
        num: 1,
        type: "poetry-analysis",
        title: "Poetry Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Victor Hern\u00e1ndez Cruz",
        source: "\"Two Guitars\" from Maraca: New and Selected Poems, 1965\u20132000 (2001)",
        context: "In Victor Hern\u00e1ndez Cruz\u2019s poem \u201cTwo Guitars,\u201d published in 2001, the speaker imagines that two guitars are alive and engaging in conversation about their musical experiences. Read the poem carefully.",
        prompt: "In a well-written essay, analyze how Hern\u00e1ndez Cruz uses literary elements and techniques to convey a complex portrayal of the guitars\u2019 musical world.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: "", text: "Two Guitars" },
          { lineStart: "", text: "" },
          { lineStart: 1, text: "Two guitars were left in a room all alone" },
          { lineStart: 2, text: "They sat on different corners of the parlor" },
          { lineStart: 3, text: "In this solitude they started talking to each other" },
          { lineStart: 4, text: "My strings are tight and full of tears" },
          { lineStart: 5, text: "The man who plays me has no heart" },
          { lineStart: 6, text: "I have seen it leave out of his mouth" },
          { lineStart: 7, text: "I have seen it melt out of his eyes" },
          { lineStart: 8, text: "It dives into the pores of the earth" },
          { lineStart: 9, text: "When they squeeze me tight I bring" },
          { lineStart: 10, text: "Down the angels who live off the chorus" },
          { lineStart: 11, text: "The trios singing loosen organs" },
          { lineStart: 12, text: "With melodious screwdrivers" },
          { lineStart: 13, text: "Sentiment comes off the hinges" },
          { lineStart: 14, text: "Because a song is a mountain put into" },
          { lineStart: 15, text: "Words and landscape is the feeling that" },
          { lineStart: 16, text: "Enters something so big in the harmony" },
          { lineStart: 17, text: "We are always in danger of blowing up" },
          { lineStart: 18, text: "With passion" },
          { lineStart: "", text: "" },
          { lineStart: 19, text: "The other guitar:" },
          { lineStart: 20, text: "In 1944 New York" },
          { lineStart: 21, text: "When the Trio Los Panchos\u00B9 started" },
          { lineStart: 22, text: "With Mexican & Puerto Rican birds\u00B2" },
          { lineStart: 23, text: "I am the one that one of them held" },
          { lineStart: 24, text: "Tight  like a woman" },
          { lineStart: 25, text: "Their throats gardenia\u00B3 gardens" },
          { lineStart: 26, text: "An airport for dreams" },
          { lineStart: 27, text: "I\u2019ve been in theaters and cabarets" },
          { lineStart: 28, text: "I played in an apartment on 102nd street" },
          { lineStart: 29, text: "After a baptism pregnant with women" },
          { lineStart: 30, text: "The men flirted and were offered" },
          { lineStart: 31, text: "Chicken soup" },
          { lineStart: 32, text: "Echoes came out of hallways as if from caves" },
          { lineStart: 33, text: "Someone is opening the door now" },
          { lineStart: 34, text: "The two guitars hushed and there was a" },
          { lineStart: 35, text: "Resonance in the air like what is left by" },
          { lineStart: 36, text: "The last chord of a bolero.\u2074" },
        ],
        footnotes: [
          "1 a musical group that specializes in boleros and other romantic ballads",
          "2 guitars",
          "3 a type of plant known for its striking flowers",
          "4 a genre of romantic music that originated in Cuba and has been popular throughout the Americas; common themes include unrequited love, betrayal, and abandonment",
        ],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the poem. The thesis must provide a defensible interpretation of the complex portrayal of the guitars' musical world." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, explains how at least one literary element contributes to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the poem, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Poetry Analysis essay (FRQ 1).
The student analyzed Victor Hern\u00e1ndez Cruz's "Two Guitars" — a poem in which two guitars converse about their musical experiences, blending personification with cultural imagery of Latin music.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of literary elements: personification (guitars as speakers), imagery (tears, angels, passion, gardenia gardens), structure (two voices/perspectives), diction, figurative language (song as mountain, throats as gardens), cultural context (bolero, Trio Los Panchos), and how they convey a complex portrayal of the guitars' musical world — the emotional power of music, its cultural roots, and its transcendent quality.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 2: Prose Fiction Analysis — Haien, The All of It ──
      {
        num: 2,
        type: "prose-analysis",
        title: "Prose Fiction Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Jeannette Haien",
        source: "The All of It (1986)",
        context: "The following excerpt is from Jeannette Haien\u2019s novel The All of It, published in 1986. In this passage, Father Declan, an Irish priest, is driving home after a successful fishing trip. Read the passage carefully.",
        prompt: "In a well-written essay, analyze how Haien uses literary elements and techniques to develop a complex portrayal of Father Declan.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: "", text: "Par." },
          { lineStart: 1, text: "    Nothing exaggerates a sense of lonely solitude so much as a long night drive through" },
          { lineStart: "", text: "thrashing rain and dense, culprit fog." },
          { lineStart: "", text: "" },
          { lineStart: 2, text: "    Crouched over the steering-wheel of the old Ford, his head thrust forward, turtle-like, out of" },
          { lineStart: "", text: "his collar, the only sound the sidelong loping strokes of the windshield wipers, he peered ahead" },
          { lineStart: "", text: "through the car lights\u2019 gauzy beam at the narrow, winding road which kept vanishing and" },
          { lineStart: "", text: "reappearing like a dark ribbon in a magician\u2019s hand, seen now, now not, depending on the shift" },
          { lineStart: "", text: "of the fog.\u2026" },
          { lineStart: "", text: "" },
          { lineStart: 3, text: "    It was terrible the way his splendid excitement had vanished almost the instant he\u2019d left" },
          { lineStart: "", text: "the Castle and started the homeward journey, the lilt and thrill of his great adventure draining" },
          { lineStart: "", text: "from him suddenly, to be as suddenly replaced by a violent flush of self-pity caused (admit it)" },
          { lineStart: "", text: "by the sorrowful fact that at the end of the long night drive there would be nought for him but" },
          { lineStart: "", text: "the bulk emptiness of the bleak parish-house, its outside walls bleeding with damp, its windows" },
          { lineStart: "", text: "dark, its high, cold rooms devoid of life except as he would enter them only to encounter, going" },
          { lineStart: "", text: "before him in the chilly chambers, the exhaled, ghostly haze of his own breath; that\u2026deadliness," },
          { lineStart: "", text: "juxtaposed to the powerful vividness of its imagined opposite: anticipation\u2014of a lit window, of" },
          { lineStart: "", text: "a waiting presence, of a voice asking those simple, linking, engaging questions which absence" },
          { lineStart: "", text: "inspires: \u201cHow are you?\u201d \u201cHow did you fare?\u201d \u201cWhat was it like?\u201d" },
          { lineStart: "", text: "" },
          { lineStart: 4, text: "    Oh, the blanknesses of solitude\u2026." },
          { lineStart: "", text: "" },
          { lineStart: 5, text: "    He ought to get a dog, a lively, sensitive puppy he could rear to companionable habits; one" },
          { lineStart: "", text: "that would accompany him on walks and ride beside him in the car, that would sleep next to his" },
          { lineStart: "", text: "bed and wag him awake of a morning, a warm, affectionate, entertaining little dog. He pictured" },
          { lineStart: "", text: "the creature: a smallish terrier, a brindled,\u00B9 charming cairn or smoothcoated brown-and-white" },
          { lineStart: "", text: "Jack Russell,\u00B2 all spiff and prance and independence but ready ever for a petting. \u201cFather" },
          { lineStart: "", text: "Declan\u2019s little dog,\u201d mothers would say of it in a recommending way, meaning it wouldn\u2019t snap" },
          { lineStart: "", text: "when their children stooped to pat it. \u201c\u2019Tis Father Declan\u2019s\u201d: assurance that it wouldn\u2019t forget" },
          { lineStart: "", text: "itself and spot the carpet\u2026. Was there anything written against a priest having a dog? For sure" },
          { lineStart: "", text: "the Bishop didn\u2019t have one. Could he think of a sixtyish priest he knew who did? He couldn\u2019t;" },
          { lineStart: "", text: "though Father Patrick Joyce in Galway kept a toothless, stiff, off-putting thing of a cat, a feature" },
          { lineStart: "", text: "of parish-house life you\u2019d be less surprised by in Galway than in Roonatellin, priests in Galway" },
          { lineStart: "", text: "being laws unto themselves\u2026. And of course, there was the obstacle of Mrs. Duggin, who \u201cdid\u201d" },
          { lineStart: "", text: "for him as hasty morning-cleaner and washer and (hastier) cook. (He\u2019d try again hinting to her" },
          { lineStart: "", text: "how much he\u2019d appreciate a bit of noontime meat or fish not fried to the consistency of cement," },
          { lineStart: "", text: "or a veg not boiled to a rag\u2019s limpness.) Mrs. Duggin wouldn\u2019t take to a dog\u2026. He could hear" },
          { lineStart: "", text: "her: \u201cI\u2019m hoovering\u00B3 hairs, Father, dog hairs,\u201d tousling the thin of her own, her mouth dropped" },
          { lineStart: "", text: "disapprovingly. \u201cIt\u2019s not that I\u2019m complaining of the work, the amount of it, but dog hairs\u2014\u201d" },
          { lineStart: "", text: "" },
          { lineStart: 6, text: "    But must he forever give in to the Mrs. Duggins of the world? forever keep sublimating" },
          { lineStart: "", text: "wishes? as he was this instant sublimating (burying, or trying to) the wish (he struck the word" },
          { lineStart: "", text: "desire) to share with someone this singular-in-his-life, brilliantly prodigious, gallimaufry\u2074" },
          { lineStart: "", text: "twenty-four-pound-ten-ounce day, the bodily fact of it residing in the car\u2019s boot,\u2075 causing now" },
          { lineStart: "", text: "that worrisome, unhealthy, grinding sound the engine was making (or so, in his angler\u2019s\u2076 pride," },
          { lineStart: "", text: "he fancied the source of the noise to be)\u2026." },
          { lineStart: "", text: "" },
          { lineStart: 7, text: "    Innocent, the mere wishing of a mere wish." },
        ],
        footnotes: [
          "1 brownish or tawny, with streaks of color",
          "2 Cairn and Jack Russell are both breeds of terrier.",
          "3 vacuuming",
          "4 chaotic",
          "5 trunk",
          "6 fisher\u2019s",
        ],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the passage. The thesis must provide a defensible interpretation of the complex portrayal of Father Declan." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, explains how at least one literary element contributes to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the passage, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Prose Fiction Analysis essay (FRQ 2).
The student analyzed an excerpt from Jeannette Haien's The All of It (1986) — a passage about Father Declan, an Irish priest driving home alone after a fishing trip, reflecting on his solitude and longing for companionship.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of narrative techniques: imagery (fog, bleak parish-house, imagined dog), tone (loneliness, self-pity, wry humor), diction, stream-of-consciousness style, characterization (his fantasies about a dog, his awareness of constraints like Mrs. Duggin and the Bishop), figurative language (road as dark ribbon, sublimating wishes), and how they develop a complex portrayal of Father Declan — his deep loneliness, suppressed desires, humor, and tension between priestly duty and human need for connection.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 3: Literary Argument — A Character's Secret ──
      {
        num: 3,
        type: "literary-argument",
        title: "Literary Argument",
        points: 6,
        suggestedTime: 40,
        prompt: `Many works of literature feature a character who holds a secret that can have broader implications for that character or other characters. For example, such secrets may create conflict, provide a source of consolation, protect characters from reality, or allow one character to manipulate other characters.

Either from your own reading or from the list below, choose a work of fiction in which an important character holds a secret that affects that character\u2019s relationship with one or more other characters. Then, in a well-written essay, analyze how the effect of the character\u2019s secret contributes to an interpretation of the work as a whole. Do not merely summarize the plot.

In your response you should do the following:
\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.
\u2022 Provide evidence to support your line of reasoning.
\u2022 Explain how the evidence supports your line of reasoning.
\u2022 Use appropriate grammar and punctuation in communicating your argument.

Suggested works:
American Spy, Angels in America, Another Country, As I Lay Dying, Atonement, The Awakening, Behold the Dreamers, The Color Purple, A Doll\u2019s House, East of Eden, The English Patient, Fabulation, or the Re-Education of Undine, Frankenstein, Great Expectations, The Great Gatsby, Homegoing, Jane Eyre, The Joy Luck Club, The Kite Runner, Like Water for Chocolate, Little Fires Everywhere, Macbeth, The Memory Keeper\u2019s Daughter, The Namesake, Passing, People of the Whale, The Picture of Dorian Gray, Pride and Prejudice, Rebecca, The Remains of the Day, The Scarlet Letter, Song of Solomon, The Sound of a Voice, Sula, Twelfth Night, Washington Black, The Women of Brewster Place`,
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the selected work. The thesis must provide a defensible interpretation of how a character's secret affects relationships and contributes to the meaning of the work as a whole." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, tends to focus on overarching narrative or description rather than specific details; 2 = some specific evidence with broad generalizations, may make one good point; 3 = specific evidence supporting claims in a line of reasoning, focuses on importance of specific details from selected work; 4 = specific evidence supporting all claims, consistently explains how specific details contribute to interpretation of the work as a whole." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by: (1) identifying and exploring complexities or tensions within the selected work, (2) situating the interpretation within a broader context, (3) accounting for alternative interpretations, or (4) employing a consistently vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Literary Argument essay (FRQ 3).
The student chose their own literary work to respond to a prompt about a character who holds a secret that affects relationships with other characters — secrets may create conflict, provide consolation, protect from reality, or allow manipulation.
Evaluate using the official AP Lit 2025 rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
The student must demonstrate genuine knowledge of their chosen work, not just plot summary. Look for a clear interpretive claim about how the effect of the character's secret contributes to an interpretation of the work as a whole, supported by specific textual evidence with insightful commentary.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // OFFICIAL 2024 — SET 1 (FRQ only)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: "official2024s1",
    label: "2024 AP Exam - Set 1",
    year: "2024",
    badge: "Official",
    badgeColor: "#FF4757",
    badgeBg: "rgba(255,71,87,0.15)",
    badgeBorder: "rgba(255,71,87,0.3)",
    description: "Official 2024 AP English Literature FRQ Set 1 — Poetry Analysis + Prose Fiction Analysis + Literary Argument.",
    totalTime: 120 * 60,

    questions: [
      // ── FRQ 1: Poetry Analysis — Ridge "To a Star Seen at Twilight" ──
      {
        num: 1,
        type: "poetry-analysis",
        title: "Poetry Analysis",
        points: 6,
        suggestedTime: 40,
        author: "John Rollin Ridge",
        source: "\"To a Star Seen at Twilight\" (1868)",
        context: "In John Rollin Ridge\u2019s poem \u201cTo a Star Seen at Twilight,\u201d published in 1868, the speaker admires a solitary star shining at twilight and considers its significance. Read the poem carefully.",
        prompt: "In a well-written essay, analyze how Ridge uses literary elements and techniques to convey the speaker\u2019s complex reflection on the star.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: "", text: "To a Star Seen at Twilight" },
          { lineStart: "", text: "" },
          { lineStart: 1, text: "Hail solitary star!" },
          { lineStart: 2, text: "That shinest from thy far blue height," },
          { lineStart: 3, text: "And overlookest Earth" },
          { lineStart: 4, text: "And Heaven, companionless in light!" },
          { lineStart: 5, text: "The rays around thy brow" },
          { lineStart: 6, text: "Are an eternal wreath for thee;" },
          { lineStart: 7, text: "Yet thou\u2019rt not proud, like man," },
          { lineStart: 8, text: "Though thy broad mirror is the sea," },
          { lineStart: 9, text: "And thy calm home eternity!" },
          { lineStart: "", text: "" },
          { lineStart: 10, text: "Shine on, night-bosomed star!" },
          { lineStart: 11, text: "And through its realms thy soul\u2019s eye dart," },
          { lineStart: 12, text: "And count each age of light," },
          { lineStart: 13, text: "For their eternal wheel thou art." },
          { lineStart: "", text: "" },
          { lineStart: 14, text: "Thou dost roll into the past days," },
          { lineStart: 15, text: "Years, and ages too," },
          { lineStart: 16, text: "And naught thy giant progress stays." },
          { lineStart: "", text: "" },
          { lineStart: 17, text: "I love to gaze upon" },
          { lineStart: 18, text: "Thy speaking face, thy calm, fair brow," },
          { lineStart: 19, text: "And feel my spirit dark" },
          { lineStart: 20, text: "And deep, grow bright and pure as thou." },
          { lineStart: 21, text: "Like thee it stands alone;" },
          { lineStart: 22, text: "Like thee its native home is night," },
          { lineStart: 23, text: "But there the likeness ends,\u2014" },
          { lineStart: 24, text: "It beams not with thy steady light." },
          { lineStart: 25, text: "Its upward path is high," },
          { lineStart: 26, text: "But not so high as thine\u2014thou\u2019rt far" },
          { lineStart: 27, text: "Above the reach of clouds," },
          { lineStart: 28, text: "Of storms, of wreck, oh lofty star!" },
          { lineStart: 29, text: "I would all men might look" },
          { lineStart: 30, text: "Upon thy pure sublimity," },
          { lineStart: 31, text: "And in their bosoms drink" },
          { lineStart: 32, text: "Thy lovliness and light like me;" },
          { lineStart: 33, text: "For who in all the world" },
          { lineStart: 34, text: "Could gaze upon thee thus, and feel" },
          { lineStart: 35, text: "Aught in his nature base," },
          { lineStart: 36, text: "Or mean, or low, around him steal!" },
          { lineStart: "", text: "" },
          { lineStart: 37, text: "Shine on companionless" },
          { lineStart: 38, text: "As now thou seem\u2019st. Thou art the throne" },
          { lineStart: 39, text: "Of thy own spirit, star!" },
          { lineStart: 40, text: "And mighty things must be alone." },
          { lineStart: 41, text: "Alone the ocean heaves," },
          { lineStart: 42, text: "Or calms his bosom into sleep;" },
          { lineStart: 43, text: "Alone each mountain stands" },
          { lineStart: 44, text: "Upon its basis broad and deep;" },
          { lineStart: 45, text: "Alone through heaven the comets sweep," },
          { lineStart: 46, text: "Those burning worlds which God has thrown" },
          { lineStart: 47, text: "Upon the universe in wrath," },
          { lineStart: 48, text: "As if he hated them\u2014their path" },
          { lineStart: 49, text: "No stars, no suns may follow, none\u2014" },
          { lineStart: 50, text: "\u2019Tis great, \u2019tis great to be alone!" },
        ],
        footnotes: [],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the poem." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations; 3 = specific evidence supporting claims in a line of reasoning, explains how literary elements contribute to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by identifying complexities/tensions, situating within broader context, accounting for alternative interpretations, or employing a vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Poetry Analysis essay (FRQ 1).
The student analyzed John Rollin Ridge's "To a Star Seen at Twilight" (1868) — a poem in which the speaker addresses a solitary star, admiring its constancy and purity, comparing it to his own spirit, and ultimately celebrating the grandeur of solitude.
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of literary elements: apostrophe (addressing the star), imagery (light, sea, mountains, comets), tone (reverent, aspirational), structure (movement from admiration to self-comparison to universal assertion), diction, figurative language, and how they convey the speaker's complex reflection — admiration for the star's solitary greatness, self-awareness of his own limitations, and a philosophical embrace of noble solitude.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 2: Prose Fiction Analysis — Gallant "One Morning in June" ──
      {
        num: 2,
        type: "prose-analysis",
        title: "Prose Fiction Analysis",
        points: 6,
        suggestedTime: 40,
        author: "Mavis Gallant",
        source: "\"One Morning in June\" (1952)",
        context: "The following excerpt is from Mavis Gallant\u2019s short story \u201cOne Morning in June,\u201d published in 1952. In this passage, Mike Cahill is in France for one year to explore his talent for art. Read the passage carefully.",
        prompt: "In a well-written essay, analyze how Gallant uses literary elements and techniques to convey Mike\u2019s complex experience of studying painting.\n\nIn your response you should do the following:\n\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.\n\u2022 Select and use evidence to support your line of reasoning.\n\u2022 Explain how the evidence supports your line of reasoning.\n\u2022 Use appropriate grammar and punctuation in communicating your argument.",
        passage: [
          { lineStart: 1, text: "    He had come to France because the words \u201cart\u201d" },
          { lineStart: 2, text: "and \u201cParis\u201d were unbreakably joined in his family\u2019s" },
          { lineStart: 3, text: "imagination, the legend of Trilby\u2019s Bohemia\u00B9" },
          { lineStart: 4, text: "persisting long after the truth of it had died. When his" },
          { lineStart: 5, text: "high school art teacher, a young woman whose" },
          { lineStart: 6, text: "mobiles\u00B2 had been praised, pronounced that his was a" },
          { lineStart: 7, text: "talent not to be buried under the study of medicine or" },
          { lineStart: 8, text: "law, his family had decided that a year in Paris would" },
          { lineStart: 9, text: "show whether or not his natural bent was toward" },
          { lineStart: 10, text: "painting. It was rather like exposing someone to a" },
          { lineStart: 11, text: "case of measles and watching for spots to break out." },
          { lineStart: 12, text: "    In Paris, Mike had spent the first three weeks" },
          { lineStart: 13, text: "standing in the wrong queue at the Beaux-Arts,\u00B3 and" },
          { lineStart: 14, text: "when no one seemed able to direct him to the right" },
          { lineStart: 15, text: "one, he had given up the Beaux-Arts entirely and" },
          { lineStart: 16, text: "joined a class instructed by an English painter called" },
          { lineStart: 17, text: "Chitterley, whose poster advertisement he had seen in" },
          { lineStart: 18, text: "a caf\u00e9. It was Mr. Chitterley\u2019s custom to turn his" },
          { lineStart: 19, text: "young charges loose on the city and then, once a week" },
          { lineStart: 20, text: "or so, comment on their work in a borrowed studio on" },
          { lineStart: 21, text: "the Quai d\u2019Anjou.\u2074 Mike painted with sober patience" },
          { lineStart: 22, text: "the bridges of the Seine, the rain-soaked lawns of the" },
          { lineStart: 23, text: "Tuileries, and a head-on view of Notre Dame. His" },
          { lineStart: 24, text: "paintings were large (Mr. Chitterley was nearsighted)," },
          { lineStart: 25, text: "askew (as he had been taught in the public schools of" },
          { lineStart: 26, text: "New York), and empty of people (he had never been" },
          { lineStart: 27, text: "taught to draw, and it was not his nature to take" },
          { lineStart: 28, text: "chances)." },
          { lineStart: 29, text: "    \u201cVery interesting,\u201d said Mr. Chitterley of Mike\u2019s" },
          { lineStart: 30, text: "work. Squinting a little, he would add, \u201cAh! I see what" },
          { lineStart: 31, text: "you were trying to do here!\u201d" },
          { lineStart: 32, text: "    \u201cYou do?\u201d Mike wished he would be more specific," },
          { lineStart: 33, text: "for he sometimes recognized that his pictures were" },
          { lineStart: 34, text: "flat, empty, and the color of cement. At first, he had" },
          { lineStart: 35, text: "blamed the season, for the Paris winter had been" },
          { lineStart: 36, text: "sunless; later on, he saw that its gray contained every" },
          { lineStart: 37, text: "shade in a beam of light, but this effect he was unable" },
          { lineStart: 38, text: "to reproduce. Unnerved by the pressure of time, he" },
          { lineStart: 39, text: "watched his work all winter, searching for the clue" },
          { lineStart: 40, text: "that would set him on a course. Prodded in the" },
          { lineStart: 41, text: "direction of art, he now believed in it, enjoying, above" },
          { lineStart: 42, text: "all, the solitude, the sense of separateness, the" },
          { lineStart: 43, text: "assembling of parts into something reasonable. He" },
          { lineStart: 44, text: "might have been equally happy at a quiet table," },
          { lineStart: 45, text: "gathering into something ticking and ordered the" },
          { lineStart: 46, text: "scattered wheels of a watch, and he had most certainly" },
          { lineStart: 47, text: "never given it a thought. At last, when the season had" },
          { lineStart: 48, text: "rained itself to an end (and his family innocently were" },
          { lineStart: 49, text: "prepared to have him exhibit his winter\u2019s harvest in" },
          { lineStart: 50, text: "some garret\u2075 of the Left Bank and send home the" },
          { lineStart: 51, text: "critics\u2019 clippings), he approached Mr. Chitterley and" },
          { lineStart: 52, text: "asked what he ought to do next." },
          { lineStart: 53, text: "    \u201cWhy, go to the country,\u201d said Mr. Chitterley, who" },
          { lineStart: 54, text: "was packing for a holiday with the owner of the Quai" },
          { lineStart: 55, text: "d\u2019Anjou studio. \u201cGo south. Don\u2019t stop in a hotel but" },
          { lineStart: 56, text: "live on the land, in a tent, and paint, paint, paint," },
          { lineStart: 57, text: "paint!\u201d" },
          { lineStart: 58, text: "    \u201cI can\u2019t afford it,\u201d Mike said. \u201cI mean I can\u2019t afford" },
          { lineStart: 59, text: "to buy the tent and stuff. But I can stay over here until" },
          { lineStart: 60, text: "August, if you think there\u2019s any point. I mean is it" },
          { lineStart: 61, text: "wasting time for me to paint, paint, paint?\u201d" },
          { lineStart: 62, text: "    Mr. Chitterley shot him an offended look and then" },
          { lineStart: 63, text: "a scornful one, which said, How like an American!" },
          { lineStart: 64, text: "The only measuring rods, time and money. Aloud, he" },
          { lineStart: 65, text: "suggested Menton.\u2076 He had stayed there as a child," },
          { lineStart: 66, text: "and he remembered it as a paradise of lemon ice and" },
          { lineStart: 67, text: "sunshine. Mike, for want of a better thought, or even a" },
          { lineStart: 68, text: "contrastive one, took the train there a day later." },
        ],
        footnotes: [
          "1 Trilby, a popular 1894 novel by George du Maurier, focuses on the unconventional lifestyles of artists and musicians in 1850s Paris.",
          "2 suspended decorative sculptures designed to move with air currents",
          "3 a famous art school in Paris",
          "4 a neighborhood on the \u00cele Saint-Louis, an island in the Seine river in Paris",
          "5 a small, dismal attic room",
          "6 a town on the French Riviera",
        ],
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the passage." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence, mentions literary elements with little explanation; 2 = some specific evidence with broad generalizations; 3 = specific evidence supporting claims in a line of reasoning, explains how literary elements contribute to meaning; 4 = specific evidence supporting all claims, consistently explains how multiple literary elements/techniques contribute to interpretation." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by identifying complexities/tensions, situating within broader context, accounting for alternative interpretations, or employing a vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Prose Fiction Analysis essay (FRQ 2).
The student analyzed an excerpt from Mavis Gallant's "One Morning in June" (1952) — a passage about Mike Cahill, a young American in Paris trying to develop his talent for painting under the guidance of Mr. Chitterley, navigating his family's romantic expectations versus the reality of his uncertain artistic abilities.
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
Look for analysis of narrative techniques: ironic tone, characterization (Mike's passivity and self-doubt, Chitterley's vagueness), imagery (flat cement-colored paintings, gray Paris winter), diction, humor (measles simile, nearsighted teacher), narrative distance, and how they convey Mike's complex experience — caught between family expectations, romantic notions of art, his own mediocrity, and a dawning appreciation for solitude and process over product.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },

      // ── FRQ 3: Literary Argument — A Character's Indecision ──
      {
        num: 3,
        type: "literary-argument",
        title: "Literary Argument",
        points: 6,
        suggestedTime: 40,
        prompt: `Many works of literature feature a character who may be reluctant to make a decision, unable to make a decision, or is resistant to doing so. This indecision can have broader implications for that character or other characters. Such implications may include changes to a character\u2019s relationships, social and/or financial stability, well-being, or any other aspects of the character\u2019s existence.

Either from your own reading or from the list below, choose a work of fiction in which a character delays or avoids making a decision. Then, in a well-written essay, analyze how the impact of this indecision contributes to an interpretation of the work as a whole. Do not merely summarize the plot.

In your response you should do the following:
\u2022 Respond to the prompt with a thesis that presents a defensible interpretation.
\u2022 Provide evidence to support your line of reasoning.
\u2022 Explain how the evidence supports your line of reasoning.
\u2022 Use appropriate grammar and punctuation in communicating your argument.

Suggested works:
The Age of Innocence, An American Marriage, Anna Karenina, The Autobiography of Miss Jane Pittman, Beloved, Colorless Tsukuru Tazaki and His Years of Pilgrimage, Corelli\u2019s Mandolin, Dubliners, Emma, Frankenstein, George Washington G\u00f3mez, Indian Horse, Interior Chinatown, Jane Eyre, The Kite Runner, Little Fires Everywhere, A Long Petal of the Sea, Love in the Time of Cholera, Madame Bovary, The Metamorphosis, The Miraculous Day of Amalia G\u00f3mez, The Namesake, The Night Watchman, North and South, One Flew Over the Cuckoo\u2019s Nest, Pipeline, The Professor\u2019s House, Quicksand, A Raisin in the Sun, Rebecca, A Room with a View, The Stranger, A Tale of Two Cities, Tess of the d\u2019Urbervilles, Topdog/Underdog, Waiting, Whereabouts, Wuthering Heights`,
        rubric: [
          { row: "A", category: "Thesis", points: 1, description: "Responds to the prompt with a thesis that presents a defensible interpretation of the selected work." },
          { row: "B", category: "Evidence and Commentary", points: 4, description: "0 = no evidence or incoherent; 1 = mostly general evidence; 2 = some specific evidence with broad generalizations; 3 = specific evidence supporting claims in a line of reasoning; 4 = specific evidence supporting all claims, consistently explains how details contribute to interpretation of the work as a whole." },
          { row: "C", category: "Sophistication", points: 1, description: "Demonstrates sophistication of thought and/or develops a complex literary argument by identifying complexities/tensions, situating within broader context, accounting for alternative interpretations, or employing a vivid and persuasive style." },
        ],
        scoringPrompt: `You are an expert AP English Literature grader scoring a Literary Argument essay (FRQ 3).
The student chose their own literary work to respond to a prompt about a character who delays or avoids making a decision, and how that indecision has broader implications and contributes to an interpretation of the work as a whole.
Evaluate using the AP Lit rubric: Thesis (0-1), Evidence & Commentary (0-4), Sophistication (0-1).
The student must demonstrate genuine knowledge of their chosen work, not just plot summary. Look for a clear interpretive claim about how the character's indecision contributes to the meaning of the work as a whole, supported by specific textual evidence with insightful commentary.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}`
      },
    ],
  },
];

export default ALL_TESTS;
