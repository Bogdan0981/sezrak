document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".faq-item-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var description = button
        .closest(".faq-item")
        .querySelector(".faq-item-descr");

      // Проверяем, активен ли уже элемент
      if (description.classList.contains("faq-item-descr__active")) {
        // Если активен, сначала плавно убираем
        description.style.maxHeight = description.scrollHeight + "px"; // Устанавливаем максимальную высоту до текущей высоты содержимого
        setTimeout(function () {
          description.classList.remove("faq-item-descr__active");
          description.style.maxHeight = null; // Сбрасываем стиль, чтобы CSS мог управлять анимацией закрытия
        }, 10); // Задержка для начала анимации сжатия
      } else {
        // Если не активен, активируем и плавно раскрываем
        description.classList.add("faq-item-descr__active");
        description.style.maxHeight = description.scrollHeight + "px"; // Анимируем до высоты содержимого
        // Сбрасываем инлайн стиль после завершения анимации, чтобы не мешать будущим изменениям высоты содержимого
        setTimeout(() => {
          description.style.maxHeight = null;
        }, 500); // Синхронизация с временем анимации CSS
      }

      // Переключаем класс для кнопки независимо от состояния описания
      button.classList.toggle("faq-item-button__active");
    });
  });
});
