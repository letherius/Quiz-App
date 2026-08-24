const QUESTION_BANK = [

  {
    category: "technology",
    difficulty: "Easy",
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Digital Network Service",
      "Domain Network Server",
      "Data Naming Standard"
    ],
    answer: "Domain Name System",
    explanation:
      "DNS translates human-friendly domain names into IP addresses that computers use to locate services."
  },

  {
    category: "technology",
    difficulty: "Easy",
    question: "Which protocol is normally used for secure web browsing?",
    options: [
      "HTTPS",
      "FTP",
      "SMTP",
      "Telnet"
    ],
    answer: "HTTPS",
    explanation:
      "HTTPS is HTTP protected with TLS encryption, which helps secure data between the browser and web server."
  },

  {
    category: "technology",
    difficulty: "Medium",
    question: "What is the main purpose of an IP address?",
    options: [
      "Identify a device or interface on a network",
      "Encrypt every website",
      "Store passwords",
      "Increase internet speed"
    ],
    answer:
      "Identify a device or interface on a network",
    explanation:
      "IP addresses provide logical addressing so network traffic can be routed to the correct destination."
  },

  {
    category: "technology",
    difficulty: "Medium",
    question: "Which HTTP status code means 'Not Found'?",
    options: [
      "404",
      "200",
      "301",
      "500"
    ],
    answer: "404",
    explanation:
      "HTTP 404 indicates that the server could not find the requested resource."
  },

  {
    category: "technology",
    difficulty: "Medium",
    question: "What does RAM primarily provide to a computer?",
    options: [
      "Short-term working memory",
      "Permanent archival storage",
      "Internet access",
      "Power regulation"
    ],
    answer:
      "Short-term working memory",
    explanation:
      "RAM temporarily stores data and instructions that active programs need quickly."
  },

  {
    category: "technology",
    difficulty: "Hard",
    question:
      "Which layer of the OSI model is responsible for routing packets between networks?",
    options: [
      "Network",
      "Transport",
      "Data Link",
      "Session"
    ],
    answer: "Network",
    explanation:
      "Layer 3, the Network layer, handles logical addressing and routing between networks."
  },

  {
    category: "technology",
    difficulty: "Medium",
    question:
      "Which Git command copies a remote repository to your computer?",
    options: [
      "git clone",
      "git push",
      "git merge",
      "git stash"
    ],
    answer: "git clone",
    explanation:
      "git clone creates a local copy of a remote repository, including its history and branches."
  },

  {
    category: "technology",
    difficulty: "Hard",
    question:
      "Which port is the default for HTTPS?",
    options: [
      "443",
      "80",
      "22",
      "53"
    ],
    answer: "443",
    explanation:
      "HTTPS commonly uses TCP port 443."
  },

  {
    category: "technology",
    difficulty: "Easy",
    question:
      "Which operating system is built around the Linux kernel?",
    options: [
      "Ubuntu",
      "Windows",
      "macOS",
      "MS-DOS"
    ],
    answer: "Ubuntu",
    explanation:
      "Ubuntu is a Linux distribution built around the Linux kernel and GNU/Linux user-space tools."
  },

  {
    category: "technology",
    difficulty: "Medium",
    question:
      "What is a CDN mainly used for?",
    options: [
      "Deliver content from servers closer to users",
      "Replace DNS completely",
      "Create source code",
      "Manage passwords"
    ],
    answer:
      "Deliver content from servers closer to users",
    explanation:
      "A content delivery network caches and serves content from distributed locations to reduce latency."
  },


  {
    category: "science",
    difficulty: "Easy",
    question:
      "Which planet is known as the Red Planet?",
    options: [
      "Mars",
      "Venus",
      "Jupiter",
      "Mercury"
    ],
    answer: "Mars",
    explanation:
      "Iron minerals in Martian soil oxidize, giving the planet its familiar reddish appearance."
  },

  {
    category: "science",
    difficulty: "Easy",
    question:
      "What is the largest organ in the human body?",
    options: [
      "Skin",
      "Liver",
      "Heart",
      "Lungs"
    ],
    answer: "Skin",
    explanation:
      "The skin is the body's largest organ by surface area and mass."
  },

  {
    category: "science",
    difficulty: "Medium",
    question:
      "What gas do plants absorb during photosynthesis?",
    options: [
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    answer:
      "Carbon dioxide",
    explanation:
      "Plants use carbon dioxide, water, and light energy to produce glucose and release oxygen."
  },

  {
    category: "science",
    difficulty: "Medium",
    question:
      "What is the chemical symbol for gold?",
    options: [
      "Au",
      "Ag",
      "Go",
      "Gd"
    ],
    answer: "Au",
    explanation:
      "Gold's chemical symbol Au comes from the Latin word aurum."
  },

  {
    category: "science",
    difficulty: "Medium",
    question:
      "Which part of a cell contains most of its genetic material?",
    options: [
      "Nucleus",
      "Ribosome",
      "Cell membrane",
      "Cytoplasm"
    ],
    answer: "Nucleus",
    explanation:
      "In eukaryotic cells, most DNA is stored inside the nucleus."
  },

  {
    category: "science",
    difficulty: "Hard",
    question:
      "What is the approximate speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "30,000 km/s",
      "3,000 km/s",
      "3,000,000 km/s"
    ],
    answer:
      "300,000 km/s",
    explanation:
      "Light travels at about 299,792 kilometers per second in a vacuum."
  },

  {
    category: "science",
    difficulty: "Easy",
    question:
      "What force keeps planets in orbit around the Sun?",
    options: [
      "Gravity",
      "Magnetism",
      "Friction",
      "Buoyancy"
    ],
    answer: "Gravity",
    explanation:
      "The Sun's gravity continually bends the planets' motion into orbit."
  },

  {
    category: "science",
    difficulty: "Hard",
    question:
      "Which particle has a negative electric charge?",
    options: [
      "Electron",
      "Proton",
      "Neutron",
      "Photon"
    ],
    answer: "Electron",
    explanation:
      "Electrons carry a negative elementary charge; protons are positive and neutrons are neutral."
  },


  {
    category: "world",
    difficulty: "Easy",
    question:
      "What is the capital of France?",
    options: [
      "Paris",
      "London",
      "Berlin",
      "Madrid"
    ],
    answer: "Paris",
    explanation:
      "Paris is the capital and largest city of France."
  },

  {
    category: "world",
    difficulty: "Easy",
    question:
      "Which is the largest continent by land area?",
    options: [
      "Asia",
      "Africa",
      "North America",
      "Europe"
    ],
    answer: "Asia",
    explanation:
      "Asia is the world's largest continent by both land area and population."
  },

  {
    category: "world",
    difficulty: "Easy",
    question:
      "Which ocean is the largest?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    answer:
      "Pacific Ocean",
    explanation:
      "The Pacific Ocean is the largest and deepest ocean basin on Earth."
  },

  {
    category: "world",
    difficulty: "Medium",
    question:
      "Which country contains the city of Kyoto?",
    options: [
      "Japan",
      "South Korea",
      "China",
      "Thailand"
    ],
    answer: "Japan",
    explanation:
      "Kyoto is a historic Japanese city and was the imperial capital for more than a thousand years."
  },

  {
    category: "world",
    difficulty: "Medium",
    question:
      "The Nile River empties into which sea?",
    options: [
      "Mediterranean Sea",
      "Red Sea",
      "Arabian Sea",
      "Black Sea"
    ],
    answer:
      "Mediterranean Sea",
    explanation:
      "The Nile flows north through northeastern Africa and reaches the Mediterranean through its delta in Egypt."
  },

  {
    category: "world",
    difficulty: "Hard",
    question:
      "Which modern country was formerly known as Persia?",
    options: [
      "Iran",
      "Iraq",
      "Jordan",
      "Turkey"
    ],
    answer: "Iran",
    explanation:
      "Persia was the historic Western name for Iran; the government formally requested international use of Iran in 1935."
  },

  {
    category: "world",
    difficulty: "Medium",
    question:
      "Which desert covers much of northern Africa?",
    options: [
      "Sahara",
      "Gobi",
      "Kalahari",
      "Atacama"
    ],
    answer: "Sahara",
    explanation:
      "The Sahara stretches across much of North Africa and is the world's largest hot desert."
  },

  {
    category: "world",
    difficulty: "Hard",
    question:
      "Which city sits on two continents, Europe and Asia?",
    options: [
      "Istanbul",
      "Athens",
      "Cairo",
      "Lisbon"
    ],
    answer: "Istanbul",
    explanation:
      "Istanbul spans both sides of the Bosporus Strait, placing parts of the city in Europe and Asia."
  }

];


