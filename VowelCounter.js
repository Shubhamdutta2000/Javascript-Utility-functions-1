function getVowelCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  console.log(getVowelCount("souvik"))
//   It will return 4
