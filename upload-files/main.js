const fileUrl = document.getElementById('upload-file')
const image = document.getElementById('image')

const readFile = (fileL) => {
    let file = fileL.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        image.setAttribute('src', reader.result)
    };

    reader.onerror = function () {
        console.log(reader.error);
    };

}



fileUrl.addEventListener('change', (e) => {
    readFile(e.target)
})