const MODES = {

  relaxed: {
    label: "Relaxed",
    seconds: 25,
    multiplier: 1
  },

  standard: {
    label: "Standard",
    seconds: 15,
    multiplier: 1.25
  },

  blitz: {
    label: "Blitz",
    seconds: 10,
    multiplier: 1.5
  }

};


const CATEGORY_NAMES = {

  mixed: "Mixed",

  technology: "Technology",

  science: "Science",

  world: "World"

};


const $ = (id) =>
  document.getElementById(id);


const els = {

  home:
    $("home-screen"),

  quiz:
    $("quiz-screen"),

  result:
    $("result-screen"),

  brand:
    $("brand-button"),

  soundToggle:
    $("sound-toggle"),

  soundIcon:
    $("sound-icon"),

  headerBest:
    $("header-best-score"),

  bestAccuracy:
    $("best-accuracy"),

  profileBest:
    $("profile-best-score"),

  gamesPlayed:
    $("games-played"),

  dailyStreak:
    $("daily-streak"),

  bestStreak:
    $("best-streak"),

  dailyStatus:
    $("daily-status"),

  dailyNote:
    $("daily-note"),

  dailyButton:
    $("daily-button"),

  jumpToBuilder:
    $("jump-to-builder"),

  categoryOptions:
    $("category-options"),

  modeOptions:
    $("mode-options"),

  lengthOptions:
    $("length-options"),

  launchSummary:
    $("launch-summary"),

  startCustom:
    $("start-custom-button"),

  gameCategory:
    $("game-category"),

  gameMode:
    $("game-mode"),

  quit:
    $("quit-button"),

  questionCount:
    $("question-count"),

  liveScore:
    $("live-score"),

  liveStreak:
    $("live-streak"),

  timerRing:
    $("timer-ring"),

  timer:
    $("timer"),

  progressLabel:
    $("progress-label"),

  progressBar:
    $("progress-bar"),

  questionNumber:
    $("question-number"),

  questionOverline:
    $("question-overline"),

  question:
    $("question"),

  options:
    $("options"),

  feedback:
    $("feedback"),

  feedbackIcon:
    $("feedback-icon"),

  feedbackTitle:
    $("feedback-title"),

  feedbackText:
    $("feedback-text"),

  next:
    $("next-button"),

  resultBadge:
    $("result-badge"),

  resultTitle:
    $("result-title"),

  resultSubtitle:
    $("result-subtitle"),

  finalScore:
    $("final-score"),

  newHigh:
    $("new-high-score"),

  achievementRow:
    $("achievement-row"),

  finalAccuracy:
    $("final-accuracy"),

  correctSummary:
    $("correct-summary"),

  finalStreak:
    $("final-streak"),

  averageTime:
    $("average-time"),

  finalMode:
    $("final-mode"),

  finalCategory:
    $("final-category"),

  reviewCard:
    $("review-card"),

  reviewToggle:
    $("review-toggle"),

  reviewCount:
    $("review-count"),

  reviewChevron:
    $("review-chevron"),

  reviewList:
    $("review-list"),

  playAgain:
    $("play-again-button"),

  newChallenge:
    $("new-challenge-button"),

  share:
    $("share-button"),

  confetti:
    $("confetti"),

  toast:
    $("toast")

};


