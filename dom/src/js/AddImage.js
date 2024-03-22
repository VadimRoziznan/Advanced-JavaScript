export default class AddImage {
    constructor(element) {
        this._element = element;
        this.imagePath = 'goblin.png';
    }

    createImage(x, y){
        let image = document.createElement('img');
        image.src = this.imagePath;
        this._element.childNodes[x].childNodes[y].appendChild(image)
        return image
    }

    removeImage(imageElement) {
        imageElement.remove();
    }

}