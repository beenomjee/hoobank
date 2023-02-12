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
