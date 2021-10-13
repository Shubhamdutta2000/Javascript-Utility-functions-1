// This is a utility function primarily to encode any file into base64

// the param file can be any file (e.g - picture or image file)
export const fileToBase64Encoding = (testFile) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(testFile);
    fileReader.onload = function (e) {
     return e.target.result;
 };
 };