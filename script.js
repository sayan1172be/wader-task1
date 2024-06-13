"use strict";

// console.log("hello");
const navLinks = document.querySelectorAll(".nav__link");
const footLinks = document.querySelectorAll(".footer__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

footLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const header = document.querySelector(".header__container");
const nav = document.querySelector(".nav__main");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

document.querySelector(".mount-btn").addEventListener("click", function () {
 /* window.location.href = "FAPROJECT/mount.html","_blank";*/
  window.open('FAPROJECT/mount.html', '_blank');
});
document.querySelector(".sea-btn").addEventListener("click", function () {
  window.open('FAPROJECT/sea.html', '_blank');
});
document.querySelector(".desert-btn").addEventListener("click", function () {
  window.open('FAPROJECT/desert.html', '_blank');
});
