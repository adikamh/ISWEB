$(document).ready(function() {
    let headerHtml = '';
    for(let i=0; i<6; i++) {
        headerHtml += '<div class="baris-banner"></div>';
    }
    $(".bagian-header").html(headerHtml);

    tampilkanHome();

    $("#homeLink").click(function(e) {
        e.preventDefault();
        tampilkanHome();
    });

    $("#menuLink").click(function(e) {
        e.preventDefault();
        alert("Input Jumlah Pesanan agar dihitung otomatis oleh sistem");
        tampilkanMenuMakanan();
    });

    $("#calculatorLink").click(function(e) {
        e.preventDefault();
        tampilkanKalkulator();
    });

    function tampilkanHome() {
        let konten = `
            <div style="display: flex; align-items: center; margin-top: 20px;">
                <span style="margin-right: 20px; font-size: 18px;">klik button disampiing >></span>
                <button class="btn-shout" onclick="alert('Selamat datang di Sistem Sederhanaku')">Shout</button>
            </div>
        `;
        $("#mainContent").html(konten);
    }

    function tampilkanMenuMakanan() {
        let konten = `
        <div class="wadah-menu-flex">
            <table class="tabel-menu">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Makanan/Minuman</th>
                        <th>Harga</th>
                        <th>Pesan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">1</td>
                        <td>Bakso Istimewa</td>
                        <td>@ Rp 12000</td>
                        <td><input type="number" class="qty-input" data-harga="12000" min="0" value="0"></td>
                    </tr>
                    <tr>
                        <td align="center">2</td>
                        <td>Soto Spesial</td>
                        <td>@ Rp 10000</td>
                        <td><input type="number" class="qty-input" data-harga="10000" min="0" value="0"></td>
                    </tr>
                    <tr>
                        <td align="center">3</td>
                        <td>Mie Ayam Super</td>
                        <td>@ Rp 15000</td>
                        <td><input type="number" class="qty-input" data-harga="15000" min="0" value="0"></td>
                    </tr>
                    <tr class="baris-hasil-total">
                        <td colspan="3" class="rata-kanan-hasil">Jumlah Total</td>
                        <td><input type="text" id="totalHarga" value="0" readonly></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="rata-kanan-hasil">Diskon</td>
                        <td><input type="text" id="diskonHarga" value="0" readonly></td>
                    </tr>
                    <tr style="background: #ddd;">
                        <td colspan="3" class="rata-kanan-hasil"><b>Jumlah Bayar</b></td>
                        <td><input type="text" id="jumlahBayar" value="0" readonly style="font-weight:bold;"></td>
                    </tr>
                </tbody>
            </table>
            <div class="card-reset-terpisah">
                <button class="btn-reset-menu" id="resetMenu">Reset</button>
            </div>
        </div>
        `;
        $("#mainContent").html(konten);

        $(".qty-input").on("input", function() {
            updateTampilanPesanan();
        });

        $("#resetMenu").click(function() {
            $(".qty-input").val(0);
            updateTampilanPesanan();
        });
    }

    function updateTampilanPesanan() {
        let daftarPesanan = [];
        $(".qty-input").each(function() {
            daftarPesanan.push({
                harga: parseInt($(this).data("harga")),
                jumlah: parseInt($(this).val()) || 0
            });
        });

        let total = hitungTotalBayar(daftarPesanan);
        let diskon = hitungPotongan(total);
        let bayar = total - diskon;

        $("#totalHarga").val(total);
        $("#diskonHarga").val(diskon);
        $("#jumlahBayar").val(bayar);
    }

    function tampilkanKalkulator() {
        let konten = `
            <h2 class="judul-utama">Calculator</h2>
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="number" id="angka1" style="width:80px;">
                <select id="operator">
                    <option value="*">*</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                    <option value="^">^</option>
                    <option value="√">√</option>
                    <option value="log">log</option>
                    <option value="ln">ln</option>
                    <option value="sin">sin</option>
                    <option value="cos">cos</option>
                    <option value="tan">tan</option>
                    <option value="cot">cot</option>
                    <option value="sec">sec</option>
                    <option value="csc">csc</option>
                    <option value="factorial">factorial x!</option>
                </select>
                <input type="number" id="angka2" style="width:80px;">
                <span style="font-weight:bold;">=</span>
                <input type="text" id="hasilKalkulasi" style="width:100px;" readonly>
            </div>
            <div style="margin-top:20px;">
                <button class="btn-hitung" id="btnHitungKalkulator">Hitung</button>
                <button class="btn-reset" id="btnResetKalkulator">Reset</button>
            </div>
        `;
        $("#mainContent").html(konten);

        $("#btnHitungKalkulator").click(function() {
            let val1 = $("#angka1").val();
            let val2 = $("#angka2").val();
            let op = $("#operator").val();

            if (val1 === "" || val2 === "") {
                alert("input pertama dan kedua terlebih dahulu");
                return;
            }

            let hasil = hitungKalkulasiMurni(val1, val2, op);
            $("#hasilKalkulasi").val(hasil);
        });

        $("#btnResetKalkulator").click(function() {
            $("#mainContent input").val('');
        });
    }
});