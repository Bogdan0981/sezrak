const burger = document.querySelector(".header-burger");

const list = document.querySelector(".header-select");

const items = document.querySelectorAll(".header-burger-item");

burger.onclick = () => {
  list.classList.toggle("header-select__active");

  items.forEach((item) => {
    item.classList.toggle("header-burger-item__active");
  });
};
