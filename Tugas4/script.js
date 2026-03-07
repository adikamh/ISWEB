$(document).ready(function() {
    for (let angkaHari = 1; angkaHari <= 31; angkaHari++) {
        $('#tanggal').append(`<option value="${angkaHari}">${angkaHari}</option>`);
    }

    for (let angkaTahun = 1950; angkaTahun <= 2026; angkaTahun++) {
        let tahunTerpilih = (angkaTahun === 2008) ? 'selected' : '';
        $('#tahun').append(`<option value="${angkaTahun}" ${tahunTerpilih}>${angkaTahun}</option>`);
    }

    $("#tombolKirim").click(function() {
        let nilaiTanggal = $("#tanggal").val();
        let nilaiBulan = $("#bulan").val();
        let nilaiTahun = $("#tahun").val();

        $("#outputTanggal").val(nilaiTanggal);
        $("#outputBulan").val(nilaiBulan);
        $("#outputTahun").val(nilaiTahun);

        let gabunganSemuaAngka = nilaiTanggal.toString() + nilaiBulan.toString() + nilaiTahun.toString();
        
        let hasilTahapSatu = 0;
        for (let hurufAngka of gabunganSemuaAngka) {
            hasilTahapSatu += parseInt(hurufAngka);
        }
        $("#outputHasil1").val(hasilTahapSatu);

        function hitungProsesSederhana(angkaMasukan) {
            let totalJumlah = 0;
            let angkaSebagaiTeks = angkaMasukan.toString();
            
            for (let satuanAngka of angkaSebagaiTeks) {
                totalJumlah += parseInt(satuanAngka);
            }
            
            if (totalJumlah > 9) {
                let prosesLanjutan = hitungProsesSederhana(totalJumlah);
                return { hasilTahapDua: totalJumlah, hasilPalingAkhir: prosesLanjutan.hasilPalingAkhir };
            } else {
                return { hasilTahapDua: "", hasilPalingAkhir: totalJumlah };
            }
        }

        let hasilKalkulasi = hitungProsesSederhana(hasilTahapSatu);
        
        $("#outputHasil2").val(hasilKalkulasi.hasilTahapDua);
        $("#outputHasilAkhir").val(hasilKalkulasi.hasilPalingAkhir);

        tampilkanDeskripsi(hasilKalkulasi.hasilPalingAkhir);
    });

    $("#tombolReset").click(function() {
        $(".baris-output input").val("");
        $("#teksArti").empty();
        $("#tanggal").val("1");
        $("#bulan").val("1");
        $("#tahun").val("2008");
    });

    function tampilkanDeskripsi(angkaGarisHidup) {
        let kontenHtml = "";
        let dataGarisHidupLengkap = {
            1: {
                judul: "GARIS HIDUP 1: SANG PELOPOR",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Api Kepemimpinan yang Tak Pernah Padam</p>
                    <p>Anda terlahir dengan <strong>energi matahari</strong> di dalam diri! Nomor 1 dalam garis hidup Anda menandakan bahwa Anda adalah <strong>pionir sejati</strong> orang pertama yang berani melangkah ketika orang lain ragu-ragu. Jiwa Anda seperti kompas yang selalu menunjuk ke utara: teguh, pasti, dan tidak mudah goyah.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda bukan pengikut, Anda adalah <em>trendsetter</em> alami. Dalam setiap kelompok, tanpa disadari, orang-orang akan menatap Anda untuk memutuskan arah selanjutnya. Ada kharisma tersendiri yang membuat Anda disegani, bahkan tanpa perlu bersuara keras. Anda adalah <strong>pelopor, inovator, dan arsitek takdir</strong> bagi diri sendiri.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Keberanian Anda luar biasa Anda berani bermimpi besar dan berani gagal demi mimpi itu. Kreativitas Anda mengalir seperti air terjun, deras dan tak terbendung. Anda mandiri, tidak suka merepotkan orang lain, dan selalu punya cara untuk bangkit kembali saat jatuh. Kata "menyerah" tidak ada dalam kamus hidup Anda!</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Kadang-kadang, api kepemimpinan Anda bisa terlalu panas hingga membakar hubungan dengan orang lain. Ego bisa menjadi musuh terbesar jika tidak dikendalikan. Anda mungkin terlalu percaya diri sehingga lupa bahwa kadang kita perlu mendengar suara orang lain. Belajarlah untuk menjadi pemimpin yang melayani, bukan pemimpin yang memerintah.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Menemukan keseimbangan antara ketegasan dan empati. Anda ada di dunia ini untuk menunjukkan bahwa pemimpin sejati adalah mereka yang mampu menginspirasi, bukan mengintimidasi. Dunia butuh keberanian Anda, tapi juga butuh kehangatan Anda.</p>`
            },
            2: {
                judul: "GARIS HIDUP 2: SANG PEMERSATU",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Kepekaan adalah Kekuatan Terbesar Anda</p>
                    <p>Anda terlahir dengan <strong>energi bulan</strong> yang lembut namun kuat. Sebagai nomor 2, Anda adalah <strong>diplomat alami</strong> yang mampu menyatukan perbedaan. Jiwa Anda seperti air yang selalu mencari celah untuk menyatu tenang di permukaan, tapi dalamnya penuh kekuatan.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda bisa merasakan apa yang orang lain rasakan, bahkan sebelum mereka mengatakannya. Intuisi Anda tajam, dan Anda punya bakat luar biasa untuk menenangkan konflik. Dalam pertengkaran, Anda adalah penengah yang adil. Dalam kesedihan, Anda adalah penghibur yang tulus. Anda adalah <strong>lem yang merekatkan hubungan</strong>.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Kesabaran Anda luar biasa Anda bisa menunggu waktu yang tepat untuk bertindak. Loyalitas Anda tak terbantahkan; sekali Anda menerima seseorang, Anda akan setia selamanya. Anda peka terhadap detail kecil yang orang lain lewatkan. Dalam dunia yang keras ini, kelembutan Anda adalah senjata paling ampuh.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Jangan biarkan kepekaan Anda berubah menjadi kecemasan berlebihan. Terlalu banyak memikirkan perasaan orang lain bisa membuat Anda lupa dengan perasaan sendiri. Belajarlah untuk berkata "tidak" tanpa merasa bersalah. Anda bukanlah tempat sampah untuk masalah semua orang.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Mengajarkan dunia bahwa kekuatan sejati bukan hanya tentang siapa yang paling keras bersuara, tapi siapa yang paling mampu mendengarkan. Anda ada untuk menciptakan harmoni di tengah kekacauan.</p>`
            },
            3: {
                judul: "GARIS HIDUP 3: SANG PENGHIBUR ✨",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Kreativitas Tak Terbatas Mengalir dalam Diri Anda</p>
                    <p>Anda terlahir dengan <strong>energi bintang</strong> yang gemerlap! Nomor 3 dalam garis hidup menandakan bahwa Anda adalah <strong>seniman sejati</strong> mampu mengubah kata-kata menjadi puisi, lukisan menjadi emosi, dan musik menjadi kenangan. Jiwa Anda seperti kembang api: penuh warna, bersemangat, dan selalu menarik perhatian.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda punya bakat untuk membuat orang lain tersenyum, bahkan di hari terburuk mereka. Kata-kata Anda mengalir dengan indah, humor Anda menular, dan kehadiran Anda selalu membuat ruangan terasa lebih hidup. Anda adalah <strong>pembawa cahaya</strong> di tengah kegelapan.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Optimisme Anda tak tergoyahkan Anda selalu melihat sisi baik dari setiap situasi. Komunikasi Anda memukau; entah berbicara di depan umum atau menulis, Anda selalu mampu menyentuh hati pendengar. Kreativitas Anda tak pernah kering, selalu ada ide baru yang muncul.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Terkadang, semangat Anda yang membara bisa padam begitu saja karena kritik. Anda perlu belajar bahwa tidak semua orang akan menyukai karya Anda, dan itu tidak masalah. Juga, jangan terlalu fokus pada hal-hal baru hingga melupakan tanggung jawab dasar.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Menghibur, menginspirasi, dan membangkitkan semangat orang lain melalui ekspresi kreatif Anda. Dunia butuh warna Anda, jangan pernah meredupkannya.</p>`
            },
            4: {
                judul: "GARIS HIDUP 4: SANG PEMBANGUN",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Fondasi Kokoh untuk Masa Depan Gemilang</p>
                    <p>Anda terlahir dengan <strong>energi gunung</strong> yang kokoh dan tak tergoyahkan. Sebagai nomor 4, Anda adalah <strong>arsitek kehidupan</strong> membangun impian selangkah demi selangkah dengan sabar dan teliti. Jiwa Anda seperti fondasi bangunan pencakar langit: tidak terlihat, tapi tanpanya semua akan runtuh.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda bisa dipercaya seperti batu karang di tengah badai. Ketika orang lain panik, Anda tetap tenang mencari solusi. Ketika orang lain menyerah, Anda terus bekerja. Anda adalah <strong>pilar kekuatan</strong> bagi keluarga, teman, dan rekan kerja. Tanpa Anda, banyak hal tidak akan beres.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Disiplin Anda luar biasa Anda bisa melakukan hal yang sama berulang-ulang demi mencapai tujuan. Ketekunan Anda patut diacungi jempol; tidak ada gunung yang terlalu tinggi untuk didaki. Kejujuran Anda membuat orang merasa aman berada di dekat Anda.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Terlalu kaku bisa membuat Anda kehilangan kesempatan indah. Kadang hidup butuh fleksibilitas, butuh improvisasi. Jangan biarkan rutinitas membuat Anda buta terhadap keindahan di sekitar. Belajarlah untuk sesekali melepas kontrol dan menikmati kejutan hidup.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Membangun dunia yang lebih stabil dan aman bagi generasi mendatang. Kerja keras Anda hari ini adalah hadiah untuk masa depan.</p>`
            },
            5: {
                judul: "GARIS HIDUP 5: SANG PETUALANG",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Kebebasan adalah Nafas Hidup Anda</p>
                    <p>Anda terlahir dengan <strong>energi angin</strong> yang bebas dan tak terikat. Sebagai nomor 5, Anda adalah <strong>penjelajah sejati</strong> selalu ingin merasakan hal baru, mengunjungi tempat baru, bertemu orang baru. Jiwa Anda seperti burung yang terbang tinggi, tak suka dikurung dalam sangkar rutinitas.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda punya rasa ingin tahu yang tak pernah puas. Setiap pertanyaan adalah petualangan baru, setiap jawaban membuka pintu pertanyaan lain. Anda fleksibel, mudah beradaptasi, dan selalu siap dengan perubahan. Anda adalah <strong>katalis perubahan</strong> dalam setiap kelompok.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Karisma Anda membuat orang tertarik pada cerita-cerita petualangan Anda. Kemampuan adaptasi Anda luar biasa Anda bisa nyaman di mana saja, dengan siapa saja. Keberanian Anda untuk mencoba hal baru menginspirasi orang lain untuk keluar dari zona nyaman.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Terlalu bebas bisa membuat Anda lupa akan komitmen. Orang lain mungkin merasa Anda tidak bisa diandalkan karena selalu mencari kesenangan baru. Belajarlah bahwa kebebasan sejati bukan tanpa batas, tapi tentang memilih batasan yang tepat.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Membawa angin segar ke mana pun Anda pergi. Menginspirasi orang lain untuk berani bermimpi dan berani melangkah. Dunia butuh jiwa-jiwa bebas seperti Anda.</p>`
            },
            6: {
                judul: "GARIS HIDUP 6: SANG PENJAGA ✨",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Cinta adalah Bahasa Universal Anda</p>
                    <p>Anda terlahir dengan <strong>energi bumi yang hangat</strong> dan penuh kasih. Sebagai nomor 6, Anda adalah <strong>penjaga harmoni</strong> pelindung keluarga, penjaga persahabatan, dan pemelihara cinta. Jiwa Anda seperti pohon besar yang rindang: memberikan naungan bagi semua yang berteduh di bawahnya.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Tanggung jawab bukan beban bagi Anda, tapi panggilan jiwa. Anda merasa bahagia ketika bisa membantu orang lain, ketika melihat mereka tersenyum karena uluran tangan Anda. Anda adalah <strong>hati yang berdetak</strong> dalam setiap komunitas yang Anda ikuti.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Empati Anda dalam Anda bisa merasakan sakit orang lain seolah sakit sendiri. Pengabdian Anda tulus, tanpa pamrih, tanpa harap kembali. Kebijaksanaan Anda membuat orang datang meminta nasihat. Anda adalah tempat pulang bagi mereka yang lelah.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Terlalu banyak memberi bisa membuat Anda lupa mengisi ulang energi sendiri. Jangan biarkan kebaikan Anda dieksploitasi. Belajarlah bahwa merawat diri sendiri bukanlah keegoisan, tapi kebutuhan.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Menyebarkan cinta dan kasih sayang ke seluruh penjuru. Mengajarkan bahwa kekuatan terbesar manusia adalah kemampuannya untuk mencintai dan dicintai.</p>`
            },
            7: {
                judul: "GARIS HIDUP 7: SANG PENCARI KEBENARAN",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Kebijaksanaan adalah Harta Karun Anda</p>
                    <p>Anda terlahir dengan <strong>energi malam yang misterius</strong> dan penuh teka-teki. Sebagai nomor 7, Anda adalah <strong>filsuf alami</strong> selalu mencari makna di balik setiap kejadian, selalu bertanya "mengapa" sebelum "bagaimana". Jiwa Anda seperti danau yang dalam: tenang di permukaan, tapi penuh kehidupan di kedalaman.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda butuh waktu sendiri untuk mengisi ulang energi. Keramaian melelahkan, kesunyian menyegarkan. Anda punya koneksi spiritual yang kuat, entah dengan Tuhan, alam semesta, atau diri sendiri. Anda adalah <strong>pencari kebenaran</strong> yang tak pernah puas dengan jawaban dangkal.</p>
                    <p><strong> KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Analisis Anda tajam Anda bisa melihat pola yang orang lain lewatkan. Intuisi Anda kuat Anda sering "tahu" tanpa tahu bagaimana bisa tahu. Kebijaksanaan Anda melampaui usia Anda seperti jiwa tua dalam tubuh muda.</p>
                    <p><strong> TANTANGAN YANG HARUS DIWASPADAI:</strong> Terlalu banyak berpikir bisa membuat Anda terjebak dalam analisis berlebihan. Terkadang, hidup perlu dijalani, tidak hanya dipikirkan. Jangan biarkan pencarian makna membuat Anda lupa menikmati proses.</p>
                    <p><strong> MISI HIDUP ANDA:</strong> Menemukan dan membagikan kebijaksanaan. Menjadi jembatan antara yang terlihat dan tak terlihat, antara yang rasional dan spiritual.</p>`
            },
            8: {
                judul: "GARIS HIDUP 8: SANG PEMIMPIN BISNIS",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Kelimpahan adalah Takdir Anda</p>
                    <p>Anda terlahir dengan <strong>energi gunung berapi</strong> penuh kekuatan siap meletus. Sebagai nomor 8, Anda adalah <strong>penguasa materi</strong> mampu mengubah usaha menjadi hasil, mimpi menjadi kenyataan, kerja keras menjadi kekayaan. Jiwa Anda seperti raja atau ratu yang bijaksana: paham betul cara mengelola kerajaan.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda punya bakat alami untuk bisnis dan keuangan. Uang mengalir kepada Anda bukan karena keberuntungan, tapi karena Anda mengerti cara kerjanya. Anda ambisius, tapi ambisi Anda membara untuk tujuan baik. Anda adalah <strong>pembangun kerajaan</strong> dalam arti sesungguhnya.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Visi Anda jauh ke depan Anda bisa melihat peluang sebelum orang lain melihatnya. Kepemimpinan Anda kuat Anda mampu menggerakkan orang menuju tujuan bersama. Ketangguhan Anda luar biasa kegagalan hanyalah bahan bakar untuk mencoba lagi.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Jangan biarkan materi menguasai hati. Kekayaan sejati bukan hanya tentang uang, tapi tentang dampak positif yang Anda tinggalkan. Ingatlah untuk selalu berbagi dan memberi kembali.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Menciptakan kelimpahan tidak hanya untuk diri sendiri, tapi untuk banyak orang. Mengajarkan bahwa kesuksesan sejati adalah ketika Anda bisa mengangkat orang lain bersama Anda.</p>`
            },
            9: {
                judul: "GARIS HIDUP 9: SANG HUMANIS",
                isi: `
                    <p><strong>RAMALAN GARIS HIDUP ANDA:</strong> Welas Asih adalah Mahkota Anda</p>
                    <p>Anda terlahir dengan <strong>energi samudra</strong> yang luas dan dalam. Sebagai nomor 9, Anda adalah <strong>penyembuh universal</strong> mampu merangkul seluruh umat manusia dengan kasih tanpa batas. Jiwa Anda seperti pelangi setelah hujan: membawa harapan bagi yang putus asa, keindahan bagi yang lelah.</p>
                    <p><strong>KEUNIKAN DIRI ANDA:</strong> Anda peduli pada kemanusiaan secara keseluruhan, bukan hanya orang terdekat. Isu-isu global menyentuh hati Anda. Anda ingin membuat dunia menjadi tempat yang lebih baik, sekecil apa pun kontribusi Anda. Anda adalah <strong>cahaya harapan</strong> bagi mereka yang tak punya suara.</p>
                    <p><strong>KELEBIHAN YANG MEMBUAT ANDA ISTIMEWA:</strong> Kasih sayang Anda tanpa syarat Anda memberi tanpa mengharap kembali. Penerimaan Anda luas Anda tidak menghakimi, tidak membeda-bedakan. Visi kemanusiaan Anda tinggi Anda melihat potensi baik dalam setiap orang.</p>
                    <p><strong>TANTANGAN YANG HARUS DIWASPADAI:</strong> Terlalu peduli bisa membuat Anda lupa diri. Anda tidak bisa menyelamatkan semua orang, dan itu tidak apa-apa. Belajarlah bahwa kadang cara terbaik membantu adalah dengan membiarkan orang belajar dari kesalahan sendiri.</p>
                    <p><strong>MISI HIDUP ANDA:</strong> Menyembuhkan luka dunia, satu per satu. Menjadi bukti bahwa cinta kasih masih ada di tengah kerasnya kehidupan. Anda ada untuk mengingatkan bahwa kita semua adalah satu keluarga besar kemanusiaan.</p>`
            }
        };

        let setDataGarisHidup = dataGarisHidupLengkap[angkaGarisHidup];

        if (setDataGarisHidup) {
            kontenHtml = `
                <h2 class="teks-disorot" style="font-weight: bold; margin-bottom: 20px;">${setDataGarisHidup.judul}</h2>
                <div class="isi-deskripsi" style="margin-left: 40px; text-align: justify; line-height: 1.6;">
                    ${setDataGarisHidup.isi}
                </div>
            `;
        } else {
            kontenHtml = `<h4 style="margin-left: 40px;">Data tidak ditemukan</h4>`;
        }

        $("#teksArti").hide().html(kontenHtml).fadeIn(500);
    }
});
