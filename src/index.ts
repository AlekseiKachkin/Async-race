import { createMainButtons } from './modules/createMainButtons';
import { createCarForm } from './modules/createCarForm';
import { updateCarForm } from './modules/UpdateCarForm';
import { renderControlButtons } from './modules/renderControlButtons';
import './styles.css';
import { getCars } from './modules/requests';

const BODY = document.body;
createMainButtons(BODY);
createCarForm(BODY);
updateCarForm(BODY);
renderControlButtons(BODY);
const MAIN = document.createElement('main');
MAIN.classList.add('container');
BODY.append(MAIN);
getCars();