const defaultStats = {

  bestScore: 0,

  bestAccuracy: 0,

  gamesPlayed: 0,

  bestStreak: 0,

  dailyStreak: 0,

  lastDailyDate: "",

  sound: true

};


let stats = {

  ...defaultStats,

  ...JSON.parse(
    localStorage.getItem(
      "quizforgeStats"
    ) || "{}"
  )

};


const state = {

  settings: {
    category: "mixed",
    mode: "standard",
    count: 10
  },

  runSettings: {
    category: "mixed",
    mode: "standard",
    count: 10
  },

  questions: [],

  index: 0,

  score: 0,

  streak: 0,

  bestStreak: 0,

  correct: 0,

  answered: false,

  isDaily: false,

  timeLeft: 0,

  startedAt: 0,

  timerId: null,

  answers: []

};


/* -----------------------------------
   STORAGE
----------------------------------- */

function saveStats() {

  localStorage.setItem(
    "quizforgeStats",
    JSON.stringify(stats)
  );

}


/* -----------------------------------
   DATE HELPERS
----------------------------------- */

function todayKey() {

  return new Date()
    .toISOString()
    .slice(0, 10);

}


function dayNumber(dateString) {

  return Math.floor(

    Date.parse(
      `${dateString}T00:00:00Z`
    ) / 86400000

  );

}


function daysBetween(a, b) {

  return (
    dayNumber(b) -
    dayNumber(a)
  );

}


/* -----------------------------------
   SHUFFLE HELPERS
----------------------------------- */

function shuffle(list) {

  return [...list]
    .sort(
      () =>
        Math.random() - 0.5
    );

}


function seededShuffle(
  list,
  seedText
) {

  let seed = 2166136261;


  for (const char of seedText) {

    seed ^=
      char.charCodeAt(0);

    seed =
      Math.imul(
        seed,
        16777619
      );

  }


  const copy =
    [...list];


  for (
    let i =
      copy.length - 1;
    i > 0;
    i--
  ) {

    seed =
      (
        Math.imul(
          seed,
          1664525
        ) +
        1013904223
      ) >>> 0;


    const j =
      seed %
      (i + 1);


    [
      copy[i],
      copy[j]
    ] =
    [
      copy[j],
      copy[i]
    ];

  }


  return copy;

}


/* -----------------------------------
   SCREEN CONTROL
----------------------------------- */

