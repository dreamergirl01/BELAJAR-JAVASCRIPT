const olahraga = "basketball";

function jenisOlahraga(){
    let atlet = "Lionel Messi";
    const nokobe = 10;
    console.log(olahraga);
    if(olahraga === "sepak bola"){
        atlet = "Kobe Bryant";
        const nokobe = 24;
        console.log(olahraga);
    }
    return atlet;
}

console.log(jenisOlahraga());
console.log(olahraga);