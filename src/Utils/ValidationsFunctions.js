export const validationFuncations = {
  nameValidation: (name) => {
    if (name.length > 2) {
      return [true, ""]
    } else {
      return [false, "invalid name"]
    }
  },
  emailValidation: (email) => {
    // don't forget to find a better regex
    let pattern = /([a-z0-9_-]+)@([\da-z-]+)([a-z\.]{2,6})/gi
    if (pattern.test(email)) {
      return [true, ""]
    } else {
      return [false, "invalid email"]
    }
  },
  dobValidation: (date) => {
    const dateObject = new Date(date)
    const currentDate = new Date()
    let isValid =
      currentDate.getFullYear() - dateObject.getFullYear() >= 18 ? true : false
    if (isValid) {
      return [true, ""]
    } else {
      return [false, "the age should be 18 or higher"]
    }
  },
  genderValidation: (value) => {
    if (value != null) {
      value = value.toLowerCase()
    }

    if (value == "male" || value == "female") {
      return [true, ""]
    } else {
      return [false, "select the gender"]
    }
  },

  passwordValidation: (password) => {
    const isValid = password.length > 5 ? true : false
    if (isValid) {
      return [true, ""]
    } else {
      return [false, "invalid password"]
    }
  },
  repeatPass: (password, repeatPass) => {
    if (password == repeatPass && password.length > 5) {
      return [true, ""]
    } else {
      return [false, "passwords are not match!"]
    }
  },
}
