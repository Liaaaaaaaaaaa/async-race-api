

export class createButton {
  _text: string;
  _className: string[] | string;
  readonly _role?: string;
  readonly _type: string = 'button'

  constructor( className: (string[] | string), text: string, role?: string) {
    this._text = text;
    this._className = className;
    this._role = role;
  }

  create(): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = this._text;
    if (this._role) {
      button.setAttribute('role', this._role);
    }

    if (this._className && typeof this._className === 'object') {
      this._className.forEach(item => button.classList.add(item));
    }

    return button
  }
}



export default createButton