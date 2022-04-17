function handleCreateNewBank() {
    if (!validateModal(info)) {
        for (let i in info) {
            if (info[i].value === '') {
                info[i].classList.add('error')
            } 
        }
        return;
    }
    const banks = JSON.parse(localStorage.getItem('banks'))
    const newBank = {
        id: info.id.value + info.rate.value + info.maxLoan.value + info.minPayload.value + info.term.value,
        name: info.name.value,
        rate: info.rate.value,
        maxLoan: info.maxLoan.value,
        minPayload: info.minPayload.value,
        term: info.term.value,
    }

    const bankIndex = banks.findIndex((item) => item.id.includes('none'))
    bankIndex == -1 ? banks.push(newBank) : banks[bankIndex] = newBank;

    localStorage.setItem('banks', JSON.stringify(banks))
    setBanks()

    modal.classList.remove('active')
    initialModalFields(info)

}