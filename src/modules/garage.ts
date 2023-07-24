import { Garage } from '../types/types';
import { carRender } from './carRender';
export const garageRender = (data: Garage) => {
    const MAIN = document.querySelector('.container') as HTMLElement;
    MAIN.innerHTML = '';
    const TITLE = document.createElement('h1');
    TITLE.classList.add('garage-title');
    TITLE.textContent = `GARAGE (${data.length})`;
    MAIN.append(TITLE);
    const GARAGE = document.createElement('div');
    GARAGE.classList.add('cars-container');
    MAIN.append(GARAGE);

    for (const car of data) {
        carRender(car, GARAGE);
    }
};
