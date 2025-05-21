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

// Optional: Hide menu buttons on desktop
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