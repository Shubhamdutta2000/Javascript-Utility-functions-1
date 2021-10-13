function findNextPerfectSquare(square) {
    return Math.sqrt(square)%1? -1 : Math.pow(Math.sqrt(square)+1,2);
  }

  console.log(findNextPerfectSquare(9))
  // Output will be 16