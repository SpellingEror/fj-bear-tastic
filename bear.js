const bearDisplay = document.getElementById('bearDisplay');

const bearTranslations = [
    "Bear",       // English
    "Oso",        // Spanish
    "Ours",       // French
    "Bär",        // German
    "Orso",       // Italian
    "Медведь",    // Russian
    "熊",         // Chinese
    "くま",       // Japanese
    "곰",         // Korean
    "Urso",       // Portuguese
    "دُبّ"        // Arabic
];

function changeWord(word) {
    return new Promise(async resolve => {
        let currentWord = bearDisplay.textContent;
        
        // Remove letters
        while (currentWord.length > 0) {
            currentWord = currentWord.slice(0, -1);
            bearDisplay.innerHTML = currentWord || "&nbsp;";
            await new Promise(r => setTimeout(r, 200));
        }
        
        // Add letters
        for (let i = 0; i < word.length; i++) {
            bearDisplay.textContent += word[i];
            await new Promise(r => setTimeout(r, 200));
        }
        
        resolve();
    });
}

(async function loopChange() {
    for (let word of bearTranslations) {
        await changeWord(word);
        await new Promise(r => setTimeout(r, 1000)); 
    }
    loopChange();
})();