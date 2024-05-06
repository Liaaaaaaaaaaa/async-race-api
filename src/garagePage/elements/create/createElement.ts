import { car } from '../../../images/sportCar';


export class createElement {
  readonly _type: string;
  _className?: string[];
  _text?: string;
  readonly _attribute?: string[];
  _color?: string;


  constructor(type: string, className?: string[], text?: string, attribute?: string[], color?: string) {
    this._type = type;
    this._text = text;
    this._className = className;
    this._attribute = attribute;
    this._color = color;
  }

  create(): HTMLElement {
    const element = document.createElement(this._type);
    if (this._text) {
      element.textContent = this._text;
    }

    if (this._attribute) {
      element.setAttribute(this._attribute[0], this._attribute[1]);
    }

    if (this._className && (typeof this._className === 'object')) {
      this._className.forEach(item => element.classList.add(item));
    }
    if (this._color) {
      element.innerHTML = car.replace('colorCar', '#ffffff');
    }

    return element;
  }
}

export default createElement