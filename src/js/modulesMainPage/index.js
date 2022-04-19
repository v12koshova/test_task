const createNewBankBtn = document.getElementById("create-btn")
const modal = document.getElementById("modal")
const banks = document.getElementById("banks")
const title = document.getElementById("title")
const createBtn = document.getElementById("create-bank")
const dollarInput = document.getElementById('minPayloadDollar')
const percentInput = document.getElementById('minPayload')
const maxLoanInput = document.getElementById('maxLoan')

if (!localStorage.getItem('banks')) {
    localStorage.setItem('banks', JSON.stringify([]))
}

document.addEventListener('click', e => {
    const { target } = e
    if (target === createBtn) {
        handleCreateNewBank()
    }
    if (target === modal) {
        handleClickAnywhere()
    }
    if (target === createNewBankBtn) {
        handleClickCreateNewBank()
    }
    if (target.name == 'changeBtn' && target.classList.contains('bank__element_change')) {
        changeBank(e)
    }
    if (target.classList.contains('bank__element_delete')) {
        removeBank(e)
    }
})

document.addEventListener('keydown', handleClean)

document.addEventListener('change', (e) => {
    if (e.target === dollarInput) {
       if (percentInput.classList.contains('error')) {
        percentInput.classList.remove('error')
       }
       calculateMinDownpayload('percent')
    }
    if (e.target === percentInput) {
        if (dollarInput.classList.contains('error')) {
            dollarInput.classList.remove('error')
           }
        calculateMinDownpayload('dollar')
        }
    if (e.target === maxLoanInput) {
        percentInput.value ? calculateMinDownpayload('dollar') : calculateMinDownpayload('percent')
    }
})

document.addEventListener('focusin', (e) => {
    if (e.target === percentInput || e.target === dollarInput) {
        if (e.target.value === '0.00' || e.target.value === '0') {
            e.target.value = ''
        }
    }
})

let info = {
    id: document.getElementById("name"),
    name: document.getElementById("name"),
    rate: document.getElementById("rate"),
    maxLoan: document.getElementById("maxLoan"),
    minPayloadDollar: document.getElementById("minPayloadDollar"),
    minPayload: document.getElementById("minPayload"),
    term: document.getElementById("term")
}