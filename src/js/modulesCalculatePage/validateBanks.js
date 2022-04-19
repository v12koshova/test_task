function validateBanks(loan, payment, selectionBank) {
    if (+loan <= selectionBank.maxLoan && +payment >= (+selectionBank.minPayload * +loan) / 100
    //  && +loan > +payment
     ) {
        return true
    } else {
        return false
    }
}