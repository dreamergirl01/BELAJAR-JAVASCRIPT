//dom selection
//document.getElementById()
const judul = document.getElementById('judul')
judul.style.color = 'red'
judul.style.backgroundColor = 'grey'
judul.innerHTML = 'Rahma'


//document.getElementsByTagName()
const tagname = document.getElementsByTagName('p')
//kalau satu paragraf, hitungnya dimulai dari nol
// tagname[2].style.backgroundColor = 'lightblue'  

//kalau mau semuanya bisa menggunakan looping
for (let i = 0; i < tagname.length; i++) {
    tagname[i].style.backgroundColor = 'lightblue'
}


//document.getElementsByClassName()
const classname = document.getElementsByClassName('p1')
classname[0].innerHTML = 'ini dirubah dari javascript'


//document.querySelector() --> memilih dokumen berdasarkan kriteria tertentu
const query = document.querySelector('a')