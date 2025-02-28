AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
const nav = document.querySelector("nav");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const cards = document.querySelectorAll(".card");
const closeBtns = document.querySelectorAll(".modal-close");
const submitBtn = document.querySelector(".submitBtn");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.style.display = "flex";
  nav.style.top = "0";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.style.top = "-200%";
});

// console.log(card);
console.log(213);

cards.forEach(function (btn) {
  console.log(btn);
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    console.log(modal);
    document.getElementById(modal).style.display = "block";
  };
});

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    btn.closest(".modal").style.display = "none";
  };
});

submitBtn.addEventListener("click", (e) => {
  const nameForm = document.getElementById("name").value;
  const emailForm = document.getElementById("email").value;
  const textForm = document.getElementById("message").value;
  const body =
    "Name: " +
    nameForm +
    "<br/> Email: " +
    emailForm +
    "<br/> Message: " +
    textForm;

  e.preventDefault();
  Email.send({
    SecureToken: "56101168-c68b-49db-8813-944423ea7d69",
    To: "stevet@siriusdatasolutions.com",
    From: "stevet@siriusdatasolutions.com",
    Subject: "Contact Message From Website",
    Body: body,
  }).then((message) => alert(message));
});
