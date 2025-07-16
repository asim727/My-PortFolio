const themetoggle = document.querySelector(".theme-toggle");
themetoggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});


const typingText = document.querySelector(".typing");
const loadText = "Welcome To, My PortFolio";
let loadIndex = 0;

function typeLoader() {
    if (loadIndex < loadText.length) {
        typingText.textContent += loadText.charAt(loadIndex);
        loadIndex++;
        setTimeout(typeLoader, 90);
    }
}

window.addEventListener("load", () => {
    typingText.textContent = "";
    typeLoader();
});


const targetText = document.querySelector(".text");
const roles = ["Asim Ali", "a Web Developer", "a App Designer", "a UI/UX Designer", "a Front-end Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
        targetText.textContent = "I'm " + currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
        } else {
            setTimeout(typeEffect, 150);
        }
    } else {
        targetText.textContent = "I'm " + currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 400);
        } else {
            setTimeout(typeEffect, 80);
        }
    }
}

window.addEventListener("load", () => {
    setTimeout(typeEffect, 3000);
});


const backtop = document.querySelector(".backtop");
backtop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const skillbtn = document.querySelector("button:nth-child(1)");
const experiencebtn = document.querySelector("button:nth-child(2)");
const educationbtn = document.querySelector("button:nth-child(3)");

const skill = document.querySelector(".myskills");
const experience = document.querySelector(".Experience");
const education = document.querySelector(".Education");

function toggleBox(btn, box) {
    btn.addEventListener("click", () => {
        [skill, experience, education].forEach(b => {
            if (b !== box) b.style.display = "none";
        });
        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
        }
    })
}
toggleBox(skillbtn, skill);
toggleBox(experiencebtn, experience);
toggleBox(educationbtn, education);

document.querySelectorAll("nav ul li a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        const targetlink=this.getAttribute("href").substring(1);
        const targetsec=document.getElementById(targetlink.toLowerCase());
        if(targetsec){
            targetsec.scrollIntoView({
                behaviour:"smooth"
            });
        }
    });
});


const btn=document.querySelector(".submit");
const inputname=document.getElementById("inputname");
const email=document.getElementById("inputemail");
const msg=document.getElementById("message");

btn.addEventListener("click",e=>{
    e.preventDefault();
    inputname.value="";
    email.value="";
    msg.value="";
});