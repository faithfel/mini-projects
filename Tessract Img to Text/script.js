const imageInput = document.getElementById('image-input');
const outputDiv = document.getElementById('output');

        imageInput.addEventListener('change', async (event) => {
            const file = event.target.files[0];
            if (!file) return;

            outputDiv.textContent = 'Processing image... Please wait.';

            try {
                // Initialize the worker with English language data
                const worker = await Tesseract.createWorker('eng');
                
                // Recognize text from the uploaded file
                const response = await worker.recognize(file);
                
                // Display the text result
                outputDiv.textContent = response.data.text;
                
                // Terminate worker to free up memory
                await worker.terminate();
            } catch (error) {
                console.error(error);
                outputDiv.textContent = 'Error processing image.';
            }
        });