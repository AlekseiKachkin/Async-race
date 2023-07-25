export const updateCarForm = (parent: HTMLElement) => {
    const updateCar = document.createElement('div');
    updateCar.classList.add('update-container');
    parent.append(updateCar);

    const updateName = document.createElement('input');
    updateName.type = 'text';
    updateName.size = 13;
    updateName.disabled = true;
    updateName.id = 'update-name';
    updateCar.append(updateName);

    const updateColor = document.createElement('input');
    updateColor.type = 'color';
    updateColor.disabled = true;
    updateColor.value = '#ffffff';
    updateColor.id = 'update-color';
    updateCar.append(updateColor);

    const updateButton = document.createElement('input');
    updateButton.classList.add('server-button');
    updateButton.disabled = true;
    updateButton.id = 'update-button';
    updateButton.type = 'button';
    updateButton.value = 'UPDATE';
    updateCar.append(updateButton);
};
