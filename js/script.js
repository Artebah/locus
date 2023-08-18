const navLinks = document.querySelectorAll(".header-list__link");

window.onload = () => {
  navLinks.forEach((navLink) => {
    if (window.location.href != navLink.href) {
      window.location.href = navLinks[0].href;
      navLinks[0].classList.add("active");
    }
  });
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (event) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    setTimeout(() => {
      if (window.location.href == navLink.href) {
        navLink.classList.add("active");
      }
    }, 0);
  });
});

// header
const menuIcon = document.querySelector(".menu__icon");
const headerButton = document.querySelector(".header-auth");

if (window.innerWidth < 2000) {
  headerButton.after(menuIcon);
}

if (window.innerWidth < 600) {
  const headerList = document.querySelector(".header-list");
  const headerAuthButton = document.querySelector(".header-auth");
  headerList.append(headerAuthButton);
}

// menu burger

const menuBurger = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

menuBurger.addEventListener("click", function (e) {
  menuBurger.classList.toggle("active");
  menuBody.classList.toggle("active");
  document.body.classList.toggle("lock");
});
