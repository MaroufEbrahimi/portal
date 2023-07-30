export function downloadFileFromApi(url) {
  let fileName = url.split("/")
  fileName = fileName[fileName.length - 1]
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
}
