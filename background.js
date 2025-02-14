const blobColors = ["#414833", "#414833", "#656D4A",]; // ✅ Only these colors

// Function to get a new random color (must be different from current color)
function getRandomColor(currentColor) {
    let newColor;
    do {
        newColor = blobColors[Math.floor(Math.random() * blobColors.length)];
    } while (newColor === currentColor);
    return newColor;
}

// Function to smoothly change blob colors
function updateBlobColors() {
    const blobs = document.querySelectorAll(".blob");

    blobs.forEach(blob => {
        const currentColor = blob.style.backgroundColor;
        const newColor = getRandomColor(currentColor);
        blob.style.transition = "background 3s ease-in-out"; // ✅ Smooth transition
        blob.style.background = newColor;
    });
}

// Update colors every 6 seconds
setInterval(updateBlobColors, 6000);

// Initial color setup
updateBlobColors();
