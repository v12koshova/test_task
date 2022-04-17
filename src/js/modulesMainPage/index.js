const createNewBankBtn = document.getElementById("create-btn")
const modal = document.getElementById("modal")
const banks = document.getElementById("banks")
const title = document.getElementById("title")
const createBtn = document.getElementById("create-bank")



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

let info = {
    id: document.getElementById("name"),
    name: document.getElementById("name"),
    rate: document.getElementById("rate"),
    maxLoan: document.getElementById("maxLoan"),
    minPayload: document.getElementById("minPayload"),
    term: document.getElementById("term")
}