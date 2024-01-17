// defolt 

let search = document.getElementById('search')
let btn = document.getElementById('btn')
let signIn = document.getElementById('signIn')
let exit = document.getElementById('signUp')

// creat main 

let creat = document.getElementById('main')

// category filter

let iphon = document.getElementById('iphon')
let nokia = document.getElementById('nokia')
let realmi = document.getElementById('realmi')
let oppo = document.getElementById('oppo')
let lg = document.getElementById('lg')
let huwawe = document.getElementById('huwawe')







// regisrer form 


signIn.addEventListener('click', function(){
    window.location.assign('http://127.0.0.1:5501/form/form.html')
})




function creatPhon(phon){
    return`
    <div class="card">
        <img id="cardImg" src="./img/iphon.webp" alt="phon img" width="200" height="300">
        <div class="hero">
            <p>${phon.name}</p>
            <p>${phon.price}</p>
        </div>
        <p>${phon.description}</p>
        <button id="btnId_${phon.parendNod.id}">Batafsil</button>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', function(){
    fetch('https://auth-rg69.onrender.com/api/products/all', {
        method:'GET'
    })
    .then(respons => respons.json())
    .then(phon => {
        phon.forEach(phon => {
            creat.innerHTML += `
            <div class="card">
        <img id="cardImg" src="./img/iphon.webp" alt="phon img" width="200" height="300">
        <div class="hero">
            <p>${phon.name}</p>
            <p>${phon.price}</p>
        </div>
        <p>${phon.description}</p>
        <button>Batafsil</button>
    </div>
            `
        });
    })
    .catch(err => console.log(err))
})
