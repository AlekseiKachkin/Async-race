import { deleteCar, selectCar } from './requests';
import { Car } from '../types/types';
import { carIMG } from './carImg';
import { flag } from './flag';
export const carRender = (car: Car, parent: HTMLElement) => {
    const carContainer = document.createElement('div');
    carContainer.classList.add('car-container');
    carContainer.id = `${car.id}`;
    parent.append(carContainer);

    const selectBtn = document.createElement('button');
    selectBtn.textContent = 'SELECT';
    selectBtn.value = `${car.id}`;
    selectBtn.addEventListener('click', selectCar);
    carContainer.append(selectBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'REMOVE';
    removeBtn.value = `${car.id}`;
    removeBtn.addEventListener('click', deleteCar);
    carContainer.append(removeBtn);

    const carName = document.createElement('span');
    carName.classList.add('car-title');
    carName.textContent = `${car.name}`;
    carContainer.append(carName);

    const track = document.createElement('div');
    track.classList.add('track');
    carContainer.append(track);

    const startBtn = document.createElement('button');
    startBtn.textContent = 'A';
    track.append(startBtn);

    const retireBtn = document.createElement('button');
    retireBtn.textContent = 'B';
    track.append(retireBtn);

    const carImage = document.createElement('div');
    carImage.classList.add('car-image');
    carImage.innerHTML = carIMG(car.color);
    track.append(carImage);

    const finish = document.createElement('div');
    finish.classList.add('finish');
    finish.innerHTML = flag;
    track.append(finish);
};
