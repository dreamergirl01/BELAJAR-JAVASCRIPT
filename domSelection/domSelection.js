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
const query = document.querySelector('#b p')
query.style.color = 'green'
query.style.fontSize = '30px'

const query2 = document.querySelector('section#b ul li:nth-child(2)')
query2.style.color = 'orange'
query2.style.backgroundColor = 'green'


//document.querySelectorAll() --> memlilih semua elemen (node list)
const all = document.querySelectorAll('p')
//untuk satu node
// all[2].innerHTML = 'ini diubah menggunakan querySelectorAll'

//untuk semua element
for (let i = 0; i < all.length; i++) {
    all[i].style.color = 'blue'
}


//bisa juga dengan mengubah node root (document)
const sectionB = document.querySelector('section#b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'orange'