/*saya mengerjakan tugas ini sendiri tanpa melakukan kecurangan seperti menggunakan,
  mendupliaksi kode perogram kode program yang ada. jia saya melakukan kecurangan dalam 
  perngerjaan tugas ini maka saya siap menerima sanksi atau hukuman dari dari dosen mata 
  kuliah dan tuhan / allah  swt*/

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