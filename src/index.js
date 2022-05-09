const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");
const navNames = Object.values(siteContent['nav'])
for(let i = 0; i< navLinks.length; i++){
  navLinks[i].textContent = navNames[i];
  navLinks[i].classList.add("italic")
}

const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src",siteContent["images"]["logo-img"]);

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

const titleButton = document.querySelector("button");
titleButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["images"]["cta-img"]);

const h4Content = document.querySelectorAll('.text-content h4');
h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];

const pContent = document.querySelectorAll('.text-content p');
pContent[0].textContent = siteContent["main-content"]["features-content"]
pContent[1].textContent = siteContent["main-content"]["about-content"]
pContent[2].textContent = siteContent["main-content"]["services-content"]
pContent[3].textContent = siteContent["main-content"]["product-content"]
pContent[4].textContent = siteContent["main-content"]["vision-content"]

document.getElementById('middle-img').setAttribute('src', siteContent['images']['accent-img']);
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

const footerLink = document.querySelector("footer a");
footerLink.classList.add("bold");
footerLink.textContent = siteContent["footer"]["copyright"];