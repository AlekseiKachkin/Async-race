import { addCar } from './requests';
export const createCarForm = (parent: HTMLElement) => {
    const createCar = document.createElement('div');
    createCar.classList.add('create-container');
    parent.append(createCar);

    const createName = document.createElement('input');
    createName.type = 'text';
    createName.size = 13;
    createName.id = 'create-name';
    createCar.append(createName);

    const createColor = document.createElement('input');
    createColor.type = 'color';
    createColor.value = '#ffffff';
    createColor.id = 'create-color';
    createCar.append(createColor);

    const createButton = document.createElement('button');
    createButton.classList.add('server-button');
    createButton.innerText = 'CREATE';
    createButton.addEventListener('click', addCar);
    createCar.append(createButton);
};
