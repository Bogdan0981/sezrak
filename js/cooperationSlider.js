document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".cooperation-item");
  const totalItems = items.length;
  const numberDisplay = document.querySelector(".cooperation-slider-numbers");
  const nextButton = document.querySelector(".button-slider");

  function updateSliderVisibility() {
    const displayStyle = window.matchMedia("(min-width: 360px)").matches
      ? "flex"
      : "none";
    items.forEach((item) => {
      item.style.display = displayStyle; // Обновляем видимость всех элементов в соответствии с условием
    });
    // Если элементы скрыты, не обновляем номер слайда
    if (displayStyle === "flex") {
      numberDisplay.textContent = `${currentIndex + 1}/${totalItems}`;
    }
  }

  function updateSlider() {
    items.forEach((item) => {
      item.style.display = "none"; // Сначала скрываем все элементы
    });
    if (items.length > 0) {
      items[currentIndex].style.display = "flex"; // Показываем текущий элемент
      numberDisplay.textContent = `${currentIndex + 1}/${totalItems}`; // Обновляем номер слайда
    }
  }

  function handleNextButtonClick() {
    if (!window.matchMedia("(min-width: 360px)").matches) return; // Прекращаем выполнение, если условие не выполняется
    currentIndex = (currentIndex + 1) % totalItems; // Перемещаемся к следующему элементу
    updateSlider(); // Обновляем слайдер
  }

  nextButton.addEventListener("click", handleNextButtonClick);

  window.addEventListener("resize", function () {
    // При каждом изменении размера проверяем, нужно ли обновить видимость слайдера
    updateSliderVisibility();
  });

  updateSliderVisibility(); // Инициализация видимости слайдера при загрузке страницы
});
