import { getCars, getWinners } from './requests';
export const createMainButtons = (parent: HTMLElement) => {
    const mainButtonsContainer = document.createElement('div');
    mainButtonsContainer.classList.add('main-buttons-container');
    parent.append(mainButtonsContainer);
    const garageButton = document.createElement('button');
    garageButton.classList.add('render-button');
    garageButton.innerText = 'TO GARAGE';
    garageButton.addEventListener('click', getCars);
    mainButtonsContainer.append(garageButton);

    const winnersButton = document.createElement('button');
    winnersButton.innerText = 'TO WINNERS';
    winnersButton.classList.add('render-button');
    winnersButton.addEventListener('click', getWinners);
    mainButtonsContainer.append(winnersButton);
};
