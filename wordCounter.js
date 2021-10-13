//Function to count number of words inputted in a form in realtime 

const countWords = (e) => {
    const count = e.target.value
    const countWords = (count) => {
      if (count.length === 0) {
        return 0
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, '')
        count = count.replace(/[ ]{2,}/gi, ' ')
        count = count.replace(/\n /, '\n')
        return count.split(' ').length
      }
    }
  }
