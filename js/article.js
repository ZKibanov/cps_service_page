let articleButton = document.querySelector('.article__btn-more');
let hiddenText = document.querySelector('.article__hidden-text');
articleButton.addEventListener('click', function () {
    articleButton.classList.toggle('btn-more_opened');
    hiddenText.classList.toggle('hidden');

    if (hiddenText.classList.contains('hidden')) {
        articleButton.textContent = 'Читать далее';
    } else {
        articleButton.textContent = 'Скрыть';
    }
})
