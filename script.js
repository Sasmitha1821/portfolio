/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =================================
   CLOSE MENU AFTER CLICK
================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =================================
   SCROLL REVEAL
================================= */

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(function (section) {

    section.classList.add("reveal");

    revealObserver.observe(section);

});


/* =================================
   NAVBAR ACTIVE LINK
================================= */

const allSections = document.querySelectorAll("header, section");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    allSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/* =================================
   IMAGE FALLBACK
================================= */

const profileImage = document.querySelector(".profile-photo img");

profileImage.addEventListener("error", function () {

    this.style.display = "none";

    this.parentElement.innerHTML = "<span class='image-placeholder'>S</span>";

});