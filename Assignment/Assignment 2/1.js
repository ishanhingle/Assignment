function findWordOccurrences(text, wordToFind) {
    const foundPositions = [];
    let searchIndex =-1;
    while (true) {
    searchIndex + 1
    searchIndex = text.indexOf(wordToFind, searchIndex + 1);
    if (searchIndex < 0) {
    break;
    }
    foundPositions.push(searchIndex);
    }
    return foundPositions;
    }
    const sentence = 'Today is a good day to go out and play cricket, and it is  a good day for a picnic.';
    const searchTerm = 'is';
    console.log(findWordOccurrences(sentence, searchTerm));