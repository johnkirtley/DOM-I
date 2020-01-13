const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Creates navigation menu items
const navItems = document.querySelectorAll('a');

navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';


// Creates header title, image, and button content
const cta = document.querySelector('h1');
cta.textContent = 'dom is awesome';

const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started'

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Creates h4 titles
const contentTitles = document.querySelectorAll('h4');

contentTitles[0].textContent = 'Features';
contentTitles[1].textContent = 'About';
contentTitles[2].textContent = 'Services';
contentTitles[3].textContent = 'Product';
contentTitles[4].textContent = 'Vision';
contentTitles[5].textContent = 'Contact';

// Creates paragraph content
const paragraphs = document.querySelectorAll('p');
paragraphs[0].classList.add('features-content');
paragraphs[1].classList.add('about-content');
paragraphs[2].classList.add('services-content');
paragraphs[3].classList.add('product-content');
paragraphs[4].classList.add('vision-content');
paragraphs[5].classList.add('address');
paragraphs[6].classList.add('phone');
paragraphs[7].classList.add('email');
paragraphs[8].classList.add('footer-content');


const features = document.querySelector('.features-content');
features.append(siteContent["main-content"]["features-content"]);

const about = document.querySelector('.about-content');
about.append(siteContent["main-content"]["about-content"]);

const services = document.querySelector(".services-content");
services.append(siteContent["main-content"]["services-content"]);

const product = document.querySelector('.product-content');
product.append(siteContent["main-content"]["product-content"]);

const vision = document.querySelector('.vision-content');
vision.append(siteContent["main-content"]["vision-content"]);


// Sets middle image
const images = document.querySelectorAll('img');
const middleImage = images[2];

middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);