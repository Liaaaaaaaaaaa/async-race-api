
import {typePartElementGaragePage} from './interfaces';
import {selectPage} from './elements/selectPage/selectPage';
import {createCar, updateCar  , selectMainAction } from './elements/controlBlock/controlBlock';
import {garage} from './elements/garage/garage';
import {selectRemoveTitleContainer } from './elements/garage/garageBlock/garageBlock';
import {roadCarBlock } from './elements/garage/garageBlock/garageBlock';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
const massiveElementsGaragePage:  ([{  create(): HTMLElement}, typePartElementGaragePage[]]| [typePartElementGaragePage, typePartElementGaragePage[]]) [] | any  = [selectPage, createCar, updateCar, selectMainAction, garage, selectRemoveTitleContainer, roadCarBlock];

// console.log(massiveElementsGaragePage)



export default massiveElementsGaragePage