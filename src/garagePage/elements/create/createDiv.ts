export class createDiv {
  _text?: string;
  _className?: string | string[] ;
  readonly _role?: string;
  readonly _type: string = 'div'

  constructor(className?: (string| string[]), text?: string, role?: string) {
    this._text = text;
    this._className = className;
    this._role = role;
  }

  create(): HTMLDivElement {
    const div = document.createElement('div');
    if (this._text) {
      div.textContent = this._text;
    }

    if (this._role) {
      div.setAttribute('role', this._role);
    }

    if (this._className && (typeof this._className === 'object')){
        this._className.forEach(item => div.classList.add(item));
    } 
    
    return div;
  }
}

export default createDiv