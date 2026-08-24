document.addEventListener("DOMContentLoaded", () => {
    console.log("QuizForge JavaScript v7 loaded successfully.");

    // --------------------------------------------------
    // QUESTION BANK
    // --------------------------------------------------

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
                "DNS translates domain names into IP addresses that computers use to locate services."
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
                "HTTPS uses TLS encryption to help secure traffic between a browser and web server."
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
            answer: "Identify a device or interface on a network",
            explanation:
                "IP addresses provide logical addressing so traffic can reach the correct network destination."
        },
        {
            category: "technology",
            difficulty: "Medium",
            question: "Which HTTP status code means Not Found?",
            options: [
                "404",
                "200",
                "301",
                "500"
            ],
            answer: "404",
            explanation:
                "HTTP 404 means the requested resource could not be found."
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
            answer: "Short-term working memory",
            explanation:
                "RAM temporarily stores data and instructions that active applications need quickly."
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
                "The Network layer handles logical addressing and routing between networks."
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
                "git clone creates a local copy of a remote repository."
        },
        {
            category: "technology",
            difficulty: "Hard",
            question: "Which port is the default for HTTPS?",
            options: [
                "443",
                "80",
                "22",
                "53"
            ],
            answer: "443",
            explanation:
                "HTTPS normally uses TCP port 443."
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
                "Ubuntu is a Linux distribution built around the Linux kernel."
        },
        {
            category: "technology",
            difficulty: "Medium",
            question: "What is a CDN mainly used for?",
            options: [
                "Deliver content from servers closer to users",
                "Replace DNS completely",
                "Create source code",
                "Manage passwords"
            ],
            answer: "Deliver content from servers closer to users",
            explanation:
                "A content delivery network distributes cached content closer to users to reduce latency."
        },

        {
            category: "science",
            difficulty: "Easy",
            question: "Which planet is known as the Red Planet?",
            options: [
                "Mars",
                "Venus",
                "Jupiter",
                "Mercury"
            ],
            answer: "Mars",
            explanation:
                "Iron minerals in Martian soil give Mars its reddish appearance."
        },
        {
            category: "science",
            difficulty: "Easy",
            question: "What is the largest organ in the human body?",
            options: [
                "Skin",
                "Liver",
                "Heart",
                "Lungs"
            ],
            answer: "Skin",
            explanation:
                "The skin is the body's largest organ by surface area."
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
            answer: "Carbon dioxide",
            explanation:
                "Plants absorb carbon dioxide and use it during photosynthesis."
        },
        {
            category: "science",
            difficulty: "Medium",
            question: "What is the chemical symbol for gold?",
            options: [
                "Au",
                "Ag",
                "Go",
                "Gd"
            ],
            answer: "Au",
            explanation:
                "The chemical symbol Au comes from the Latin word aurum."
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
                "Most genetic material in a eukaryotic cell is contained inside the nucleus."
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
            answer: "300,000 km/s",
            explanation:
                "Light travels at approximately 299,792 kilometers per second in a vacuum."
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
                "The Sun's gravitational force keeps the planets in orbit."
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
                "Electrons carry a negative electric charge."
        },

        {
            category: "world",
            difficulty: "Easy",
            question: "What is the capital of France?",
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
                "Asia is the world's largest continent by land area."
        },
        {
            category: "world",
            difficulty: "Easy",
            question: "Which ocean is the largest?",
            options: [
                "Pacific Ocean",
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean"
            ],
            answer: "Pacific Ocean",
            explanation:
                "The Pacific is the largest ocean on Earth."
        },
        {
            category: "world",
            difficulty: "Medium",
            question: "Which country contains the city of Kyoto?",
            options: [
                "Japan",
                "South Korea",
                "China",
                "Thailand"
            ],
            answer: "Japan",
            explanation:
                "Kyoto is a historic city located in Japan."
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
            answer: "Mediterranean Sea",
            explanation:
                "The Nile flows north through Africa and empties into the Mediterranean Sea."
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
                "Persia was the historic Western name for modern-day Iran."
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
                "The Sahara stretches across much of northern Africa."
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
                "Istanbul spans both sides of the Bosporus Strait, placing it in Europe and Asia."
        }
    ];


    // --------------------------------------------------
    // SETTINGS
    // --------------------------------------------------

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


    const DEFAULT_STATS = {
        bestScore: 0,
        bestAccuracy: 0,
        gamesPlayed: 0,
        bestStreak: 0,
        dailyStreak: 0,
        lastDailyDate: "",
        sound: true
    };


    // --------------------------------------------------
    // SAFE LOCAL STORAGE
    // --------------------------------------------------

    function loadStats() {
        try {
            const saved = localStorage.getItem("quizforgeStatsV7");

            if (!saved) {
                return { ...DEFAULT_STATS };
            }

            const parsed = JSON.parse(saved);

            return {
                ...DEFAULT_STATS,
                ...parsed
            };
        } catch (error) {
            console.warn(
                "QuizForge could not load saved stats. Starting fresh.",
                error
            );

            return { ...DEFAULT_STATS };
        }
    }


    function saveStats() {
        try {
            localStorage.setItem(
                "quizforgeStatsV7",
                JSON.stringify(stats)
            );
        } catch (error) {
            console.warn(
                "QuizForge could not save stats.",
                error
            );
        }
    }


    let stats = loadStats();


    // --------------------------------------------------
    // DOM REFERENCES
    // --------------------------------------------------

    const get = (id) => document.getElementById(id);


    const elements = {
        homeScreen: get("home-screen"),
        quizScreen: get("quiz-screen"),
        resultScreen: get("result-screen"),

        brandButton: get("brand-button"),

        soundToggle: get("sound-toggle"),
        soundIcon: get("sound-icon"),

        headerBestScore: get("header-best-score"),

        bestAccuracy: get("best-accuracy"),
        profileBestScore: get("profile-best-score"),
        gamesPlayed: get("games-played"),
        dailyStreak: get("daily-streak"),
        bestStreak: get("best-streak"),
        dailyStatus: get("daily-status"),
        dailyNote: get("daily-note"),

        dailyButton: get("daily-button"),
        jumpToBuilder: get("jump-to-builder"),

        categoryOptions: get("category-options"),
        modeOptions: get("mode-options"),
        lengthOptions: get("length-options"),

        launchSummary: get("launch-summary"),
        startCustomButton: get("start-custom-button"),

        gameCategory: get("game-category"),
        gameMode: get("game-mode"),

        quitButton: get("quit-button"),

        questionCount: get("question-count"),
        liveScore: get("live-score"),
        liveStreak: get("live-streak"),

        timerRing: get("timer-ring"),
        timer: get("timer"),

        progressLabel: get("progress-label"),
        progressBar: get("progress-bar"),

        questionNumber: get("question-number"),
        questionOverline: get("question-overline"),
        question: get("question"),

        options: get("options"),

        feedback: get("feedback"),
        feedbackIcon: get("feedback-icon"),
        feedbackTitle: get("feedback-title"),
        feedbackText: get("feedback-text"),

        nextButton: get("next-button"),

        resultBadge: get("result-badge"),
        resultTitle: get("result-title"),
        resultSubtitle: get("result-subtitle"),

        finalScore: get("final-score"),
        newHighScore: get("new-high-score"),

        achievementRow: get("achievement-row"),

        finalAccuracy: get("final-accuracy"),
        correctSummary: get("correct-summary"),
        finalStreak: get("final-streak"),
        averageTime: get("average-time"),

        finalMode: get("final-mode"),
        finalCategory: get("final-category"),

        reviewCard: get("review-card"),
        reviewToggle: get("review-toggle"),
        reviewCount: get("review-count"),
        reviewChevron: get("review-chevron"),
        reviewList: get("review-list"),

        playAgainButton: get("play-again-button"),
        newChallengeButton: get("new-challenge-button"),
        shareButton: get("share-button"),

        confetti: get("confetti"),
        toast: get("toast")
    };


    // --------------------------------------------------
    // APP STATE
    // --------------------------------------------------

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

        currentIndex: 0,

        score: 0,

        streak: 0,

        bestRunStreak: 0,

        correct: 0,

        answered: false,

        isDaily: false,

        timeLeft: 0,

        questionStartedAt: 0,

        timerId: null,

        answers: []
    };


    // --------------------------------------------------
    // HELPERS
    // --------------------------------------------------

    function shuffle(array) {
        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {
            const randomIndex =
                Math.floor(Math.random() * (i + 1));

            [copy[i], copy[randomIndex]] =
                [copy[randomIndex], copy[i]];
        }

        return copy;
    }


    function todayKey() {
        const date = new Date();

        const year = date.getFullYear();

        const month =
            String(date.getMonth() + 1).padStart(2, "0");

        const day =
            String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function seededRandom(seed) {
        let value = seed % 2147483647;

        if (value <= 0) {
            value += 2147483646;
        }

        return function () {
            value =
                value * 16807 % 2147483647;

            return (
                value - 1
            ) / 2147483646;
        };
    }


    function createSeedFromString(text) {
        let hash = 0;

        for (let i = 0; i < text.length; i++) {
            hash =
                (
                    hash * 31 +
                    text.charCodeAt(i)
                ) >>> 0;
        }

        return hash || 1;
    }


    function seededShuffle(array, seedText) {
        const copy = [...array];

        const random =
            seededRandom(
                createSeedFromString(seedText)
            );

        for (let i = copy.length - 1; i > 0; i--) {
            const randomIndex =
                Math.floor(
                    random() * (i + 1)
                );

            [copy[i], copy[randomIndex]] =
                [copy[randomIndex], copy[i]];
        }

        return copy;
    }


    function showScreen(screen) {
        [
            elements.homeScreen,
            elements.quizScreen,
            elements.resultScreen
        ].forEach((item) => {
            if (item) {
                item.classList.add("hide");
            }
        });

        screen.classList.remove("hide");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // --------------------------------------------------
    // HOME SCREEN
    // --------------------------------------------------

    function updateHomeStats() {
        elements.headerBestScore.textContent =
            stats.bestScore.toLocaleString();

        elements.profileBestScore.textContent =
            `${stats.bestScore.toLocaleString()} pts`;

        elements.bestAccuracy.textContent =
            `${stats.bestAccuracy}%`;

        elements.gamesPlayed.textContent =
            stats.gamesPlayed;

        elements.dailyStreak.textContent =
            stats.dailyStreak;

        elements.bestStreak.textContent =
            stats.bestStreak;

        const completedToday =
            stats.lastDailyDate === todayKey();

        elements.dailyStatus.textContent =
            completedToday
                ? "Daily complete"
                : "Daily ready";

        elements.dailyNote.textContent =
            completedToday
                ? "Completed today · replay anytime"
                : "10 questions · fresh daily challenge";

        elements.soundToggle.setAttribute(
            "aria-pressed",
            String(stats.sound)
        );

        elements.soundIcon.textContent =
            stats.sound
                ? "♪"
                : "×";

        const ring =
            document.querySelector(".accuracy-ring");

        if (ring) {
            ring.style.background =
                `conic-gradient(
                    var(--cyan) ${Math.max(stats.bestAccuracy, 1)}%,
                    rgba(255,255,255,.08) 0
                )`;
        }
    }


    // --------------------------------------------------
    // BUILDER CONTROLS
    // --------------------------------------------------

    function updateLaunchSummary() {
        elements.launchSummary.textContent =
            `${state.settings.count} ` +
            `${CATEGORY_NAMES[state.settings.category]} · ` +
            `${MODES[state.settings.mode].label}`;
    }


    elements.categoryOptions.addEventListener(
        "click",
        (event) => {
            const button =
                event.target.closest(".choice-card");

            if (!button) {
                return;
            }

            elements.categoryOptions
                .querySelectorAll(".choice-card")
                .forEach((item) => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            state.settings.category =
                button.dataset.category;

            updateLaunchSummary();
        }
    );


    elements.modeOptions.addEventListener(
        "click",
        (event) => {
            const button =
                event.target.closest("button");

            if (!button) {
                return;
            }

            elements.modeOptions
                .querySelectorAll("button")
                .forEach((item) => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            state.settings.mode =
                button.dataset.mode;

            updateLaunchSummary();
        }
    );


    elements.lengthOptions.addEventListener(
        "click",
        (event) => {
            const button =
                event.target.closest("button");

            if (!button) {
                return;
            }

            elements.lengthOptions
                .querySelectorAll("button")
                .forEach((item) => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            state.settings.count =
                Number(button.dataset.count);

            updateLaunchSummary();
        }
    );


    // --------------------------------------------------
    // PREPARE QUESTIONS
    // --------------------------------------------------

    function prepareQuestions(isDaily) {
        if (isDaily) {
            return seededShuffle(
                QUESTION_BANK,
                todayKey()
            )
                .slice(0, 10)
                .map((question, index) => {
                    return {
                        ...question,

                        options:
                            seededShuffle(
                                question.options,
                                `${todayKey()}-${index}`
                            )
                    };
                });
        }

        let pool;

        if (state.settings.category === "mixed") {
            pool = QUESTION_BANK;
        } else {
            pool =
                QUESTION_BANK.filter(
                    (question) =>
                        question.category ===
                        state.settings.category
                );
        }

        return shuffle(pool)
            .slice(
                0,
                Math.min(
                    state.settings.count,
                    pool.length
                )
            )
            .map((question) => {
                return {
                    ...question,

                    options:
                        shuffle(question.options)
                };
            });
    }


    // --------------------------------------------------
    // START RUN
    // --------------------------------------------------

    function startRun(isDaily = false) {
        clearInterval(state.timerId);

        state.isDaily = isDaily;

        if (isDaily) {
            state.runSettings = {
                category: "mixed",
                mode: "standard",
                count: 10
            };
        } else {
            state.runSettings = {
                ...state.settings
            };
        }

        state.questions =
            prepareQuestions(isDaily);

        state.currentIndex = 0;

        state.score = 0;

        state.streak = 0;

        state.bestRunStreak = 0;

        state.correct = 0;

        state.answered = false;

        state.answers = [];

        showScreen(elements.quizScreen);

        playSound("start");

        displayQuestion();
    }


    // --------------------------------------------------
    // DISPLAY QUESTION
    // --------------------------------------------------

    function displayQuestion() {
        clearInterval(state.timerId);

        state.answered = false;

        elements.nextButton.disabled = true;

        elements.feedback.className =
            "feedback-panel hide";

        const question =
            state.questions[state.currentIndex];

        const mode =
            MODES[state.runSettings.mode];

        elements.gameCategory.textContent =
            state.isDaily
                ? "Daily Challenge"
                : CATEGORY_NAMES[question.category];

        elements.gameMode.textContent =
            mode.label;

        elements.questionCount.textContent =
            `${state.currentIndex + 1} / ${state.questions.length}`;

        elements.liveScore.textContent =
            state.score.toLocaleString();

        elements.liveStreak.textContent =
            state.streak;

        elements.questionNumber.textContent =
            String(state.currentIndex + 1)
                .padStart(2, "0");

        elements.questionOverline.textContent =
            `${CATEGORY_NAMES[
                question.category
            ].toUpperCase()} · ${question.difficulty.toUpperCase()}`;

        elements.question.textContent =
            question.question;

        const progress =
            (
                (state.currentIndex + 1) /
                state.questions.length
            ) * 100;

        elements.progressBar.style.width =
            `${progress}%`;

        elements.progressLabel.textContent =
            `${Math.round(progress)}%`;

        elements.nextButton.textContent =
            state.currentIndex ===
            state.questions.length - 1
                ? "See Results →"
                : "Next Question →";

        elements.options.innerHTML = "";

        question.options.forEach(
            (option, index) => {
                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "answer-button";

                const key =
                    document.createElement("span");

                key.className =
                    "answer-key";

                key.textContent =
                    index + 1;

                const answerText =
                    document.createElement("span");

                answerText.textContent =
                    option;

                button.appendChild(key);

                button.appendChild(answerText);

                button.addEventListener(
                    "click",
                    () => {
                        chooseAnswer(
                            button,
                            option
                        );
                    }
                );

                elements.options.appendChild(button);
            }
        );

        state.timeLeft =
            mode.seconds;

        state.questionStartedAt =
            performance.now();

        updateTimer();

        state.timerId =
            setInterval(
                () => {
                    state.timeLeft--;

                    updateTimer();

                    if (state.timeLeft <= 0) {
                        clearInterval(
                            state.timerId
                        );

                        handleTimeout();
                    }
                },
                1000
            );
    }


    // --------------------------------------------------
    // TIMER
    // --------------------------------------------------

    function updateTimer() {
        const total =
            MODES[
                state.runSettings.mode
            ].seconds;

        const percentage =
            Math.max(
                0,
                (
                    state.timeLeft /
                    total
                ) * 100
            );

        elements.timer.textContent =
            Math.max(
                0,
                state.timeLeft
            );

        elements.timerRing.style.setProperty(
            "--progress",
            percentage
        );

        elements.timerRing.classList.toggle(
            "danger",
            state.timeLeft <=
                Math.ceil(total * 0.3)
        );
    }


    // --------------------------------------------------
    // ANSWER QUESTION
    // --------------------------------------------------

    function chooseAnswer(
        selectedButton,
        selectedAnswer
    ) {
        if (state.answered) {
            return;
        }

        state.answered = true;

        clearInterval(state.timerId);

        const question =
            state.questions[state.currentIndex];

        const elapsed =
            (
                performance.now() -
                state.questionStartedAt
            ) / 1000;

        const correct =
            selectedAnswer ===
            question.answer;

        markAnswerButtons(
            selectedButton,
            question.answer,
            correct
        );

        if (correct) {
            state.correct++;

            state.streak++;

            state.bestRunStreak =
                Math.max(
                    state.bestRunStreak,
                    state.streak
                );

            const mode =
                MODES[
                    state.runSettings.mode
                ];

            const speedBonus =
                Math.max(
                    0,
                    state.timeLeft * 6
                );

            const streakBonus =
                Math.min(
                    state.streak - 1,
                    5
                ) * 30;

            const earnedPoints =
                Math.round(
                    (
                        100 +
                        speedBonus +
                        streakBonus
                    ) *
                    mode.multiplier
                );

            state.score +=
                earnedPoints;

            showFeedback(
                true,
                `+${earnedPoints} points. ${question.explanation}`
            );

            playSound("correct");
        } else {
            state.streak = 0;

            showFeedback(
                false,
                `Correct answer: ${question.answer}. ${question.explanation}`
            );

            playSound("wrong");
        }

        state.answers.push({
            ...question,

            selected: selectedAnswer,

            correct,

            elapsed,

            timedOut: false
        });

        elements.liveScore.textContent =
            state.score.toLocaleString();

        elements.liveStreak.textContent =
            state.streak;

        elements.nextButton.disabled =
            false;
    }


    // --------------------------------------------------
    // TIMEOUT
    // --------------------------------------------------

    function handleTimeout() {
        if (state.answered) {
            return;
        }

        state.answered = true;

        const question =
            state.questions[state.currentIndex];

        state.streak = 0;

        markAnswerButtons(
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

            selected: "Time expired",

            correct: false,

            elapsed:
                MODES[
                    state.runSettings.mode
                ].seconds,

            timedOut: true
        });

        elements.liveStreak.textContent =
            0;

        elements.nextButton.disabled =
            false;

        playSound("wrong");
    }


    // --------------------------------------------------
    // MARK ANSWERS
    // --------------------------------------------------

    function markAnswerButtons(
        selectedButton,
        correctAnswer,
        selectedWasCorrect
    ) {
        const buttons =
            elements.options.querySelectorAll(
                ".answer-button"
            );

        buttons.forEach((button) => {
            button.disabled = true;

            const answerText =
                button
                    .querySelector(
                        "span:last-child"
                    )
                    .textContent;

            if (answerText === correctAnswer) {
                button.classList.add("correct");
            } else if (
                button === selectedButton &&
                !selectedWasCorrect
            ) {
                button.classList.add("wrong");
            } else {
                button.classList.add("dimmed");
            }
        });
    }


    // --------------------------------------------------
    // FEEDBACK
    // --------------------------------------------------

    function showFeedback(correct, message) {
        elements.feedback.className =
            correct
                ? "feedback-panel"
                : "feedback-panel wrong";

        elements.feedbackIcon.textContent =
            correct
                ? "✓"
                : "!";

        elements.feedbackTitle.textContent =
            correct
                ? "Correct"
                : "Not this time";

        elements.feedbackText.textContent =
            message;
    }


    // --------------------------------------------------
    // NEXT QUESTION
    // --------------------------------------------------

    function nextQuestion() {
        if (!state.answered) {
            return;
        }

        state.currentIndex++;

        if (
            state.currentIndex <
            state.questions.length
        ) {
            displayQuestion();
        } else {
            finishRun();
        }
    }


    // --------------------------------------------------
    // DAILY STREAK
    // --------------------------------------------------

    function updateDailyStreak() {
        const today =
            todayKey();

        if (
            stats.lastDailyDate ===
            today
        ) {
            return;
        }

        if (!stats.lastDailyDate) {
            stats.dailyStreak = 1;
        } else {
            const previous =
                new Date(
                    `${stats.lastDailyDate}T00:00:00`
                );

            const current =
                new Date(
                    `${today}T00:00:00`
                );

            const difference =
                Math.round(
                    (
                        current -
                        previous
                    ) /
                    86400000
                );

            if (difference === 1) {
                stats.dailyStreak++;
            } else {
                stats.dailyStreak = 1;
            }
        }

        stats.lastDailyDate =
            today;
    }


    // --------------------------------------------------
    // FINISH RUN
    // --------------------------------------------------

    function finishRun() {
        clearInterval(state.timerId);

        const accuracy =
            Math.round(
                (
                    state.correct /
                    state.questions.length
                ) * 100
            );

        const totalResponseTime =
            state.answers.reduce(
                (total, item) =>
                    total + item.elapsed,
                0
            );

        const averageResponseTime =
            state.answers.length
                ? totalResponseTime /
                    state.answers.length
                : 0;

        const isNewHighScore =
            state.score >
            stats.bestScore;

        stats.gamesPlayed++;

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
                state.bestRunStreak
            );

        if (state.isDaily) {
            updateDailyStreak();
        }

        saveStats();

        updateHomeStats();

        displayResults(
            accuracy,
            averageResponseTime,
            isNewHighScore
        );

        showScreen(
            elements.resultScreen
        );

        if (
            accuracy >= 80 ||
            isNewHighScore
        ) {
            launchConfetti();
        }

        playSound(
            accuracy >= 80
                ? "finishGood"
                : "finish"
        );
    }


    // --------------------------------------------------
    // RESULTS
    // --------------------------------------------------

    function displayResults(
        accuracy,
        averageTime,
        isNewHighScore
    ) {
        const missed =
            state.answers.filter(
                (answer) =>
                    !answer.correct
            );

        elements.resultBadge.textContent =
            state.isDaily
                ? "DAILY COMPLETE"
                : "RUN COMPLETE";

        elements.finalScore.textContent =
            state.score.toLocaleString();

        elements.newHighScore.classList.toggle(
            "hide",
            !isNewHighScore
        );

        elements.finalAccuracy.textContent =
            `${accuracy}%`;

        elements.correctSummary.textContent =
            `${state.correct} / ${state.questions.length} correct`;

        elements.finalStreak.textContent =
            state.bestRunStreak;

        elements.averageTime.textContent =
            `${averageTime.toFixed(1)}s`;

        elements.finalMode.textContent =
            MODES[
                state.runSettings.mode
            ].label;

        elements.finalCategory.textContent =
            state.isDaily
                ? "Daily mixed challenge"
                : `${CATEGORY_NAMES[
                    state.runSettings.category
                ]} category`;

        if (accuracy === 100) {
            elements.resultTitle.textContent =
                "Flawless.";

            elements.resultSubtitle.textContent =
                "Perfect accuracy. That one deserves another run.";
        } else if (accuracy >= 80) {
            elements.resultTitle.textContent =
                "That was strong.";

            elements.resultSubtitle.textContent =
                "You were locked in. Run it back and chase the perfect score.";
        } else if (accuracy >= 60) {
            elements.resultTitle.textContent =
                "You were right there.";

            elements.resultSubtitle.textContent =
                "A few answers separated you from a huge run. Review the misses and go again.";
        } else {
            elements.resultTitle.textContent =
                "Run it back.";

            elements.resultSubtitle.textContent =
                "Now you know what is coming. Review your misses and beat this score.";
        }

        displayAchievements(
            accuracy,
            averageTime,
            isNewHighScore
        );

        displayReview(missed);
    }


    // --------------------------------------------------
    // ACHIEVEMENTS
    // --------------------------------------------------

    function displayAchievements(
        accuracy,
        averageTime,
        isNewHighScore
    ) {
        const achievements = [];

        if (accuracy === 100) {
            achievements.push(
                "★ Perfect Run"
            );
        }

        if (state.bestRunStreak >= 5) {
            achievements.push(
                "🔥 Hot Streak"
            );
        }

        if (
            averageTime <= 6 &&
            state.correct >=
                Math.ceil(
                    state.questions.length *
                    0.6
                )
        ) {
            achievements.push(
                "⚡ Quick Draw"
            );
        }

        if (isNewHighScore) {
            achievements.push(
                "🏆 New High Score"
            );
        }

        if (state.isDaily) {
            achievements.push(
                "◉ Daily Finisher"
            );
        }

        if (
            state.runSettings.mode ===
            "blitz" &&
            accuracy >= 70
        ) {
            achievements.push(
                "⏱ Blitz Tested"
            );
        }

        if (
            achievements.length === 0
        ) {
            achievements.push(
                "✓ Run Complete"
            );
        }

        elements.achievementRow.innerHTML =
            "";

        achievements.forEach(
            (achievement) => {
                const chip =
                    document.createElement("span");

                chip.className =
                    "achievement-chip";

                chip.textContent =
                    achievement;

                elements.achievementRow.appendChild(
                    chip
                );
            }
        );
    }


    // --------------------------------------------------
    // REVIEW MISSED QUESTIONS
    // --------------------------------------------------

    function displayReview(missed) {
        elements.reviewList.innerHTML =
            "";

        elements.reviewList.classList.add(
            "hide"
        );

        elements.reviewToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        elements.reviewChevron.textContent =
            "＋";

        elements.reviewCount.textContent =
            `${missed.length} missed`;

        elements.reviewCard.classList.toggle(
            "hide",
            missed.length === 0
        );

        missed.forEach(
            (item, index) => {
                const card =
                    document.createElement("div");

                card.className =
                    "review-item";

                const label =
                    document.createElement("span");

                label.textContent =
                    `MISS ${String(
                        index + 1
                    ).padStart(2, "0")} · ` +
                    CATEGORY_NAMES[
                        item.category
                    ].toUpperCase();

                const question =
                    document.createElement("strong");

                question.textContent =
                    item.question;

                const selected =
                    document.createElement("p");

                selected.textContent =
                    `Your answer: ${item.selected}`;

                const correct =
                    document.createElement("p");

                correct.className =
                    "review-correct";

                correct.textContent =
                    `Correct answer: ${item.answer}`;

                const explanation =
                    document.createElement("p");

                explanation.textContent =
                    item.explanation;

                card.append(
                    label,
                    question,
                    selected,
                    correct,
                    explanation
                );

                elements.reviewList.appendChild(
                    card
                );
            }
        );
    }


    // --------------------------------------------------
    // REVIEW TOGGLE
    // --------------------------------------------------

    function toggleReview() {
        const isOpen =
            elements.reviewToggle.getAttribute(
                "aria-expanded"
            ) === "true";

        elements.reviewToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        elements.reviewList.classList.toggle(
            "hide",
            isOpen
        );

        elements.reviewChevron.textContent =
            isOpen
                ? "＋"
                : "−";
    }


    // --------------------------------------------------
    // HOME / QUIT
    // --------------------------------------------------

    function returnHome() {
        clearInterval(state.timerId);

        showScreen(
            elements.homeScreen
        );

        updateHomeStats();
    }


    function quitRun() {
        const confirmed =
            window.confirm(
                "End this run and return to the home screen?"
            );

        if (confirmed) {
            returnHome();
        }
    }


    // --------------------------------------------------
    // SOUND
    // --------------------------------------------------

    let audioContext = null;


    function playSound(type) {
        if (!stats.sound) {
            return;
        }

        try {
            if (!audioContext) {
                const AudioContextClass =
                    window.AudioContext ||
                    window.webkitAudioContext;

                if (!AudioContextClass) {
                    return;
                }

                audioContext =
                    new AudioContextClass();
            }

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            const sounds = {
                start: {
                    frequency: 440,
                    duration: 0.07
                },

                correct: {
                    frequency: 700,
                    duration: 0.09
                },

                wrong: {
                    frequency: 180,
                    duration: 0.12
                },

                finish: {
                    frequency: 380,
                    duration: 0.10
                },

                finishGood: {
                    frequency: 820,
                    duration: 0.12
                }
            };

            const sound =
                sounds[type] ||
                sounds.start;

            oscillator.type =
                type === "wrong"
                    ? "triangle"
                    : "sine";

            oscillator.frequency.value =
                sound.frequency;

            gain.gain.setValueAtTime(
                0.0001,
                audioContext.currentTime
            );

            gain.gain.exponentialRampToValueAtTime(
                0.05,
                audioContext.currentTime +
                    0.01
            );

            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                audioContext.currentTime +
                    sound.duration
            );

            oscillator.connect(gain);

            gain.connect(
                audioContext.destination
            );

            oscillator.start();

            oscillator.stop(
                audioContext.currentTime +
                    sound.duration +
                    0.02
            );
        } catch (error) {
            console.warn(
                "QuizForge sound unavailable.",
                error
            );
        }
    }


    function toggleSound() {
        stats.sound =
            !stats.sound;

        saveStats();

        updateHomeStats();

        if (stats.sound) {
            playSound("start");
        }
    }


    // --------------------------------------------------
    // CONFETTI
    // --------------------------------------------------

    function launchConfetti() {
        const colors = [
            "#00d4ff",
            "#44ffd2",
            "#ffb347",
            "#ff7b54",
            "#f6e27a",
            "#ffffff"
        ];

        elements.confetti.innerHTML =
            "";

        for (let i = 0; i < 70; i++) {
            const piece =
                document.createElement("span");

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

            elements.confetti.appendChild(
                piece
            );
        }

        setTimeout(
            () => {
                elements.confetti.innerHTML =
                    "";
            },
            4200
        );
    }


    // --------------------------------------------------
    // TOAST
    // --------------------------------------------------

    let toastTimer = null;


    function showToast(message) {
        clearTimeout(toastTimer);

        elements.toast.textContent =
            message;

        elements.toast.classList.add(
            "show"
        );

        toastTimer =
            setTimeout(
                () => {
                    elements.toast.classList.remove(
                        "show"
                    );
                },
                2200
            );
    }


    // --------------------------------------------------
    // SHARE
    // --------------------------------------------------

    async function shareResult() {
        const accuracy =
            Math.round(
                (
                    state.correct /
                    state.questions.length
                ) * 100
            );

        const message =
            `I scored ${state.score.toLocaleString()} points ` +
            `with ${accuracy}% accuracy on QuizForge. ` +
            `Can you beat it?`;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "QuizForge Result",
                    text: message,
                    url: window.location.href
                });

                return;
            }

            if (
                navigator.clipboard &&
                navigator.clipboard.writeText
            ) {
                await navigator.clipboard.writeText(
                    `${message} ${window.location.href}`
                );

                showToast(
                    "Result copied to clipboard."
                );

                return;
            }

            showToast(
                "Sharing is not supported by this browser."
            );
        } catch (error) {
            if (
                error.name !== "AbortError"
            ) {
                console.warn(
                    "Share failed.",
                    error
                );

                showToast(
                    "Could not share automatically."
                );
            }
        }
    }


    // --------------------------------------------------
    // BUTTON EVENTS
    // --------------------------------------------------

    elements.startCustomButton.addEventListener(
        "click",
        () => {
            startRun(false);
        }
    );


    elements.dailyButton.addEventListener(
        "click",
        () => {
            startRun(true);
        }
    );


    elements.jumpToBuilder.addEventListener(
        "click",
        () => {
            const builder =
                document.getElementById(
                    "builder"
                );

            if (builder) {
                builder.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    );


    elements.brandButton.addEventListener(
        "click",
        returnHome
    );


    elements.soundToggle.addEventListener(
        "click",
        toggleSound
    );


    elements.quitButton.addEventListener(
        "click",
        quitRun
    );


    elements.nextButton.addEventListener(
        "click",
        nextQuestion
    );


    elements.playAgainButton.addEventListener(
        "click",
        () => {
            startRun(
                state.isDaily
            );
        }
    );


    elements.newChallengeButton.addEventListener(
        "click",
        returnHome
    );


    elements.shareButton.addEventListener(
        "click",
        shareResult
    );


    elements.reviewToggle.addEventListener(
        "click",
        toggleReview
    );


    // --------------------------------------------------
    // KEYBOARD CONTROLS
    // --------------------------------------------------

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                elements.quizScreen.classList.contains(
                    "hide"
                )
            ) {
                return;
            }

            if (
                !state.answered &&
                ["1", "2", "3", "4"].includes(
                    event.key
                )
            ) {
                const buttons =
                    elements.options.querySelectorAll(
                        ".answer-button"
                    );

                const index =
                    Number(event.key) - 1;

                const button =
                    buttons[index];

                if (
                    button &&
                    !button.disabled
                ) {
                    button.click();
                }
            }

            if (
                state.answered &&
                event.key === "Enter" &&
                !elements.nextButton.disabled
            ) {
                elements.nextButton.click();
            }
        }
    );


    // --------------------------------------------------
    // INITIALIZE APP
    // --------------------------------------------------

    updateHomeStats();

    updateLaunchSummary();

    console.log(
        "QuizForge initialization complete. Buttons are ready."
    );
});
