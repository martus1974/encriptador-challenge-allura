document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
