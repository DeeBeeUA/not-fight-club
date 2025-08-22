import '/src/sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const registrationButton = document.querySelector('.registration__button');
    const changeNameContent = document.querySelector('.change-name');
    const editNameButton = document.querySelector('.edit-name');
    const nameStorage = localStorage.getItem('playerName');
    const navSetting = document.querySelector('.navigation__settings');
    const navCharacter = document.querySelector('.navigation__user')
    const navHome = document.querySelector('.navigation__home');
    const currentPage = window.location.pathname;
    const yourName = document.querySelector('.yourName');
    const fightButton = document.querySelector('.home__button');

    if (!nameStorage && currentPage !== '/not-fight-club/') {
        window.location.href = '/not-fight-club/';
    } else if (nameStorage && currentPage === '/not-fight-club/') {
        window.location.href = '/not-fight-club/home.html'

    }

    // Кнопка регистрации
    if (registrationButton) {
        registrationButton.addEventListener('click', () => {
            const input = document.querySelector('.registration__input');
            const name = input?.value.trim();

            if (name) {
                localStorage.setItem('playerName', name);
                window.location.href = '/not-fight-club/home.html';
            } else {
                alert('Пожалуйста, введите имя');
            }
        });
    }

    // Кнопка редактирования имени
    if (editNameButton && changeNameContent) {
        const saveButton = document.createElement('button');
        const newNameInput = document.createElement('input');

        saveButton.classList.add('save-button');
        saveButton.textContent = 'Save';
        newNameInput.placeholder = 'Введите имя';
        newNameInput.classList.add('new-name');

        changeNameContent.appendChild(newNameInput);
        changeNameContent.appendChild(saveButton);

        // Начальное состояние: скрыты
        saveButton.style.display = 'none';
        newNameInput.style.display = 'none';

        editNameButton.addEventListener('click', () => {
            yourName.style.display = 'none';
            editNameButton.style.display = 'none';
            newNameInput.style.display = 'inline-block';
            saveButton.style.display = 'inline-block';
        });



        saveButton.addEventListener('click', () => {
            const newName = newNameInput.value.trim();
            if (newName) {
                localStorage.setItem('playerName', newName);
                yourName.textContent = newName;
            }

            newNameInput.value = '';
            newNameInput.placeholder = 'Введите имя';


            saveButton.style.display = 'none';
            newNameInput.style.display = 'none';
            yourName.style.display = 'inline-block';
            editNameButton.style.display = 'inline-block';
        });
    }

    //s

    // Подставляем имя
    if (yourName && nameStorage) {
        yourName.textContent = nameStorage;
    }

    // Кнопка перехода в настройки
    if (navSetting) {
        navSetting.addEventListener('click', () => {
            window.location.href = '/not-fight-club/settings.html';
        });
    }
    // Кнопка перехода в персонажа
    if (navCharacter) {
        navCharacter.addEventListener('click', () => {
            window.location.href = '/not-fight-club/character.html';
        })
    }

    if (navHome) {
        navHome.addEventListener('click', () => {
            window.location.href = '/not-fight-club/home.html';
        })
    }


    // Кнопка файт
    if (fightButton) {
        fightButton.addEventListener('click', () => {
            window.location.href = '/not-fight-club/battle.html';
        })
    }
});