function showScreen(screen) {

  [
    els.home,
    els.quiz,
    els.result
  ].forEach(
    (item) =>
      item.classList.add(
        "hide"
      )
  );


  screen.classList.remove(
    "hide"
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* -----------------------------------
   HOME STATS
----------------------------------- */

function updateHome() {

  els.headerBest.textContent =
    stats.bestScore
      .toLocaleString();


  els.profileBest.textContent =
    `${stats.bestScore.toLocaleString()} pts`;


  els.bestAccuracy.textContent =
    `${stats.bestAccuracy}%`;


  els.gamesPlayed.textContent =
    stats.gamesPlayed;


  els.dailyStreak.textContent =
    stats.dailyStreak;


  els.bestStreak.textContent =
    stats.bestStreak;


  document
    .querySelector(
      ".accuracy-ring"
    )
    .style
    .background =
    `
      conic-gradient(
        var(--cyan)
        ${Math.max(
          stats.bestAccuracy,
          1
        )}%,
        rgba(
          255,
          255,
          255,
          0.06
        )
        0
      )
    `;


  const completedToday =
    stats.lastDailyDate ===
    todayKey();


  els.dailyStatus.textContent =
    completedToday
      ? "Daily complete"
      : "Daily ready";


  els.dailyNote.textContent =
    completedToday
      ? "Completed today · replay for fun"
      : "10 questions · one fresh challenge today";


  els.soundToggle.setAttribute(
    "aria-pressed",
    String(stats.sound)
  );


  els.soundIcon.textContent =
    stats.sound
      ? "♪"
      : "×";

}


/* -----------------------------------
   QUIZ BUILDER
----------------------------------- */

function updateLaunchSummary() {

  els.launchSummary.textContent =
    `
      ${state.settings.count}
      ${CATEGORY_NAMES[state.settings.category]}
      ·
      ${MODES[state.settings.mode].label}
    `
      .replace(
        /\s+/g,
        " "
      )
      .trim();

}


function attachSelector(
  container,
  selector,
  callback
) {

  container.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          selector
        );


      if (
        !button ||
        !container.contains(
          button
        )
      ) {
        return;
      }


      container
        .querySelectorAll(
          selector
        )
        .forEach(
          (item) =>
            item.classList.remove(
              "selected"
            )
        );


      button.classList.add(
        "selected"
      );


      callback(button);


      updateLaunchSummary();

    }
  );

}


attachSelector(

  els.categoryOptions,

  ".choice-card",

  (button) => {

    state.settings.category =
      button.dataset.category;

  }

);


attachSelector(

  els.modeOptions,

  "button",

  (button) => {

    state.settings.mode =
      button.dataset.mode;

  }

);


attachSelector(

  els.lengthOptions,

  "button",

  (button) => {

    state.settings.count =
      Number(
        button.dataset.count
      );

  }

);


/* -----------------------------------
   QUESTION PREPARATION
----------------------------------- */

function prepareQuestions(
  isDaily
) {

  if (isDaily) {

    const daily =
      seededShuffle(
        QUESTION_BANK,
        todayKey()
      )
      .slice(
        0,
        10
      );


    return daily.map(
      (question, index) => ({

        ...question,

        options:
          seededShuffle(
            question.options,
            `${todayKey()}-${index}`
          )

      })
    );

  }


  const pool =

    state.settings.category ===
    "mixed"

      ? QUESTION_BANK

      : QUESTION_BANK.filter(
          (question) =>
            question.category ===
            state.settings.category
        );


  return shuffle(pool)

    .slice(
      0,
      Math.min(
        state.settings.count,
        pool.length
      )
    )

    .map(
      (question) => ({

        ...question,

        options:
          shuffle(
            question.options
          )

      })
    );

}


/* -----------------------------------
   START QUIZ
----------------------------------- */

function startRun({
  daily = false
} = {}) {

  clearInterval(
    state.timerId
  );


  state.isDaily =
    daily;


  state.runSettings =

    daily

      ? {
          category: "mixed",
          mode: "standard",
          count: 10
        }

      : {
          ...state.settings
        };


  state.questions =
    prepareQuestions(
      daily
    );


  state.index = 0;

  state.score = 0;

  state.streak = 0;

  state.bestStreak = 0;

  state.correct = 0;

  state.answers = [];

  state.answered = false;


  showScreen(
    els.quiz
  );


  playTone(
    "start"
  );


  renderQuestion();

}


/* -----------------------------------
   DISPLAY QUESTION
----------------------------------- */

