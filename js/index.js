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

navItems[0].classList.add('nav-services');
navItems[1].classList.add('nav-product');
navItems[2].classList.add('nav-vision');
navItems[3].classList.add('nav-features');
navItems[4].classList.add('nav-about');
navItems[5].classList.add('nav-contact')


const navServices = document.querySelector('.nav-services');
navServices.append(siteContent["nav"]["nav-item-1"]);
navServices.style.color = 'green';

const navProduct = document.querySelector('.nav-product');
navProduct.append(siteContent["nav"]["nav-item-2"]);
navProduct.style.color = 'green';

const navVision = document.querySelector('.nav-vision');
navVision.append(siteContent["nav"]['nav-item-3']);
navVision.style.color = 'green';

const navFeatures = document.querySelector('.nav-features');
navFeatures.append(siteContent["nav"]["nav-item-4"]);
navFeatures.style.color = 'green';

const navAbout = document.querySelector('.nav-about');
navAbout.append(siteContent["nav"]["nav-item-5"]);
navAbout.style.color = 'green';

const navContact = document.querySelector('.nav-contact');
navContact.append(siteContent["nav"]["nav-item-6"]);
navContact.style.color = 'green';


// Stretch Goal
const newButton = document.createElement('button');
newButton.textContent = 'Press Me';

newButton.addEventListener('click', function () {
  if (cta.style.color === 'black') {
    cta.style.color = 'red';
  } else if (cta.style.color === 'red') {
    cta.style.color = 'blue';
  } else {
    cta.style.color = 'black';
  }
})

const parentCTA = document.querySelector('.cta-text')
parentCTA.append(newButton);
// *****************


// Create new nav items

const history = document.createElement('a');
history.textContent = 'History';
history.style.color = 'green';

const parentNav = document.querySelector('nav');
parentNav.append(history);

const team = document.createElement('a');
team.textContent = 'Team';
team.style.color = 'green';

parentNav.prepend(team);


// Creates header title, image, and button content
const cta = document.querySelector('h1');
cta.append(siteContent["cta"]["h1"])

const ctaButton = document.querySelector('button');
ctaButton.append(siteContent["cta"]["button"]);

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Creates h4 titles
const contentTitles = document.querySelectorAll('h4');

contentTitles[0].classList.add('features-title')
contentTitles[1].classList.add('about-title');
contentTitles[2].classList.add('services-title');
contentTitles[3].classList.add('product-title');
contentTitles[4].classList.add('vision-title');
contentTitles[5].classList.add('contact-title');

const featuresTitle = document.querySelector('.features-title');
featuresTitle.append(siteContent["main-content"]["features-h4"]);

const aboutTitle = document.querySelector('.about-title');
aboutTitle.append(siteContent["main-content"]["about-h4"]);

const servicesTitle = document.querySelector('.services-title');
servicesTitle.append(siteContent["main-content"]["services-h4"]);

const productTitle = document.querySelector('.product-title');
productTitle.append(siteContent["main-content"]["product-h4"]);

const visionTitle = document.querySelector('.vision-title');
visionTitle.append(siteContent["main-content"]["vision-h4"]);

const contactTitle = document.querySelector('.contact-title');
contactTitle.append(siteContent["contact"]["contact-h4"]);

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


// Sets middle-content image
const images = document.querySelectorAll('img');
const middleImage = images[2];

middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Sets contact info
const addressInfo = document.querySelector('.address');
addressInfo.append(siteContent["contact"]["address"]);

const phoneNumber = document.querySelector('.phone');
phoneNumber.append(siteContent["contact"]["phone"]);

const email = document.querySelector('.email');
email.append(siteContent["contact"]["email"]);

// Sets footer content
const footer = document.querySelector('.footer-content');
footer.append(siteContent["footer"]["copyright"]);