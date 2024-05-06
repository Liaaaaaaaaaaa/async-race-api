import createButton from '../create/createButton';
import createDiv from '../create/createDiv';
import createElement from '../create/createElement';
import { typePartElementGaragePage } from '../../interfaces';



// -----------Create Car----------------
const divCreateCar = new createDiv(['createCar', 'wrapper__div']);
const inputNameCar = new createElement('input', ['input', 'inputNameCar']);
const inputColorCar = new createElement('input', ['input', 'inputColorCar'], '', ['type', 'colour']);
const buttonCreateCar = new createButton(['button'], 'CREATE')

export const createCar: [{ create(): HTMLElement }, typePartElementGaragePage[]] = [divCreateCar, [inputNameCar, inputColorCar, buttonCreateCar]];

//-----------Update -- Car----------------
const divUpdateCar = new createDiv(['updateCar', 'wrapper__div']);
const inputNameCar2 = new createElement('input', ['input', 'inputNameCar2']);
const inputColorCar2 = new createElement('input', ['input', 'inputColorCar2'], '', ['type', 'colour']);
const buttonUpdateCar = new createButton(['button'], 'UPDATE')

export const updateCar: [{ create(): HTMLElement }, typePartElementGaragePage[]] = [divUpdateCar, [inputNameCar2, inputColorCar2, buttonUpdateCar]];

// -----------Select --main----action-------------
const divselectMainAction = new createDiv(['selectMainAction', 'wrapper__div']);
const buttonRaceCars = new createButton(['button'], 'RACE');
const buttonResetCars = new createButton(['button'], 'RESET');
const buttonGenerateCars = new createButton(['button'], 'GENERATE CARS');


export const selectMainAction = [divselectMainAction, [buttonRaceCars, buttonResetCars, buttonGenerateCars]];


