export default class Field {
  constructor(element, width, height) {
    this._element = element;
    this.width = width;
    this.height = height  
  }

  fieldGenerator() {
    for (let index = 0; index < this.width; index++) {
      let width = document.createElement('div');
      width.classList.add('grid');
      this._element.appendChild(width);
      for (let index = 0; index < this.height; index++) {
        const height = document.createElement('div');
        height.classList.add('square');
        width.appendChild(height);
        
      }
    }

}
}

