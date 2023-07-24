export const renderControlButtons = (parent: HTMLElement) => {
    const controlContainer = document.createElement('div');
    controlContainer.classList.add('control-container');
    parent.append(controlContainer);

    const race = document.createElement('input');
    race.classList.add('render-button');
    race.type = 'button';
    race.value = 'RACE';
    race.id = 'race-btn';
    controlContainer.append(race);

    const reset = document.createElement('input');
    reset.classList.add('render-button');
    reset.type = 'button';
    reset.value = 'RESET';
    reset.id = 'reset-btn';
    controlContainer.append(reset);

    const generateCars = document.createElement('input');
    generateCars.classList.add('server-button');
    generateCars.type = 'button';
    generateCars.value = 'GENERATE CARS';
    controlContainer.append(generateCars);
};
