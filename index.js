const menuEl = document.querySelector(".menu");
const menutextEl = document.querySelector(".menu p");
const sociallistEl = document.querySelector(".social-list");
const liELs = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", () => {
    sociallistEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liELs.forEach((liEl) => {
    liEl.addEventListener("click", () => {
        menutextEl.innerHTML = liEl.innerHTML;
        sociallistEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})
