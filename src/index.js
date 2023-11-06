import Entry from './../src/journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


const form = document.querySelector('form#entry-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const titleInput = document.getElementById('title').value;
    const journalInput = document.getElementById('journal-body').value;
    const entryInput = new Entry(titleInput, journalInput);
    const entryWordCount = entryInput.wordCount();
    // const entryVowelCount = entryInput.vowelCount();
    // const entryConsCount = entryInput.consCount();

    const divResponse = document.getElementById('response');
    const pWordCount = document.createElement('p');
    console.log(entryWordCount);
    pWordCount.append("Number of words in your entry: " + entryWordCount);
    console.log(pWordCount);
    divResponse.append(pWordCount);
});

