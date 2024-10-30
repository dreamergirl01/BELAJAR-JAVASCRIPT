console.log("Javascript Hoisting")

sapaSiManusia()

function sapaSiManusia(){
    let manusia = {
        nama : "rahma",
        pekerjaan : "progammer"
    }

    console.log(`Hai ${manusia.nama}, apakah benar anda seorang ${manusia.pekerjaan}`)
}

//menggunakan variabel
var sapaSiManusia = function(){
    let manusia = {
        nama : "rahma",
        pekerjaan : "progammer"
    }

    console.log(`Hai ${manusia.nama}, apakah benar anda seorang ${manusia.pekerjaan}`)
}
sapaSiManusia()