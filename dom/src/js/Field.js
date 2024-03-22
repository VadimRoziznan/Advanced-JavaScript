export default class Field {
  constructor(element, width, height) {
    this._element = element;
    this.width = width;
    this.height = height  
  }

  fieldGenerator() {
    for (let index = 0; index < this.height; index++) {
      let height = document.createElement('div');
      height.classList.add('grid');
      this._element.appendChild(height);
      for (let index = 0; index < this.width; index++) {
        const width = document.createElement('div');
        width.classList.add('square');
        height.appendChild(width);
        
      }
    }
    

}
}

