
let oLastModif = new Date(document.lastModified);

document.getElementById("lastUpdated").textContent = oLastModif;

const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const navMenu = document.getElementById("navMenu");

function openMenu() {
    navMenu.classList.remove("open");
    menuOpenBtn.style.display = "none";
    menuCloseBtn.style.display = "inline-block";
}

function closeMenu() {
    navMenu.classList.add("open");
    menuOpenBtn.style.display = "inline-block";
    menuCloseBtn.style.display = "none";
}

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

function handleResize() {
    if (window.innerWidth > 980) {
        navMenu.classList.remove("open");
        menuOpenBtn.style.display = "none";
        menuCloseBtn.style.display = "none";
    } else {
        menuOpenBtn.style.display = navMenu.classList.contains("open") ? "inline-block" : "none";
        menuCloseBtn.style.display = navMenu.classList.contains("open") ? "none" : "inline-block";
    }
}

window.addEventListener("resize", handleResize);
handleResize();

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Salvador El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2015, June, 21",
    area: 27986,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg"
    
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21085,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
  }
];

// Function to create temple card HTML
function createTempleCard(temple) {
    return `
        <div class="temple-card">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>
    `;
}

// Function to display temples
function displayTemples(templesToShow) {
    const main = document.querySelector('main');
    const templesContainer = document.getElementById('temples-container') || createTemplesContainer();
    
    templesContainer.innerHTML = '';
    
    templesToShow.forEach(temple => {
        templesContainer.innerHTML += createTempleCard(temple);
    });
}

// Function to create temples container if it doesn't exist
function createTemplesContainer() {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = 'temples-container';
    container.className = 'temples-grid';
    main.appendChild(container);
    return container;
}

// Function to get dedication year from date string
function getDedicationYear(dedicatedString) {
    return parseInt(dedicatedString.split(',')[0]);
}

// Filter functions
function filterOldTemples() {
    return temples.filter(temple => getDedicationYear(temple.dedicated) < 1900);
}

function filterNewTemples() {
    return temples.filter(temple => getDedicationYear(temple.dedicated) > 2000);
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

// Function to update page title
function updatePageTitle(title) {
    document.querySelector('main h1').textContent = title;
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.textContent.toLowerCase();
            let templesToShow = [];
            let pageTitle = '';
            
            switch(filter) {
                case 'home':
                    templesToShow = temples;
                    pageTitle = 'Home';
                    break;
                case 'old':
                    templesToShow = filterOldTemples();
                    pageTitle = 'Old Temples';
                    break;
                case 'new':
                    templesToShow = filterNewTemples();
                    pageTitle = 'New Temples';
                    break;
                case 'large':
                    templesToShow = filterLargeTemples();
                    pageTitle = 'Large Temples';
                    break;
                case 'small':
                    templesToShow = filterSmallTemples();
                    pageTitle = 'Small Temples';
                    break;
                default:
                    templesToShow = temples;
                    pageTitle = 'Home';
            }
            
            updatePageTitle(pageTitle);
            displayTemples(templesToShow);
            
            // Close menu on mobile after selection
            if (window.innerWidth <= 980) {
                closeMenu();
            }
        });
    });
    
    // Display all temples on page load
    displayTemples(temples);
});