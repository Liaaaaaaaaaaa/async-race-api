import createButton from '../create/createButton';
import createDiv from '../create/createDiv';
import {typePartElementGaragePage} from '../../interfaces';



//----------- Select Page ----------------------
const divSelectPage = new createDiv(['wrapper__div', 'selectPage']);
const buttonToGarage = new createButton(['button', 'bright-color'], 'to garage', );
const buttonToWinners = new createButton(['button', 'bright-color'], 'to winners', );


export const selectPage: [typePartElementGaragePage, typePartElementGaragePage[]] = [divSelectPage, [buttonToGarage, buttonToWinners]]

