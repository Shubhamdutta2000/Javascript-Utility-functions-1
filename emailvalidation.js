function validateEmail (emailAddress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

let emailAddress = "test@gmail.com";
console.log(validateEmail(emailAddress));