import './style.scss';
import massiveElementsGaragePage from './garagePage/garagePage';
import { typePartElementGaragePage } from './garagePage/interfaces';



const body = document.querySelector('body') as HTMLElement;


let divParentHTML: ChildNode | null | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addElementFromMassive(m: any) {

  divParentHTML = document.querySelector('.' + m[0]._className[1]);

  for (let a = 1; a < m.length; a += 1) {
    if (Array.isArray(m[a])) {
      m[a].forEach((e: any[]) => {
        divParentHTML?.appendChild(e[0].create());
        addElementFromMassive(e[a]);
      })
    }
    else {
      divParentHTML?.appendChild(m[a])
    }
  }
}


function addElementGaragePage(element:
  [typePartElementGaragePage, [typePartElementGaragePage]], num: number
) {

  body.append(element[0].create());

  element[1].forEach(e => {

    if (Array.isArray(e)) {

      body.children[num].append(e[0].create());

      // console.log(element);
      // addElementFromMassive(e);
    } else {
      body.children[num].append(e.create());
    }
  });

}

if (massiveElementsGaragePage) {
  for (let a = 0; a < massiveElementsGaragePage.length; a += 1) {
    addElementGaragePage(massiveElementsGaragePage[a], a)
  }
}

