export const SplitSentence = (sentence) => {
    var middle = Math.floor(sentence.length / 2);
    var before = sentence.lastIndexOf(' ', middle);
    var after = sentence.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }

    return {
        firstPart: sentence.substr(0, middle),
        secondPart: sentence.substr(middle + 1)
    };
};