import Field from "./Field"
import Moving from "./Moving"

document.addEventListener('DOMContentLoaded', () => {
  const field = new Field(document.querySelector('.field'), 4, 4)
  field.fieldGenerator()
  console.log(document.querySelector('.field').childNodes[1].childNodes[1])
  const n = new Moving()
  
  const t = n.randomStep(1, 10)
  console.log(n.lastNumber)
  console.log(t)
  
})
