function changeBank(e) {
    const { target } = e
    
    const banks = JSON.parse(localStorage.getItem('banks'))
    const targetId = target.id
    const targetBank = banks.find((item) => item.id == targetId || item.id == `none_${item.name}`) ;

    info.id.value = targetBank.id
    info.name.value = targetBank.name
    info.rate.value = targetBank.rate
    info.maxLoan.value = targetBank.maxLoan
    info.minPayload.value = targetBank.minPayload
    info.term.value = targetBank.term

    modal.classList.add('active')

    for (let i = 0; i < banks.length; i++) {
        if (banks[i].id == targetId) {
            banks[i].id = `none_${banks[i].id}`
            localStorage.setItem('banks', JSON.stringify(banks))
            return;
        }
    }
}
