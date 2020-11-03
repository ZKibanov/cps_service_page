const btnMore = document.querySelector('.brands__btn-more ');
let minimizer = document.querySelector('.brands-list_minimizer');

 btnMore.addEventListener('click', function () {
    btnMore.classList.toggle('btn-more_opened');
    minimizer.classList.toggle('brands-list_minimized');

    if (minimizer.classList.contains('brands-list_minimized')) {
        btnMore.textContent = 'Показать все';
    } else {
        btnMore.textContent = 'Скрыть';
    }
})



