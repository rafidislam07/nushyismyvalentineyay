const messages = [
    "are you sure nushy?",
    "yes bolle kintu fuchka khawabo?",
    "are you SURE?",
    "BABE PLSPLSPLSPLSPLSPLS",
    "Just think about it!",
    "na bolle kintu ami kanna korbo",
    "asholei kintu kanna korbo",
    "EXCUSE ME",
    "OK FINE, ILL TAKE AAIRAH BABY INSTEAD",
    "jkjkjkjk say yes plsplpslpslsplpsls"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}