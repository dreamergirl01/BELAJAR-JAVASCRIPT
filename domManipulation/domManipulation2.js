//menambahkan satu elemen, 1. buat dulu elementnya
const pBaru = document.createElement('p')
//2. buat isi elementnya
const textPBaru = document.createTextNode('Ini merupakan paragraf baru yang dibuat menggunakan dom manipulation node')
//3. masukkan text ke dalam tag p
pBaru.appendChild(textPBaru)
//4. simpan pBaru di dalam section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


//menambahkan element di antara list item 1 dan list item 2
//1. buat li
const liBaru = document.createElement('li')
//2.buat teks di dalam li
const teksLiBaru = document.createTextNode('ini list baru')
//3. masukkan teks li baru ke dalam element li baru
liBaru.appendChild(teksLiBaru)
//4. tentukan parent dari li (ul)
const ul = document.querySelector('section#b ul')
//5. ambil li sebleum li item ke 2
const li2 = document.querySelector('section#b ul li:nth-child(2)')
//6. simpan
ul.insertBefore(liBaru, li2)


//menghapus menggunakan removeChild --> missal remove link
//1. harus tahu parentnya siap
const link = document.getElementsByTagName('a')[0]
//2. hapus link
sectionA.removeChild(link)


//replace atau mengganti menggunakan replaceChild
//ganti p pada section#b dengan h2
//1. ambil parent
const sectionB = document.getElementById('b')
//2. tangkap element yang mau di replace
const p4 = sectionB.querySelector('p')
//3. buat element baru
const h2Baru = document.createElement('h2')
//4. buat isi element baru
const textH2Baru = document.createTextNode('ini h2 baru')
//5. masukkan text ke dalam h2
h2Baru.appendChild(textH2Baru)
//6. lakukan replace
sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'