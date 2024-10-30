let seragamSekolah
let hari = "senin"

switch(hari){
    case "senin":
        seragamSekolah = "kemeja putih bawahan merah";
        break;
    case "selasa":
        seragamSekolah = "kemeja hijau bawahan hitam";
        break;
    case "rabu":
        seragamSekolah = "kemeja putih bawahan putih";
        break;
    case "kamis":
        seragamSekolah = "kemeja batik merah bawahan hitam";
        break;
    case "jumat":
        seragamSekolah = "baju pramuka";
        break;
    default: //menampilkan hasil diluar kondisi
        seragamSekolah = "baju bebas";
        break;
}
console.log(seragamSekolah)


let makanan
let menu = 9
switch(menu)
{
    case 1:
        makanan = "dadar";
        break;
    case 2:
        makanan = "mie telur";
        break;
    case 3:
        makanan = "nasi goreng";
        break;
    case 4:
        makanan = "mie goreng";
        break;
    case 5:
        makanan = "mienas";
        break;
    case 6:
        makanan = "mie tektek";
        break;
    case 7:
        makanan = "ayam geprek";
        break;
    default:
        makanan = "tidak tersedia";
}
console.log(makanan)
