import { Garage } from '../types/types';
import { createCarForm } from './createCarForm';
import { updateCarForm } from './UpdateCarForm';
import { renderControlButtons } from './renderControlButtons';
import { carRender } from './carRender';
export const garageRender = (data: Garage) => {
    const wrap = document.querySelector('.wrap') as HTMLElement;
    createCarForm(wrap);
    updateCarForm(wrap);
    renderControlButtons(wrap);
    let main = document.querySelector('.garage-container') as HTMLElement;
    if (main !== null) {
        main.innerHTML = '';
    } else {
        main = document.createElement('main');
        main.classList.add('garage-container');
        wrap.append(main);
    }
    const TITLE = document.createElement('h1');
    TITLE.classList.add('garage-title');
    TITLE.textContent = `GARAGE (${data.length})`;
    main.append(TITLE);
    const GARAGE = document.createElement('div');
    GARAGE.classList.add('cars-container');
    main.append(GARAGE);

    for (const car of data) {
        carRender(car, GARAGE);
    }
};
