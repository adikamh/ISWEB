// Fungsi navigasi antar halaman
function showPage(pageId) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('calc-page').style.display = 'none';

    if (pageId === 'home') {
        document.getElementById('home-page').style.display = 'block';
    } else if (pageId === 'menu') {
        alert("Hai, Selamat datang di Sistem Sederhana");
        alert("Input Jumlah Pesanan agar di hitung otomatis oleh sistem");
        document.getElementById('menu-page').style.display = 'block';
    } else if (pageId === 'calculator') {
        document.getElementById('calc-page').style.display = 'block';
    }
}

function shout() {
    alert("ITENAS: I s A Good Start!");
}

function calculateTotal() {
    const p1 = 12000, p2 = 10000, p3 = 15000;
    
    let q1 = parseInt(document.getElementById('qty1').value) || 0;
    let q2 = parseInt(document.getElementById('qty2').value) || 0;
    let q3 = parseInt(document.getElementById('qty3').value) || 0;

    let total = (q1 * p1) + (q2 * p2) + (q3 * p3);
    let diskon = 0;

    if (total > 50000) {
        diskon = total * 0.1;
    }

    let bayar = total - diskon;

    document.getElementById('total').value = total;
    document.getElementById('discount').value = diskon;
    document.getElementById('pay').value = bayar;
}

function resetForm() {
    document.getElementById('qty1').value = 0;
    document.getElementById('qty2').value = 0;
    document.getElementById('qty3').value = 0;
    calculateTotal();
}

let display = document.getElementById('calc-display');

function appendCalc(val) {
    document.getElementById('calc-display').value += val;
}

function clearCalc() {
    document.getElementById('calc-display').value = "";
}

function solveCalc() {
    try {
        let res = eval(document.getElementById('calc-display').value);
        document.getElementById('calc-display').value = res;
    } catch {
        alert("Input tidak valid");
        clearCalc();
    }
}