function renderQuestion() {

  clearInterval(
    state.timerId
  );


  state.answered =
    false;


  els.next.disabled =
    true;


  els.feedback.className =
    "feedback-panel hide";


  const question =
    state.questions[
      state.index
    ];


  const mode =
    MODES[
      state.runSettings.mode
    ];


  els.gameCategory.textContent =

    state.isDaily

      ? "Daily Challenge"

      : CATEGORY_NAMES[
          question.category
        ];


  els.gameMode.textContent =
    mode.label;


  els.questionCount.textContent =
    `
      ${state.index + 1}
      /
      ${state.questions.length}
    `
      .replace(
        /\s+/g,
        " "
      )
      .trim();


  els.liveScore.textContent =
    state.score
      .toLocaleString();


  els.liveStreak.textContent =
    state.streak;


  els.questionNumber.textContent =
    String(
      state.index + 1
    )
    .padStart(
      2,
      "0"
    );


  els.questionOverline.textContent =
    `
      ${CATEGORY_NAMES[
        question.category
      ].toUpperCase()}
      ·
      ${question.difficulty.toUpperCase()}
    `
      .replace(
        /\s+/g,
        " "
      )
      .trim();


  els.question.textContent =
    question.question;


  const progress =
    (
      (
        state.index + 1
      ) /
      state.questions.length
    ) *
    100;


  els.progressBar.style.width =
    `${progress}%`;


  els.progressLabel.textContent =
    `${Math.round(progress)}%`;


  els.next.textContent =

    state.index ===
    state.questions.length - 1

      ? "See Results →"

      : "Next Question →";


  els.options.innerHTML =
    "";


  question.options.forEach(
    (
      option,
      index
    ) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer-button";


      button.type =
        "button";


      button.innerHTML =
        `
          <span class="answer-key">
            ${index + 1}
          </span>

          <span>
            ${option}
          </span>
        `;


      button.addEventListener(
        "click",
        () => {

          chooseAnswer(
            button,
            option
          );

        }
      );


      els.options.appendChild(
        button
      );

    }
  );


  state.timeLeft =
    mode.seconds;


  state.startedAt =
    performance.now();


  updateTimer();


  state.timerId =
    setInterval(
      () => {

        state.timeLeft -=
          1;


        updateTimer();


        if (
          state.timeLeft <= 0
        ) {

          clearInterval(
            state.timerId
          );


          handleTimeout();

        }

      },

      1000
    );

}


/* -----------------------------------
   TIMER
----------------------------------- */

function updateTimer() {

  const total =
    MODES[
      state.runSettings.mode
    ].seconds;


  const percent =
    Math.max(

      0,

      (
        state.timeLeft /
        total
      ) *
      100

    );


  els.timer.textContent =
    Math.max(
      0,
      state.timeLeft
    );


  els.timerRing
    .style
    .setProperty(
      "--progress",
      percent
    );


  els.timerRing
    .classList
    .toggle(

      "danger",

      state.timeLeft <=
      Math.ceil(
        total *
        0.3
      )

    );

}


/* -----------------------------------
   ANSWER SELECTION
----------------------------------- */

function chooseAnswer(
  selectedButton,
  selected
) {

  if (
    state.answered
  ) {
    return;
  }


  state.answered =
    true;


  clearInterval(
    state.timerId
  );


  const question =
    state.questions[
      state.index
    ];


  const elapsed =
    (
      performance.now() -
      state.startedAt
    ) /
    1000;


  const isCorrect =
    selected ===
    question.answer;


  markAnswers(

    selectedButton,

    question.answer,

    isCorrect

  );


  if (
    isCorrect
  ) {

    state.correct +=
      1;


    state.streak +=
      1;


    state.bestStreak =
      Math.max(

        state.bestStreak,

        state.streak

      );


    const mode =
      MODES[
        state.runSettings.mode
      ];


    const speedBonus =
      Math.max(

        0,

        state.timeLeft *
        6

      );


    const streakBonus =
      Math.min(

        state.streak - 1,

        5

      ) *
      30;


    const points =
      Math.round(

        (
          100 +
          speedBonus +
          streakBonus
        ) *
        mode.multiplier

      );


    state.score +=
      points;


    showFeedback(

      true,

      `+${points} points · ${question.explanation}`

    );


    playTone(
      "correct"
    );

  }

  else {

    state.streak =
      0;


    showFeedback(

      false,

      `Correct answer: ${question.answer}. ${question.explanation}`

    );


    playTone(
      "wrong"
    );

  }


  state.answers.push({

    ...question,

    selected,

    correct:
      isCorrect,

    elapsed,

    timedOut:
      false

  });


  els.liveScore.textContent =
    state.score
      .toLocaleString();


  els.liveStreak.textContent =
    state.streak;


  els.next.disabled =
    false;

}


/* -----------------------------------
   TIMEOUT
----------------------------------- */

function handleTimeout() {

  if (
    state.answered
  ) {
    return;
  }


  state.answered =
    true;


  const question =
    state.questions[
      state.index
    ];


  state.streak =
    0;


  markAnswers(

    null,

    question.answer,

    false

  );


  showFeedback(

    false,

    `Time expired. Correct answer: ${question.answer}. ${question.explanation}`

  );


  state.answers.push({

    ...question,

    selected:
      "Time expired",

    correct:
      false,

    elapsed:
      MODES[
        state.runSettings.mode
      ].seconds,

    timedOut:
      true

  });


  els.liveStreak.textContent =
    0;


  els.next.disabled =
    false;


  playTone(
    "wrong"
  );

}


/* -----------------------------------
   MARK ANSWERS
----------------------------------- */

