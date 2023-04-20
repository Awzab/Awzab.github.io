const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "كـل",
    "عـام",
    "وانـتـم",
    "بـخـيـر",
    "تـقـبـل",
    "الـلَّـه",
    "مـنـا",
    "ومـنـكـم",
    "صـالـح",
    "الأعـمـال"

];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


// VanillaTilt.init(document.querySelectorAll(".box"), {
//     max: 25,
//     speed: 400,
//     easing: "cubic-bezier(.03,.89,.52,.99",
//     perspective: 500,
//     transition: true
// });


// function switchVisible() {
//     if (document.getElementsByClassName("moon-con")) {
//         console.log('ok1')
//         if (document.getElementsByClassName('TEXT').style.display == "none") {
//             document.getElementsByClassName('TEXT').style.display = "block";
//             document.getElementsByClassName('moon2').style.display = "block";
//             document.getElementsByClassName('fancy-btn').style.display = "none";
//             document.getElementsByClassName('moon-con').style.display = "none";
//             console.log('ok2')
//         }
//         else {
//             document.getElementsByClassName('texts').style.display = "none";
//             document.getElementsByClassName('moon2').style.display = "none";
//             document.getElementsByClassName('fancy-btn').style.display = "block";
//             document.getElementsByClassName('moon-con').style.display = "block";
//             console.log('ok3')
//         }
//     }
// }

function toggleDiv() {
    var btn = document.getElementsByClassName('fancy-btn');
    var texts = document.getElementsByClassName('TEXT');
    var full = document.getElementsByClassName('moon2');
    var half = document.getElementsByClassName('moon-con');

    const audio = new Audio("./audio/eid.mp3");

    Array.from(btn).forEach((x) => {
        audio.play();
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })

    Array.from(texts).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })

    Array.from(full).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })

    Array.from(half).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })
}
// $(document).ready(function(){
//     $("fancy-btn").click(function(){
//       $(".fancy-btn").toggle();
//       $(".moon-con").toggle();
//       $(".texts").toggle();
//       $(".moon2").toggle();
//     });
//   });


// let togglebtn = document.getElementsByClassName('.fancy-btn');
// let TEXTS = document.getElementsByClassName('.texts');
// let full = document.getElementsByClassName('.moon2');
// let half = document.getElementsByClassName('.moon-con');

// togglebtn.addEventListener('click',() => {
//     if(togglebtn.style.display === 'none'){
//         togglebtn.style.display = 'block';
//         console.log('ok')
//     }
//     else{
//         togglebtn.style.display = 'none';
//     }
    
//     if(half.style.display === 'none'){
//         half.style.display = 'block';
//     }
//     else{
//         half.style.display = 'none';
//     }

//     if(TEXTS.style.display === 'none'){
//         TEXTS.style.display = 'block';
//     }
//     else{
//         TEXTS.style.display = 'none';
//     }
    
//     if(full.style.display === 'none'){
//         full.style.display = 'block';
//     }
//     else{
//         full.style.display = 'none';
//     }

// });