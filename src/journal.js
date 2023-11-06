export default function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.wordCount = function () {
    return this.body.split(" ").length;
};
Entry.prototype.vowelCount = function () {
    let vowels = 0;
    this.body.split("").forEach(function (letter) {
        if (/[aeiou]/gi.test(letter)) {
            vowels++;
        }
    });
    return vowels;
};

Entry.prototype.consCount = function () {
    let matches = this.body.match(/[^aeiou\s]/gi);
    return matches ? matches.length : 0;
};

// Entry.prototype.getTeaser = function () {
//     return "I can't answer that yet!";
// };