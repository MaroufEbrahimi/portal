export function setCookie(name, value, daysToLive = 1) {
  let cookie = `${name}=${encodeURIComponent(value)}`
  if (daysToLive !== null) {
    cookie += `; max-age=${daysToLive * 60 * 60 * 24 * 5}`
  }
  document.cookie = cookie
}

export function removeAllCookies() {
  document.cookie.split("; ").forEach((cookie) => {
    const theEqualIndex = cookie.indexOf("=")
    const name =
      theEqualIndex > -1 ? cookie.substring(0, theEqualIndex) : cookie
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
  })
}

// Return the document's cookies as a Map object.
// Assume that cookie values are encoded with encodeURIComponent().
export function getCookies() {
  let cookies = new Map() // The object we will return
  let all = document.cookie // Get all cookies in one big string
  let list = all.split("; ") // Split into individual name / value pairs
  for (let cookie of list) {
    // For each cookie in that list
    if (!cookie.includes("=")) continue // Skip if there is no = sign
    let p = cookie.indexOf("=") // Find the first = sign
    let name = cookie.substring(0, p) // Get cookie name
    let value = cookie.substring(p + 1) // Get cookie value
    value = decodeURIComponent(value) // Decode the value
    cookies.set(name, value) // Remember cookie name and value
  }
  return cookies
}

export function getCookie(key) {
  return getCookies().get(key)
}
