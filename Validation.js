export const isVoid = (value) => {
  const trimmedVal = value.trim()
  if (!trimmedVal && trimmedVal.length === 0) {
    return true
  }
  return false
}

const validationProps = (error, errorMessage) => ({
  error,
  errorMessage,
})

const validateName = (value, message, validLength = 3) => {
  if (isVoid(value) || value.length < validLength) {
    return validationProps(true, message)
  }
  return validationProps(false, '')
}

const validateEmail = (value, message) => {
  /* eslint-disable */
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(String(value).toLowerCase())) return validationProps(false, '')
  return validationProps(true, message)
  /* eslint-enable */
}

const validatePassword = (value, message, validLength = 6) => {
  if (isVoid(value) || value.length < validLength) {
    return validationProps(true, message)
  }
  return validationProps(false, '')
}

const validateMobile = (value, message) => {
  if (/^\d{10}$/.test(value)) {
    return validationProps(false, '')
  }
  return validationProps(true, message)
}

const validateOption = (value, message) => {
  if (isVoid(value) || !value) {
    return validationProps(true, message)
  }
  return validationProps(false, '')
}
