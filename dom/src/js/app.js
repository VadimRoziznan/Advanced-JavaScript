import Field from "./Field"
import Moving from "./Moving"
import AddImage from "./AddImage"

document.addEventListener('DOMContentLoaded', () => {
  let field = new Field(document.querySelector('.field'), 4, 4)
  field.fieldGenerator()

  let newImage = new AddImage(document.querySelector('.field'))
  


  /*console.log(document.querySelector('.field').childNodes[1].childNodes[1])*/
  
  let newMovement = new Moving()
  setInterval(() => {
    let step = newMovement.randomStep(4, 4)
    newImage.createImage(step.width, step.height)
    console.log(step.width, step.height)
  }, 3000)
  
})
