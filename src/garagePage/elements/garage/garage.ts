// import createButton from '../create/createButton';
import createDiv from '../create/createDiv';
// import createElement from '../create/createElement';
// import {typePartElementGaragePage} from '../../interfaces';
// import { garageBlock } from './garageBlock/garageBlock';


const divGarage = new createDiv(['wrapper__div', 'garage']);
const divTitleGarage = new createDiv(['wrapper__div', 'title-garage'], 'Garage');
const divNumberPage = new createDiv(['wrapper__div','page1'], 'Page#1');



export const garage = [divGarage, [divTitleGarage, divNumberPage ]];