function markAnswers(
  selectedButton,
  correctAnswer,
  isCorrect
) {

  els.options
    .querySelectorAll(
      ".answer-button"
    )
    .forEach(
      (button) => {

        button.disabled =
          true;


        const text =
          button
            .lastElementChild
            .textContent;


        if (
          text ===
          correctAnswer
        ) {

          button.classList.add(
            "correct"
          );

        }

        else if (
          button ===
          selectedButton &&
          !isCorrect
        ) {

          button.classList.add(
            "wrong"
          );

        }

        else {

          button.classList.add(
            "dimmed"
          );

        }

      }
    );

}


/* -----------------------------------
   FEEDBACK
----------------------------------- */

function showFeedback(
  correct,
  message
) {

  els.feedback.className =
    `
      feedback-panel
      ${correct ? "" : "wrong"}
    `
      .trim();


  els.feedbackIcon.textContent =
    correct
      ? "✓"
      : "!";


  els.feedbackTitle.textContent =
    correct
      ? "Correct"
      : "Not this time";


  els.feedbackText.textContent =
    message;

}


/* -----------------------------------
   NEXT QUESTION
----------------------------------- */

function nextQuestion() {

  if (
    !state.answered
  ) {
    return;
  }


  state.index +=
    1;


  if (
    state.index <
    state.questions.length
  ) {

    renderQuestion();

  }

  else {

    finishRun();

  }

}


/* -----------------------------------
   FINISH QUIZ
----------------------------------- */

function finishRun() {

  clearInterval(
    state.timerId
  );


  const accuracy =
    Math.round(

      (
        state.correct /
        state.questions.length
      ) *
      100

    );


  const average =
    state.answers.reduce(

      (
        sum,
        item
      ) =>
        sum +
        item.elapsed,

      0

    ) /
    state.answers.length;


  const isNewHigh =
    state.score >
    stats.bestScore;


  stats.gamesPlayed +=
    1;


  stats.bestScore =
    Math.max(

      stats.bestScore,

      state.score

    );


  stats.bestAccuracy =
    Math.max(

      stats.bestAccuracy,

      accuracy

    );


  stats.bestStreak =
    Math.max(

      stats.bestStreak,

      state.bestStreak

    );


  if (
    state.isDaily
  ) {

    updateDailyStreak();

  }


  saveStats();


  updateHome();


  renderResults(

    accuracy,

    average,

    isNewHigh

  );


  showScreen(
    els.result
  );


  if (
    accuracy >= 80 ||
    isNewHigh
  ) {

    launchConfetti();

  }


  playTone(

    accuracy >= 80

      ? "finishGood"

      : "finish"

  );

}


/* -----------------------------------
   DAILY STREAK
----------------------------------- */

function updateDailyStreak() {

  const today =
    todayKey();


  if (
    stats.lastDailyDate ===
    today
  ) {
    return;
  }


  stats.dailyStreak =

    stats.lastDailyDate &&
    daysBetween(
      stats.lastDailyDate,
      today
    ) === 1

      ? stats.dailyStreak + 1

      : 1;


  stats.lastDailyDate =
    today;

}


/* -----------------------------------
   RESULTS
----------------------------------- */

function renderResults(
  accuracy,
  average,
  isNewHigh
) {

  const missed =
    state.answers.filter(
      (item) =>
        !item.correct
    );


  els.resultBadge.textContent =

    state.isDaily

      ? "DAILY COMPLETE"

      : "RUN COMPLETE";


  els.finalScore.textContent =
    state.score
      .toLocaleString();


  els.newHigh
    .classList
    .toggle(

      "hide",

      !isNewHigh

    );


  els.finalAccuracy.textContent =
    `${accuracy}%`;


  els.correctSummary.textContent =
    `
      ${state.correct}
      /
      ${state.questions.length}
      correct
    `
      .replace(
        /\s+/g,
        " "
      )
      .trim();


  els.finalStreak.textContent =
    state.bestStreak;


  els.averageTime.textContent =
    `${average.toFixed(1)}s`;


  els.finalMode.textContent =
    MODES[
      state.runSettings.mode
    ].label;


  els.finalCategory.textContent =

    state.isDaily

      ? "Daily mixed challenge"

      : `${CATEGORY_NAMES[state.runSettings.category]} category`;


  if (
    accuracy === 100
  ) {

    els.resultTitle.textContent =
      "Flawless.";


    els.resultSubtitle.textContent =
      "Perfect accuracy. That one deserves another run.";

  }

  else if (
    accuracy >= 80
  ) {

    els.resultTitle.textContent =
      "That was strong.";


    els.resultSubtitle.textContent =
      "You were locked in. Run it back and chase the perfect score.";

  }

  else if (
    accuracy >= 60
  ) {

    els.resultTitle.textContent =
      "You were in it.";


    els.resultSubtitle.textContent =
      "A few answers separated this run from a big score. Review the misses and go again.";

  }

  else {

    els.resultTitle.textContent =
      "Run it back.";


    els.resultSubtitle.textContent =
      "Now you know what is coming. Review the misses and beat this score on the next run.";

  }


  renderAchievements(

    accuracy,

    average,

    isNewHigh

  );


  renderReview(
    missed
  );

}


