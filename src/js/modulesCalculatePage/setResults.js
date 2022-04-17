function setResults(m, selectionBank, loan, payment, p) {
    warning.classList.contains('active') ? warning.classList.remove('active') : ''

    const monthlyPayment = document.getElementById("monthlyPayment")
    const loanTerm = document.getElementById("loanTerm")

    monthlyPayment.textContent = `$${m}`
    loanTerm.textContent = `${selectionBank.term} year fixed loan term`

    result.classList.add('active_f')

    document.getElementById("mortPay").textContent = `$${m}`
    document.getElementById("estPay").textContent = `$${(+loan).toFixed(2)}`
    document.getElementById("loanAmount").textContent = `$${(p).toFixed(2)}`
    document.getElementById("downPay").textContent = `$${(+payment).toFixed(2)}`
    document.getElementById("totOutOfPocket").textContent = `$${(m * selectionBank.term * 12).toFixed(2)}`
    document.getElementById("interestPaid").textContent = `$${((m * selectionBank.term * 12) - p).toFixed(2)}`
    document.getElementById("interestRate").textContent = `${selectionBank.rate}%`
    document.getElementById("term").textContent = `${selectionBank.term} years`
}