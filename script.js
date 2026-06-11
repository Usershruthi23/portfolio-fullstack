// MOBILE MENU

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// CLOSE MOBILE MENU

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

// CONTACT FORM

const contactForm =
document.getElementById("contact-form");

contactForm.addEventListener("submit",
async function(e){

  e.preventDefault();

  const formData = {

    name:
    document.getElementById("name").value.trim(),

    email:
    document.getElementById("email").value.trim(),

    message:
    document.getElementById("message").value.trim(),

  };

  const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(formData.name.length < 3){

    alert(
      "Name must contain at least 3 characters."
    );

    return;

  }

  if(!emailPattern.test(formData.email)){

    alert(
      "Please enter a valid email address."
    );

    return;

  }

  if(formData.message.length < 10){

    alert(
      "Message should contain at least 10 characters."
    );

    return;

  }

  try {

    const response = await fetch(

      "https://your-render-app.onrender.com/api/contact",

      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      }

    );

    const result =
    await response.json();

    alert(result.message);

    contactForm.reset();

  }

  catch(error){

    console.log(error);

    alert(
      "Something went wrong"
    );

  }

});

// SCROLL BUTTON

const scrollBtn =
document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollBtn.style.display =
    "block";

  }

  else{

    scrollBtn.style.display =
    "none";

  }

});

// SCROLL TO TOP

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});

// ACTIVE NAV LINKS

const sections =
document.querySelectorAll("section");

const navLinkItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop - 200;

    if(scrollY >= sectionTop){

      current =
      section.getAttribute("id");

    }

  });

  navLinkItems.forEach((link) => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      .includes(current)
    ){

      link.classList.add("active");

    }

  });

});

// TYPING EFFECT

const roles = [

  "Frontend Developer",

];

let roleIndex = 0;
let charIndex = 0;

const typingText =
document.querySelector(".typing-text");

function typeEffect(){

  if(charIndex < roles[roleIndex].length){

    typingText.textContent +=
    roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,100);

  }

  else{

    setTimeout(eraseEffect,1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingText.textContent =
    roles[roleIndex].substring(0,charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect,50);

  }

  else{

    roleIndex++;

    if(roleIndex >= roles.length){

      roleIndex = 0;

    }

    setTimeout(typeEffect,300);

  }

}

typingText.textContent = "";

typeEffect();