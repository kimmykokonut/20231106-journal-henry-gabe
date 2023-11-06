import Entry from './../src/journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { title } from 'process';


const form = document.querySelector('form#entry-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const titleInput = document.getElementById('title').value;
    const journalInput = document.getElementById('journal-body').value;
    const entryInput = new Entry(titleInput, journalInput);
    const entryWordCount = entryInput.wordCount();
    const entryVowelCount = entryInput.vowelCount();
    const entryConsCount = entryInput.consCount();
    const entryTeaser = entryInput.getTeaser();
    const divResponse = document.getElementById('response');
    const pWordCount = document.createElement('p');
    const pVowelCount = document.createElement("p");
    const pConsCount = document.createElement('p');
    const entryButton = document.createElement("button");
    divResponse.innerHTML = "";
    entryButton.setAttribute("class", "btn btn-primary m-3");
    entryButton.append(entryTeaser);
    pWordCount.append("Number of words in your entry: " + entryWordCount);
    pVowelCount.append("Number of vowels: " + entryVowelCount);
    pConsCount.append("Number of Consonants: " + entryConsCount);
    divResponse.append(pWordCount, pVowelCount, pConsCount);
    document.getElementById("entries").append(entryButton);
    entryButton.addEventListener("click", function() {
        const divWholeEntry = document.getElementById('showWhole');
        const h3Entry = document.createElement("h3");
        const pEntry = document.createElement("p");
        divWholeEntry.setAttribute("class", "card w-25 mx-auto p-1")
        h3Entry.append(titleInput);
        pEntry.append(journalInput);
        divWholeEntry.append(h3Entry, pEntry);
    });
});

// function showTeaser(titleInput, journalInput) {
//     const divWholeEntry = document.getElementById('showWhole');
//     const h3Entry = document.createElement("h3");
//     const pEntry = document.createElement("p");
//     h3Entry.append(titleInput);
//     pEntry.append(journalInput);
//     divWholeEntry.append(h3Entry, pEntry);
// }