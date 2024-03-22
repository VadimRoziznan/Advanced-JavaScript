export default class Moving {
  constructor(field_size){
    this.lastNumber = 0
  };
  randomStep(min, max) {
    let randomNumber;
    while (true) {
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNumber !== this.lastNumber) {
            break;
        }
    }
    this.lastNumber = randomNumber;
    
    return randomNumber
  }
}
