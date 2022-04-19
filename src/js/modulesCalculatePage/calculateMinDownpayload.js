function calculateMinDownpayload(input) {
    if (!maxLoanInput.value) {
        maxLoanInput.classList.add('error')
        return
    }
    if (input === 'percent') {
        percentInput.value = (+dollarInput.value * 100 / +maxLoanInput.value).toFixed(2)
    }
    if (input === 'dollar') {
        dollarInput.value = (+percentInput.value * +maxLoanInput.value / 100).toFixed(2)
    }
}