// function hitungUmur(day, month, years){

//     let lahir = new Date.getFullYear('1990').getTime();
//     // let bulan = new Date().getMonth();
//     let now = new Date().getFullYear();

//     //  h = Math.floor(hari - day);
//     //  b = Math.floor(bulan - month) ;
//     //  t = now - lahir;
    
// //     return h + b + t;
// // }
// console.log(now);
// // console.log(hitungUmur(1,9,1995));

// function hitung_umur(tanggal_lahir){
// 	let birthDate = new DateTime(tanggal_lahir);
// 	let today = new DateTime("today");
// 	if (birthDate > today) { 
// 	    alert("0 tahun 0 bulan 0 hari");
// 	}
// 	let y = today - birthDate;
// 	let m = today - birthDate;
// 	let d = today - birthDate;
// 	return y + " tahun " + m + " bulan " + d + " hari";
// }

// console.log(menit);
// console.log(jam);
// console.log(hari);
// console.log(bulan);
// console.log(tahun);

// const waktuTujuan = new Date('sep 16, 2021 07:51').getTime();
// const flashSale = setInterval(function(){

//     const sekarang = new Date().getTime();
//     const selisih = waktuTujuan - sekarang;

//         // 1000 mili detik = 1 detik , 60 detik = 1 menit , 60 menit = 1 jam , 24 jam  = 1 hari
//         const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
//         const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//         const menit = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60));
//         const detik = Math.floor(selisih % (1000 * 60 ) / 1000);
        
//     // console.log("Hari " + hari);
//     // console.log("Jam " + jam);
//     // console.log("Menit " + menit);
//     // console.log("detik " +detik);

//     const teks = document.getElementById('teks');
//     teks.innerHTML = 'Flash Sale : '+ hari + ' Hari ' + jam + ' Jam ' + menit + ' Menit ' + detik + ' detik ';

//     if(selisih <= 0){
//         clearInterval(flashSale);
//         teks.innerHTML = "Flash Sale Selesai";
//     }
// }, 1000);

// ambil value datetime-local dari inputan HTML tag <input>
const waktu = document.querySelector('input[type="datetime-local"]');

waktu.addEventListener('input', function(){
    
    // value -> mengambil nilai apapun yang ada di dalam tag HTML
    const waktuInput = waktu.value;

    const flashSale = setInterval(function(){

        const waktuTujuan = new Date(waktuInput).getTime();
        const sekarang = new Date().getTime();
        const selisih = waktuTujuan - sekarang;

            // 1000 mili detik = 1 detik , 60 detik = 1 menit , 60 menit = 1 jam , 24 jam  = 1 hari
            const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
            const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const menit = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60));
            const detik = Math.floor(selisih % (1000 * 60 ) / 1000);
            
        // console.log("Hari " + hari);
        // console.log("Jam " + jam);
        // console.log("Menit " + menit);
        // console.log("detik " +detik);

        const teks = document.getElementById('teks');
        teks.innerHTML = 'Flash Sale : '+ hari + ' Hari ' + jam + ' Jam ' + menit + ' Menit ' + detik + ' detik ';
        
        const audio = new Audio();
        if(selisih < 60000 && selisih >= 1){
            audio.src = "audio/jet.mp3";
            audio.play();
        }
        if(selisih <= 0){
            clearInterval(flashSale);
            teks.innerHTML = "Flash Sale Selesai";
            teks.style.backgroundColor = "salmon";
            teks.style.border = "3px solid aquamarine";
            teks.style.color = "aquamarine";
            audio.src = "audio/Soft Feeling - Cheel.mp3";
            audio.play();
        }
    },1000);

});

// setTimeout(function(){
//     console.log("Hello Javascript");
// }, 5000);