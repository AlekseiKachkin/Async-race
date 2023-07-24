/* eslint-disable no-unused-vars */
import { Car } from '../types/types';
import { garageRender } from './garage';
import { carRender } from './carRender';
import { carContainer } from '../types/types';
import { Winners, Garage } from '../types/types';
import { winnersRender } from './winners';
export const baseURL = 'http://127.0.0.1:3000';

export enum Paths {
    Garage = '/garage',
    Winners = '/winners',
}

export const getCars = async () => {
    const response = await fetch(`${baseURL}${Paths.Garage}`);
    response.json().then((data: Garage) => garageRender(data));
};

export const getWinners = async () => {
    const response = await fetch(`${baseURL}${Paths.Winners}`);
    response.json().then((data: Winners) => winnersRender(data));
};

export const selectCar = async (event: Event) => {
    const target = event.target as HTMLElement;
    const parent = target.parentNode as carContainer;
    localStorage.setItem('update_id', parent.id);
    const response = await fetch(`${baseURL}${Paths.Garage}/${localStorage.getItem('update_id')}`);
    response.json().then((data) => fillUpdateCarForm(data));
};

export const fillUpdateCarForm = (car: Car) => {
    const carName = document.querySelector('#update-name') as HTMLInputElement;
    carName.value = car.name;
    const carColor = document.querySelector('#update-color') as HTMLInputElement;
    carColor.value = car.color;
    const updateButton = document.querySelector('#update-button') as HTMLInputElement;
    updateButton.addEventListener('click', changeCar);
};

export const changeCar = async () => {
    const carName = document.querySelector('#update-name') as HTMLInputElement;
    const carColor = document.querySelector('#update-color') as HTMLInputElement;
    const car = {
        name: carName.value,
        color: carColor.value,
        id: localStorage.getItem('update_id'),
    };
    await fetch(`${baseURL}${Paths.Garage}/${localStorage.getItem('update_id')}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    getCars();
    carName.value = '';
    carColor.value = '#ffffff';
    localStorage.removeItem('update_id');
};

export const addCar = async () => {
    const carName = document.querySelector('#create-name') as HTMLInputElement;
    const carColor = document.querySelector('#create-color') as HTMLInputElement;
    const car = {
        name: carName.value,
        color: carColor.value,
    };
    const response = await fetch(`${baseURL}${Paths.Garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    response.json().then((data) => carRender(data, document.querySelector('.cars-container') as HTMLElement));
    getCars();
};

export const deleteCar = async (event: Event) => {
    const target = event.target as HTMLElement;
    const parent = target.parentNode as carContainer;
    const id = parent.id;
    await fetch(`${baseURL}${Paths.Garage}/${id}`, {
        method: 'DELETE',
    });
    getCars();
};
