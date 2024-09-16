function updateColor(tone, color) {
    let hex;
    if (color === 'green') {
        hex = `hsl(146, 100%, ${tone}%)`; // Verde en HSL
        document.getElementById('green-stripe').style.backgroundColor = hex;
        document.getElementById('green-code').textContent = hex;
    } else if (color === 'red') {
        hex = `hsl(0, 100%, ${tone}%)`; // Rojo en HSL
        document.getElementById('red-stripe').style.backgroundColor = hex;
        document.getElementById('red-code').textContent = hex;
    }
}

document.getElementById('green-tone').addEventListener('input', function() {
    updateColor(this.value, 'green');
});

document.getElementById('red-tone').addEventListener('input', function() {
    updateColor(this.value, 'red');
});

