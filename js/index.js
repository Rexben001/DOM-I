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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const IteratorFunc = (selector, pos, obj) => {
  for (let i = 0; i < obj.length; i++)
{
  selector[pos].children[i].textContent = obj[i];
}
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll('nav a');

const siteContentIterate = Object.values(siteContent.nav);

for (let i = 0; i < navItems.length; i++)
{
  navItems[i].textContent = siteContentIterate[i];
  navItems[i].classList.add('green');
}
const nav = document.querySelector('nav');

const anchorHome = document.createElement('a');
anchorHome.setAttribute('class', 'green');
anchorHome.textContent = 'Home';
anchorHome.setAttribute('href', '#');
nav.prepend(anchorHome);

const anchorSiteMap = document.createElement('a');
anchorSiteMap.setAttribute('class', 'green');
anchorSiteMap.textContent = 'Sitemap';
anchorSiteMap.setAttribute('href', '#');
nav.appendChild(anchorSiteMap);


const ctaText = document.querySelector('.cta-text h1');
const splittedValue = (siteContent.cta.h1).split(' ');

const DOMValue = `${splittedValue[0]} <br /> ${splittedValue[1]} <br /> ${splittedValue[2]}`;
ctaText.innerHTML = DOMValue;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const headerImage = document.getElementById('cta-img');
headerImage.src = siteContent.cta["img-src"];

const topContentSelector = document.querySelectorAll('.top-content .text-content');


const mainObjects = Object.values(siteContent["main-content"]);

 
const textContentFeatures = [mainObjects[0], mainObjects[1]];
IteratorFunc(topContentSelector, 0, textContentFeatures);

const textContentAbout = [mainObjects[2], mainObjects[3]];
IteratorFunc(topContentSelector, 1, textContentAbout);

const middleImg = document.getElementById('middle-img');
middleImg.src = mainObjects[4];


const bottomContentSelector = document.querySelectorAll('.bottom-content .text-content');

const bottomContentServices = [mainObjects[5], mainObjects[6]];
IteratorFunc(bottomContentSelector, 0, bottomContentServices);

const bottomContentProducts = [mainObjects[7], mainObjects[8]];
IteratorFunc(bottomContentSelector, 1, bottomContentProducts);

const bottomContentVision = [mainObjects[9], mainObjects[10]];
IteratorFunc(bottomContentSelector, 2, bottomContentVision);

const contactSelector = document.querySelectorAll('.contact');
const contactObj = Object.values(siteContent.contact);
IteratorFunc(contactSelector, 0, contactObj);
