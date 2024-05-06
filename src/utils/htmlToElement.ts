export default function htmlToElement (htmlElement: string) {
  const template = document.createElement('template');
  template.innerHTML = htmlElement;
  return template.content.firstChild
}
