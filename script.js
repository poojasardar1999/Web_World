// hamburger-menu
const menuIcon = document.querySelector(".menu-item.hamburger-menu");
const sideNav = document.querySelector(".side-nav");

menuIcon.addEventListener("click", function () {
  sideNav.classList.toggle("open");
});

//  close menu
const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", function () {
  sideNav.classList.remove("open");
});

/**
 * Icon image paths
 */
const brandingOrangeIcon = "images/content with color_files/branding-image.png";
const brandingWhiteIcon = "images/branding-1.webp";
const smmWhiteIcon = "images/content with color_files/social-media-white.png";
const smmOrangeIcon = "images/content with color_files/social-media-icon.png";
const semOrangeIcon = "images/content with color_files/ppc-icon.png";
const semWhiteIcon = "images/content with color_files/ppc-icon-white.png";
const contentOrangeIcon = "images/content with color_files/content-design.png";
const contentWhiteIcon = "images/content with color_files/content-white.png";
const cgvOrangeIcon = "images/content with color_files/graphics-design.png";
const cgvWhiteIcon =
  "images/content with color_files/graphics-design-white.png";

const boxes = document.querySelectorAll(".our-specialization-sector");

boxes.forEach((box, index) => {
  let img = box.querySelector("img");
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "#f14617";
    if (index === 0) {
      img.src = brandingWhiteIcon;
    } else if (index === 1) {
      img.src = smmWhiteIcon;
    } else if (index === 2) {
      img.src = semWhiteIcon;
    } else if (index === 3) {
      img.src = contentWhiteIcon;
    } else if (index === 4) {
      img.src = cgvWhiteIcon;
    } else if (index === 5) {
      // img.src = ;
    }
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "#000";
    if (index === 0) {
      img.src = brandingOrangeIcon;
    } else if (index === 1) {
      img.src = smmOrangeIcon;
    } else if (index === 2) {
      img.src = semOrangeIcon;
    } else if (index === 3) {
      img.src = contentOrangeIcon;
    } else if (index === 4) {
      img.src = cgvOrangeIcon;
    } else if (index === 5) {
      // img.src = ;
    }
  });
});
