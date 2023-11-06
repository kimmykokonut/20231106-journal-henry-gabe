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

Entry.prototype.getTeaser = function () {
    const sentences = this.body.split(".");
    if (sentences[0].split(" ").length > 8) {
        const shortened = sentences[0].split(" ").slice(0, 8).join(" ");
        return shortened + "...";
    } else {
        return sentences[0] + "...";
    }
};