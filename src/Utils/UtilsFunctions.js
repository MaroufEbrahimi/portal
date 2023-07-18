const downloadFile = (fileUrl) => {
    fetch("Ali-herawi-resume.pdf").then(res => {
        res.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.download = "Ali-herawi-resume.pdf"
            fileLink.click();
        })
    })
}


export function downloadFileFromApi(url) {
    let fileName = url.split("/")
    fileName = fileName[fileName.length - 1];
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}