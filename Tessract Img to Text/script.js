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