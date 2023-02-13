// header
let nav = document.querySelector("nav.right");
let isNavOpen = false;
const openNav = () => {
  if (isNavOpen) {
    nav.classList.remove("open");
    isNavOpen = false;
  } else {
    nav.classList.add("open");
    isNavOpen = true;
  }
};
// end-header

// open dropdown menu
const menus = document.querySelectorAll(".globalMenu");
const allButtons = document.querySelectorAll(".globalMenu button");

function openMenu(num) {
  let isOpen = menus[num].classList.contains("open");
  menus.forEach((menu) => menu.classList.remove("open"));
  if (!isOpen) {
    menus[num].classList.add("open");
  }
}

Array.from(allButtons).forEach((button) =>
  button.addEventListener("click", () =>
    menus.forEach((menu) => menu.classList.remove("open"))
  )
);
