function handleCalculate() {
    const loan = document.getElementById("loan"),
        payment = document.getElementById("paymentDollar"),
        warning = document.getElementById("warning"),
        res = document.getElementById("result")

    if (!loan.value || !payment.value) {
        !loan.value && !payment.value ?
            (loan.classList.add('error'),
                payment.classList.add('error')) :
            !loan.value ? loan.classList.add('error') :
                payment.classList.add('error')
        return
    }
    const sel = document.getElementById("selected");
    const selId = sel.getAttribute('data-id')
    const selectionBank = addedBanks.find(item => item.id === selId);

    if (!selectionBank) {
        sel.classList.add('error')
        return
    }

    if (!validateBanks(loan.value, payment.value, selectionBank)) {
        res.classList.contains('active_f') ? res.classList.remove('active_f') : ''
        details.classList.contains('active_g') ? (details.classList.remove('active_g'),
        detailsBtn.textContent = 'Show details') : ''
        warning.classList.add('active')
        return
    }

    const r = +selectionBank.rate / 100 / 12;
    const n = +selectionBank.term * 12;
    const p = +loan.value - +payment.value
    const m = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

    setResults(m.toFixed(2), selectionBank, loan.value, payment.value, p)
}