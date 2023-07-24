import { createMainButtons } from './modules/createMainButtons';
import './styles.css';
import { getCars } from './modules/requests';

const BODY = document.body;
createMainButtons(BODY);
const wrap = document.createElement('div');
wrap.classList.add('wrap');
BODY.append(wrap);
getCars();
