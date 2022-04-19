const select = document.getElementById("options")
const calculate = document.getElementById("calculate")
const detailsBtn = document.getElementById("details-btn")
const details = document.getElementById("details")
const selected = document.getElementById("selected");
const dollarInput = document.getElementById('paymentDollar')
const percentInput = document.getElementById('payment')
const maxLoanInput = document.getElementById('loan')

const addedBanks = JSON.parse(localStorage.getItem('banks'))

let names = addedBanks.map((bank) => ({ name: bank.name, id: bank.id }))
let options = ''

for (let name of names) {
    options += `<div class="option">
    <input type="radio" class="option__element" id=${name.id} name="category" />
    <label for=${name.id}>${name.name}</label>
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


document.addEventListener('focusin', (e) => {
    if (e.target === percentInput || e.target === dollarInput) {
        if (e.target.value === '0' || e.target.value === '0.00') {
            e.target.value = ''
        }
    }
})

document.addEventListener('change', (e) => {
    if (e.target === dollarInput) {
        calculateMinDownpayload('percent')
    }
    if (e.target === percentInput) {
        calculateMinDownpayload('dollar')
    }
    if (e.target === maxLoanInput) {
        percentInput.value ? calculateMinDownpayload('dollar') : calculateMinDownpayload('percent')
    }
})



