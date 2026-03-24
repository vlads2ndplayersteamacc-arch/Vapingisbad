function showFact() {
    const facts = [
        "Nicotine can change brain development in teens.",
        "Some vapes contain heavy metals.",
        "Vaping can lead to long-term addiction.",
        "It affects focus, mood, and memory."
    ];

    const random = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").innerText = random;
}

function quiz(answer) {
    if (answer === "yes") {
        document.getElementById("quizResult").innerText =
            "You may already be developing dependence.";
    } else {
        document.getElementById("quizResult").innerText =
            "Stay aware. It can start anytime.";
    }
}

function scrollToSection() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}
