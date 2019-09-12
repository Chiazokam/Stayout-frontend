/**
 * @description - Changes the word to lower case and remoes all white space
 * @param {string} word
 * @returns {string} word
 */
const makeLowerCase = (word) => {
  const newWord = word.replace(/\s/g, '');
  return newWord.toLowerCase();
};

export default makeLowerCase;
