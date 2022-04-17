const select = document.getElementById("options")
const calculate = document.getElementById("calculate")
const detailsBtn = document.getElementById("details-btn")
const details = document.getElementById("details")
const selected = document.getElementById("selected");

const addedBanks = JSON.parse(localStorage.getItem('banks'))

let names = addedBanks.map((bank) => bank.name)

let options = ''

for (let name of names) {
    options += `<div class="option">
    <input type="radio" class="option__element" id=${name} name="category" />
    <label for=${name}>${name}</label>
  </div>`
}

select.innerHTML = options
document.addEventListener('click', e => {
    if (e.target === calculate) {
        handleCalculate(e)
    }
    if (e.target === detailsBtn) {
        showDetails()
    }
    if (e.target === selected) {
        onSelect()
      }
})
document.addEventListener('keydown', handleClean)