/* -----------------------------------
   ACHIEVEMENTS
----------------------------------- */

function renderAchievements(
  accuracy,
  average,
  isNewHigh
) {

  const list =
    [];


  if (
    accuracy === 100
  ) {

    list.push(
      "★ Perfect Run"
    );

  }


  if (
    state.bestStreak >= 5
  ) {

    list.push(
      "🔥 Hot Streak"
    );

  }


  if (
    average <= 6 &&
    state.correct >=
      Math.ceil(
        state.questions.length *
        0.6
      )
  ) {

    list.push(
      "⚡ Quick Draw"
    );

  }


  if (
    isNewHigh
  ) {

    list.push(
      "🏆 New High Score"
    );

  }


  if (
    state.isDaily
  ) {

    list.push(
      "◉ Daily Finisher"
    );

  }


  if (
    state.runSettings.mode ===
    "blitz" &&
    accuracy >= 70
  ) {

    list.push(
      "⏱ Blitz Tested"
    );

  }


  if (
    !list.length
  ) {

    list.push(
      "✓ Run Complete"
    );

  }


  els.achievementRow.innerHTML =
    "";


  list.forEach(
    (label) => {

      const chip =
        document.createElement(
          "span"
        );


      chip.className =
        "achievement-chip";


      chip.textContent =
        label;


      els.achievementRow.appendChild(
        chip
      );

    }
  );

}


/* -----------------------------------
   REVIEW QUESTIONS
----------------------------------- */

function renderReview(
  missed
) {

  els.reviewList.innerHTML =
    "";


  els.reviewList.classList.add(
    "hide"
  );


  els.reviewToggle.setAttribute(
    "aria-expanded",
    "false"
  );


  els.reviewChevron.textContent =
    "＋";


  els.reviewCount.textContent =
    `${missed.length} missed`;


  els.reviewCard
    .classList
    .toggle(

      "hide",

      missed.length === 0

    );


  missed.forEach(
    (
      item,
      index
    ) => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "review-item";


      card.innerHTML =
        `
          <span>
            MISS ${String(index + 1).padStart(2, "0")}
            ·
            ${CATEGORY_NAMES[item.category].toUpperCase()}
          </span>

          <strong>
            ${item.question}
          </strong>

          <p>
            Your answer:
            ${item.selected}
          </p>

          <p class="review-correct">
            Correct answer:
            ${item.answer}
          </p>

          <p>
            ${item.explanation}
          </p>
        `;


      els.reviewList.appendChild(
        card
      );

    }
  );

}


/* -----------------------------------
   REVIEW TOGGLE
----------------------------------- */

function toggleReview() {

  const open =
    els.reviewToggle
      .getAttribute(
        "aria-expanded"
      ) ===
    "true";


  els.reviewToggle
    .setAttribute(

      "aria-expanded",

      String(
        !open
      )

    );


  els.reviewList
    .classList
    .toggle(

      "hide",

      open

    );


  els.reviewChevron.textContent =
    open
      ? "＋"
      : "−";

}


/* -----------------------------------
   NAVIGATION
----------------------------------- */

function returnHome() {

  clearInterval(
    state.timerId
  );


  showScreen(
    els.home
  );


  updateHome();

}


function quitRun() {

  const shouldQuit =
    confirm(
      "End this run and return to the home screen?"
    );


  if (
    shouldQuit
  ) {

    returnHome();

  }

}


function playAgain() {

  startRun({
    daily:
      state.isDaily
  });

}


/* -----------------------------------
   AUDIO
----------------------------------- */

let audioContext;


function playTone(type) {

  if (
    !stats.sound
  ) {
    return;
  }


  try {

    audioContext ||=

      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();


    const oscillator =
      audioContext.createOscillator();


    const gain =
      audioContext.createGain();


    const tones = {

      start: [
        440,
        0.07
      ],

      correct: [
        700,
        0.09
      ],

      wrong: [
        180,
        0.12
      ],

      finish: [
        380,
        0.10
      ],

      finishGood: [
        820,
        0.12
      ]

    };


    const [
      frequency,
      duration
    ] =
      tones[type] ||
      tones.start;


    oscillator.type =

      type === "wrong"

        ? "triangle"

        : "sine";


    oscillator.frequency.value =
      frequency;


    gain.gain
      .setValueAtTime(

        0.0001,

        audioContext.currentTime

      );


    gain.gain
      .exponentialRampToValueAtTime(

        0.05,

        audioContext.currentTime +
        0.01

      );


    gain.gain
      .exponentialRampToValueAtTime(

        0.0001,

        audioContext.currentTime +
        duration

      );


    oscillator.connect(
      gain
    );


    gain.connect(
      audioContext.destination
    );


    oscillator.start();


    oscillator.stop(

      audioContext.currentTime +
      duration +
      0.02

    );

  }

  catch (error) {

    // Audio is optional.

  }

}


