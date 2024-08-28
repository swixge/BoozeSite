const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Функция для переключения видимости модального окна
const toggleModal = () => {
  modal.classList.toggle('is-hidden');
};

// Открытие модального окна
modalBtnOpen.addEventListener('click', toggleModal);

// Закрытие модального окна
modalBtnClose.addEventListener('click', toggleModal);
