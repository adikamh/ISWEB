function hitungTotalBayar(items) {
    let total = 0;
    items.forEach(item => {
        total += item.harga * item.jumlah;
    });
    return total;
}

function hitungPotongan(total) {
    if (total > 50000) {
        return total * 0.1;
    }
    return 0;
}

function hitungKalkulasiMurni(a, b, operator) {
    let hasil = 0;
    a = parseFloat(a);
    b = parseFloat(b);

    if (operator === '+') hasil = a + b;
    else if (operator === '-') hasil = a - b;
    else if (operator === '*') hasil = a * b;
    else if (operator === '/') hasil = b !== 0 ? a / b : "Error";
    else if (operator === '%') hasil = b !== 0 ? a % b : "Error";
    else if (operator === '^') hasil = Math.pow(a, b);
    else if (operator === '√') hasil = a >= 0 ? Math.sqrt(a) : "Error";
    else if (operator === 'log') hasil = a > 0 ? Math.log10(a) : "Error";
    else if (operator === 'ln') hasil = a > 0 ? Math.log(a) : "Error";
    else if (operator === 'sin') hasil = Math.sin(a * Math.PI / 180);
    else if (operator === 'cos') hasil = Math.cos(a * Math.PI / 180);
    else if (operator === 'tan') hasil = Math.tan(a * Math.PI / 180);
    else if (operator === 'cot') hasil = 1 / Math.tan(a * Math.PI / 180);
    else if (operator === 'sec') hasil = 1 / Math.cos(a * Math.PI / 180);
    else if (operator === 'csc') hasil = 1 / Math.sin(a * Math.PI / 180);
    else if (operator === 'factorial') {
        if (a < 0 || !Number.isInteger(a)) {
            hasil = "Error";
        } else {
            hasil = 1;
            for (let i = 2; i <= a; i++) {
                hasil *= i;
            }
        }
    }
    else hasil = "Operator tidak valid";
    return hasil;
}