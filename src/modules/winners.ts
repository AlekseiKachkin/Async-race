import { Winners, Winner, Car } from '../types/types';
import { carIMG } from './carImg';
import { baseURL, Paths } from './requests';
const createComponent = (tag: string, className = '', content: string) => {
    const component = document.createElement(tag);
    if (className) {
        component.classList.add(className);
    }
    component.innerHTML = content;
    return component;
};
export const winnersRender = (data: Winners) => {
    const wrap = document.querySelector('.wrap') as HTMLElement;
    wrap.innerHTML = '';
    const TITLE = document.createElement('h1');
    TITLE.classList.add('winners-title');
    TITLE.textContent = `Winners (${data.length})`;
    wrap.append(TITLE);
    const table = document.createElement('table');
    table.classList.add('winners-table');
    wrap.append(table);
    const thead = createComponent('thead', 'winners-head', '');
    table.append(thead);
    //header
    const header = document.createElement('tr');
    thead.append(header);
    const numHeader = createComponent('th', '', 'Number');
    header.append(numHeader);
    const carHeader = createComponent('th', '', 'Car');
    header.append(carHeader);
    const nameHeader = createComponent('th', '', 'Name');
    header.append(nameHeader);
    const winsHeader = createComponent('th', '', 'Wins');
    header.append(winsHeader);
    const timeHeader = createComponent('th', '', 'Best time (seconds)');
    header.append(timeHeader);

    const tbody = document.createElement('tbody');
    table.append(tbody);
    for (const winner of data) {
        createWinner(winner, tbody);
    }
};

async function createWinner(winner: Winner, parent: HTMLElement) {
    const TR = document.createElement('tr');
    parent.append(TR);

    const ID = document.createElement('td');
    ID.innerText = String(winner.id);
    TR.append(ID);

    const car = document.createElement('td');
    const response = await fetch(`${baseURL}${Paths.Garage}/${winner.id}`);
    const data = response.json().then((data: Car) => data);
    car.innerHTML = carIMG((await data).color);
    TR.append(car);

    const name = document.createElement('td');
    name.innerText = (await data).name;
    TR.append(name);

    const wins = document.createElement('td');
    wins.innerText = String(winner.wins);
    TR.append(wins);

    const time = document.createElement('td');
    time.innerText = String(winner.time);
    TR.append(time);
}