function toggleSound() {

  stats.sound =
    !stats.sound;


  saveStats();


  updateHome();


  if (
    stats.sound
  ) {

    playTone(
      "start"
    );

  }

}


/* -----------------------------------
   CONFETTI
----------------------------------- */

function launchConfetti() {

  const colors = [

    "#47e4d0",

    "#6280ff",

    "#9a6cff",

    "#4ed59c",

    "#ffc866",

    "#ff6d82"

  ];


  els.confetti.innerHTML =
    "";


  for (
    let i = 0;
    i < 70;
    i++
  ) {

    const piece =
      document.createElement(
        "span"
      );


    piece.className =
      "confetti-piece";


    piece.style.setProperty(

      "--left",

      `${Math.random() * 100}%`

    );


    piece.style.setProperty(

      "--size",

      `${5 + Math.random() * 6}px`

    );


    piece.style.setProperty(

      "--rotation",

      `${Math.random() * 360}deg`

    );


    piece.style.setProperty(

      "--drift",

      `${-120 + Math.random() * 240}px`

    );


    piece.style.setProperty(

      "--duration",

      `${2.1 + Math.random() * 1.8}s`

    );


    piece.style.setProperty(

      "--color",

      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ]

    );


    els.confetti.appendChild(
      piece
    );

  }


  setTimeout(

    () => {

      els.confetti.innerHTML =
        "";

    },

    4200

  );

}


/* -----------------------------------
   TOAST
----------------------------------- */

let toastTimer;


function showToast(
  message
) {

  clearTimeout(
    toastTimer
  );


  els.toast.textContent =
    message;


  els.toast.classList.add(
    "show"
  );


  toastTimer =
    setTimeout(

      () => {

        els.toast
          .classList
          .remove(
            "show"
          );

      },

      2200

    );

}


/* -----------------------------------
   SHARE RESULTS
----------------------------------- */

async function shareResult() {

  const accuracy =
    Math.round(

      (
        state.correct /
        state.questions.length
      ) *
      100

    );


  const text =
    `
      I scored
      ${state.score.toLocaleString()}
      points with
      ${accuracy}%
      accuracy on QuizForge.
      Can you beat it?
    `
      .replace(
        /\s+/g,
        " "
      )
      .trim();


  try {

    if (
      navigator.share
    ) {

      await navigator.share({

        title:
          "QuizForge Result",

        text,

        url:
          location.href

      });


      return;

    }


    await navigator.clipboard.writeText(

      `${text} ${location.href}`

    );


    showToast(
      "Result copied to clipboard."
    );

  }

  catch (error) {

    if (
      error?.name !==
      "AbortError"
    ) {

      showToast(
        "Could not share automatically."
      );

    }

  }

}


/* -----------------------------------
   EVENT LISTENERS
----------------------------------- */

els.startCustom
  .addEventListener(
    "click",
    () => {

      startRun({
        daily: false
      });

    }
  );


els.dailyButton
  .addEventListener(
    "click",
    () => {

      startRun({
        daily: true
      });

    }
  );


els.jumpToBuilder
  .addEventListener(
    "click",
    () => {

      $("builder")
        .scrollIntoView({

          behavior:
            "smooth",

          block:
            "start"

        });

    }
  );


els.brand
  .addEventListener(
    "click",
    returnHome
  );


els.soundToggle
  .addEventListener(
    "click",
    toggleSound
  );


els.quit
  .addEventListener(
    "click",
    quitRun
  );


els.next
  .addEventListener(
    "click",
    nextQuestion
  );


els.playAgain
  .addEventListener(
    "click",
    playAgain
  );


els.newChallenge
  .addEventListener(
    "click",
    returnHome
  );


els.share
  .addEventListener(
    "click",
    shareResult
  );


els.reviewToggle
  .addEventListener(
    "click",
    toggleReview
  );


/* -----------------------------------
   KEYBOARD CONTROLS
----------------------------------- */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      els.quiz.classList.contains(
        "hide"
      )
    ) {
      return;
    }


    if (
      !state.answered &&
      [
        "1",
        "2",
        "3",
        "4"
      ].includes(
        event.key
      )
    ) {

      const button =
        els.options
          .querySelectorAll(
            ".answer-button"
          )[
            Number(
              event.key
            ) - 1
          ];


      if (
        button &&
        !button.disabled
      ) {

        button.click();

      }

    }


    if (
      state.answered &&
      event.key ===
      "Enter" &&
      !els.next.disabled
    ) {

      els.next.click();

    }

  }
);


/* -----------------------------------
   INITIALIZE
----------------------------------- */

updateHome();

updateLaunchSummary();
