const imageInput = document.getElementById('image-input');
const outputDiv = document.getElementById('output');


imageInput.addEventListener('change', async (event) => {
const file = event.target.files[0];
    if (!file) return;
    outputDiv.textContent = 'Processing image...';

    try {
    const worker = await Tesseract.createWorker('eng');
    const response = await worker.recognize(file);

    outputDiv.textContent = response.data.text;
                
    await worker.terminate();
    } 
    catch (error) {
        console.error(error);
        outputDiv.textContent = 'Error processing image.';
}});



function copyText() {
const save = document.getElementById("save-btn");
const textarea = document.getElementById("output");

navigator.clipboard.writeText(textarea.value)
    .then(() => {
    save.style.color = "#5da042"
    save.textContent = '✔';
    });

}

document.getElementById('download').addEventListener('click', () => { {
    const dlbtn = document.getElementById('download');
    const textarea = document.getElementById('output').value;
    const blob = new Blob([textarea], { type: 'text/plain;charset=utf-8' });
    

    const fileUrl = URL.createObjectURL(blob);

    const hiddenLink = document.createElement('a');
    hiddenLink.href = fileUrl;
    hiddenLink.download = 'my-text-file.txt'; 
    hiddenLink.style.display = 'none';

    document.body.appendChild(hiddenLink);
    hiddenLink.click();
    document.body.removeChild(hiddenLink);

    URL.revokeObjectURL(fileUrl);
        download.style.color = "#5da042"
    download.textContent = '✔';
}});

function reloadPage() {
    window.location.reload();
}