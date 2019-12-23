function testXO(str) {
    const countLetter = countLetterInSentence(str);

    return countLetter('x') == countLetter('o');
}

let countLetterInSentence = (sentence) => {
	const savedSentence = sentence.toLowerCase();

	return (letter) => {
 		return (savedSentence.match(new RegExp(`${letter}`,'g')) || []).length
  };
}

// Case 0
// Non equal x's and o's
// be false
console.log(testXO('xxxooxoxoxox'));

// Case 1
// Equal x's and o's
// be true
console.log(testXO('xoxo'));

// Case 2
// Equal x's and o's but with uppercase chars
// be true
console.log(testXO('xoXo'));

// Case 3
// Non x's or o's
// be true
console.log(testXO('zzpp'));
