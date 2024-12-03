
function greetUser(Dylan) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `Hello, ${name}!`;
}


function changeMessage() {
    const messageParagraph = document.getElementById("message");
    messageParagraph.innerText = "Hello, World!";
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `Result: ${num1 + num2}`;
}


function updateTitle() {
    const newTitle = document.getElementById("titleInput").value;
    const titleElement = document.getElementById("title");
    titleElement.innerText = newTitle;
}


function concatenateStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const combinedText = document.getElementById("combinedText");
    combinedText.innerText = `${string1} ${string2}`;
}

document.getElementById("changeBgBtn").addEventListener("click", function() {
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = "blue";
});
