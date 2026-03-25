document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const newsInput = document.getElementById('newsInput');
    const checkBtn = document.getElementById('checkBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultSection = document.getElementById('resultSection');
    const loader = document.getElementById('loader');
    const resultMessage = document.getElementById('resultMessage');

    // --- CHECK NEWS LOGIC ---
    checkBtn.addEventListener('click', () => {
        const text = newsInput.value.trim();

        // Basic Validation
        if (!text) {
            alert('Please enter or paste some news content to check.');
            newsInput.focus();
            return;
        }

        // 1. Prepare UI for loading
        resultSection.classList.remove('hidden');
        loader.classList.remove('hidden');
        resultMessage.classList.add('hidden');
        resultMessage.className = 'result-message hidden'; // Reset classes
        resultMessage.innerHTML = '';
        
        // Disable button to prevent multiple clicks
        checkBtn.disabled = true;
        checkBtn.style.opacity = '0.6';
        checkBtn.style.cursor = 'not-allowed';

        // 2. Simulate AI Processing Delay (2.5 seconds)
        setTimeout(() => {
            // Re-enable button
            checkBtn.disabled = false;
            checkBtn.style.opacity = '1';
            checkBtn.style.cursor = 'pointer';
            
            // Hide Loader
            loader.classList.add('hidden');

            // 3. Determine Result (Randomized for simulation purposes)
            // In a real app, you would make a fetch() call to a backend API here.
            const isRealNews = Math.random() > 0.5;

            // 4. Update UI with Results
            resultMessage.classList.remove('hidden');
            
            if (isRealNews) {
                resultMessage.innerHTML = '<i class="fas fa-check-circle"></i> Highly Likely: Real News';
                resultMessage.classList.add('real-news');
            } else {
                resultMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Warning: Fake News Detected';
                resultMessage.classList.add('fake-news');
            }
        }, 2500); 
    });

    // --- RESET LOGIC ---
    resetBtn.addEventListener('click', () => {
        newsInput.value = '';
        resultSection.classList.add('hidden');
        loader.classList.add('hidden');
        resultMessage.classList.add('hidden');
        resultMessage.className = 'result-message hidden';
        newsInput.focus();
    });

    // --- UPLOAD LOGIC (Simulation) ---
    uploadBtn.addEventListener('click', () => {
        // Simulating a file picker dialog
        alert('In a fully functional app, this would open your file explorer to upload a .txt or .pdf file. For now, try pasting text directly!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const newsInput = document.getElementById('newsInput');
    const checkBtn = document.getElementById('checkBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultSection = document.getElementById('resultSection');
    const loader = document.getElementById('loader');
    const resultMessage = document.getElementById('resultMessage');

    // --- CHECK NEWS LOGIC ---
    checkBtn.addEventListener('click', () => {
        const text = newsInput.value.trim();

        // Basic Validation
        if (!text) {
            alert('Please enter or paste some news content to check.');
            newsInput.focus();
            return;
        }

        // 1. Prepare UI for loading
        resultSection.classList.remove('hidden');
        loader.classList.remove('hidden');
        resultMessage.classList.add('hidden');
        resultMessage.className = 'result-message hidden'; // Reset classes
        resultMessage.innerHTML = '';
        
        // Disable button to prevent multiple clicks
        checkBtn.disabled = true;
        checkBtn.style.opacity = '0.6';
        checkBtn.style.cursor = 'not-allowed';

        // 2. Simulate AI Processing Delay (2.5 seconds)
        setTimeout(() => {
            // Re-enable button
            checkBtn.disabled = false;
            checkBtn.style.opacity = '1';
            checkBtn.style.cursor = 'pointer';
            
            // Hide Loader
            loader.classList.add('hidden');

            // 3. Determine Result (Randomized for simulation purposes)
            // In a real app, you would make a fetch() call to a backend API here.
            const isRealNews = Math.random() > 0.5;

            // 4. Update UI with Results
            resultMessage.classList.remove('hidden');
            
            if (isRealNews) {
                resultMessage.innerHTML = '<i class="fas fa-check-circle"></i> Highly Likely: Real News';
                resultMessage.classList.add('real-news');
            } else {
                resultMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Warning: Fake News Detected';
                resultMessage.classList.add('fake-news');
            }
        }, 2500); 
    });

    // --- RESET LOGIC ---
    resetBtn.addEventListener('click', () => {
        newsInput.value = '';
        resultSection.classList.add('hidden');
        loader.classList.add('hidden');
        resultMessage.classList.add('hidden');
        resultMessage.className = 'result-message hidden';
        newsInput.focus();
    });

    // --- UPLOAD LOGIC (Simulation) ---
    uploadBtn.addEventListener('click', () => {
        // Simulating a file picker dialog
        alert('In a fully functional app, this would open your file explorer to upload a .txt or .pdf file. For now, try pasting text directly!');
    });
});
