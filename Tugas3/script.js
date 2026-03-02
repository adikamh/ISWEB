

const btnSimpan = document.getElementById('btnSimpan');
const bgInput = document.getElementById('bgInput');
const textInput = document.getElementById('textInput');
const body = document.body;

function updateColors() {
    const selectedBg = bgInput.value;
    const selectedText = textInput.value;
    body.style.backgroundColor = selectedBg;
    body.style.color = selectedText;

    console.log(`Warna diubah! BG: ${selectedBg}, Teks: ${selectedText}`);
}
btnSimpan.addEventListener('click', updateColors);