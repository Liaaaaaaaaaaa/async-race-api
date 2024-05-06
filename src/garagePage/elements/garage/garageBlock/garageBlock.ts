import createElement from '../../create/createElement';



const divGarageBlock = new createElement('div', ['wrapper__div', 'divGarageBlock'] );

// ------------Cars--- buttons-------------
const divSelectRemoveTitleContainer = new createElement('div', ['wrapper__div', 'SelectRemoveTitleContainer']);
const selectButton = new createElement('button', ['button', 'selectButton'], 'SELECT');
const removeButton = new createElement('button', ['button', 'removeButton'], 'REMOVE');
const pNameCar = new createElement('p', ['nameCar'], 'Tesla');

export const selectRemoveTitleContainer = [divSelectRemoveTitleContainer, [selectButton, removeButton, pNameCar]];

// --- Cars---- road------------
const divRoadCarBlock =  new createElement ('div', ['wrapper__div', 'roadCarBlock', ]);
const aButton = new createElement('button', [ 'aButton'], 'A');
const bButton = new createElement('button', [ 'bButton'], 'B');


const divRoadCar = new createElement('div', ['wrapper__div', 'roadCar' ]);
const imgCar = new createElement('img', ['imgCar'], '', ['src', 'images/3215644.svg'], 'yellow') ;
const roadCar = [divRoadCar, [imgCar]];

console.log(roadCar);


export const roadCarBlock = [divRoadCarBlock, [aButton, bButton,  imgCar]]



export const garageBlock = [divGarageBlock, [selectRemoveTitleContainer, roadCarBlock]];

