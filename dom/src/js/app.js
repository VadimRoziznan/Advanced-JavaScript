import Field from "./Field"

document.addEventListener('DOMContentLoaded', () => {
  const field = new Field(document.querySelector('.field'), 4, 4)
  field.fieldGenerator()
})
