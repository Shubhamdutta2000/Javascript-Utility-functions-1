export const downloadFile = async (data, fileName) => {
  const fileURL = window.URL.createObjectURL(new Blob([data]))
  const fileLink = document.createElement('a')
  fileLink.href = fileURL
  fileLink.setAttribute('download', fileName)
  document.body.appendChild(fileLink)

  fileLink.click()
  document.body.removeChild(fileLink)
}
