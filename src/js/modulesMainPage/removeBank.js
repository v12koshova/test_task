function removeBank(e) {
    let banks = JSON.parse(localStorage.getItem('banks'));
    let id = e.target.id;
    for (let i = 0; i < banks.length; i++) {
        if (banks[i].id == id) {
            banks.splice(i, 1)
            localStorage.setItem('banks', JSON.stringify(banks))
            setBanks()
            return;
        }
    }
}
