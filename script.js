// Get all the elements
let text = document.getElementById('text');
let count = document.getElementById('count');
let resultBox = document.getElementById('result-box');

// Buttons
let submitButton = document.getElementById('submit');
let copyButton = document.getElementById('copy-button');

// Submit button click event
submitButton.onclick = (e) => {
    // Check if the text & count are empty
    if (text.value == "") {
        alert("Cannot have empty fields.");
    } else {
            if (count.value > 100 || count.value <= 0) {
                alert("The count must be between 1 and 100.");
            } else {
            // Making the text empty (glich solve)
            resultBox.innerHTML = "";
            // Looping the text to make the repeat
            for (let i = 0; i < parseInt(count.value); i++) {
                resultBox.innerHTML += `${text.value} `;
            }
        }
    }
};

// Copy button click event
copyButton.onclick = (e) => {
    // Copy the result
    navigator.clipboard.writeText(resultBox.innerHTML);
    alert("Copied to clipboard!");
};
