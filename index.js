console.log("operator perbandingan")
//== === != !== <= >=

console.log("operator logika")
// && || !

console.log("mendeklarasikan sebuah fungsi")
function penambahan(){
    console.log(1+2)
}
penambahan()

//fungsi dalam variabel
var penambahan = function(){
    console.log(1+2)
}
penambahan()

//nilai berubah atau dinamis pakai parameter
function penambahan(parameter1, parameter2){
    console.log(parameter1+parameter2)
}
penambahan(10,2)

//fungsi return untuk mengembalikan nilai agar bisa dimiliki oleh variabel
var penambahan = function(parameter1,parameter2){
    return parameter1+parameter2
}
console.log(penambahan(10,2))