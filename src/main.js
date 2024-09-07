document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            
            // Remove a classe 'shows__list--is-active' de todas as listas
            escondeTodasAbas();
            
            // Adiciona a classe 'shows__list--is-active' à lista alvo
            aba.classList.add('shows__list--is-active');
            
            // Remove a classe 'shows__tabs__button--is-active' de todos os botões
            removeActiveClassFromButtons();
            
            // Adiciona a classe 'shows__tabs__button--is-active' ao botão clicado
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }
});

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeActiveClassFromButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
