function setBanks(screen) {
    banks.innerHTML = ''
    const addedBanks = JSON.parse(localStorage.getItem('banks'))
    if (addedBanks.length !== 0) {
        if (screen == 'tablet' || document.documentElement.clientWidth < 767) {
            for (let i = 0; i < addedBanks.length; i++) {
                const bankWrap = createElement('div', {
                    className: 'banks__element bank'
                })
                const bankName = createElement('h2', {
                    className: 'bank__element bank__element_name',
                    textContent: `${addedBanks[i].name}`
                })
                const bankRateDest = createElement('p', {
                    className: 'bank__element bank__element_designation',
                    textContent: "Interest rate"
                })
                const bankRate = createElement('p', {
                    className: 'bank__element',
                    textContent: `${(+addedBanks[i].rate).toFixed(2)}%`
                })

                const bankMaxLoanDest = createElement('p', {
                    className: 'bank__element bank__element_designation',
                    textContent: "Maximum loan"
                })
                const bankMaxLoan = createElement('p', {
                    className: 'bank__element',
                    textContent: `${addedBanks[i].maxLoan}$`
                })
                const bankMinPayloadDest = createElement('p', {
                    className: 'bank__element bank__element_designation',
                    textContent: "Minimum down payment"
                })
                const bankMinPayload = createElement('p', {
                    className: 'bank__element',
                    textContent: `${(+addedBanks[i].minPayload).toFixed(2)}%`
                })
                const bankTermDest = createElement('p', {
                    className: 'bank__element bank__element_designation',
                    textContent: "Loan term"
                })
                const bankTerm = createElement('p', {
                    className: 'bank__element',
                    textContent: `${(+addedBanks[i].term).toFixed(2)}%`
                })
                const bankDelete = createElement('button', {
                    className: 'bank__element bank__element_delete',
                    textContent: 'Delete',
                    id: `${addedBanks[i].id}`
                })
                const bankChange = createElement('button', {
                    className: 'bank__element bank__element_change',
                    textContent: 'Edit',
                    id: `${addedBanks[i].id}`,
                    name: 'changeBtn'
                })
                bankWrap.append(bankName, bankRateDest, bankRate, bankMaxLoanDest, bankMaxLoan, bankMinPayloadDest, bankMinPayload, bankTermDest, bankTerm, bankChange, bankDelete)
                banks.append(bankWrap)
            }
        } else {
            const banksHeader = createElement('div', {
                className: 'banks__element banks__element_header bank',
            })
            const bankNumDest = createElement('p', {
                className: 'bank__element bank__element_designation',
                textContent: '#'
            })
            const bankRateDest = createElement('p', {
                className: 'bank__element bank__element_designation',
                textContent: "Interest rate, %"
            })
            const bankMaxLoanDest = createElement('p', {
                className: 'bank__element bank__element_designation',
                textContent: "Maximum loan, $"
            })
            const bankMinPayloadDest = createElement('p', {
                className: 'bank__element bank__element_designation',
                textContent: "Minimum down payment, %"
            })
            const bankTermDest = createElement('p', {
                className: 'bank__element bank__element_designation',
                textContent: "Loan term, years"
            })

            banksHeader.append(bankNumDest, bankRateDest, bankMaxLoanDest, bankMinPayloadDest, bankTermDest)
            banks.append(banksHeader)
            for (let i = 0; i < addedBanks.length; i++) {
                const bankWrap = createElement('div', {
                    className: 'banks__element bank'
                })

                const bankNum = createElement('p', {
                    className: 'bank__element bank__element_id',
                    textContent: `${i + 1}`
                })

                const bankName = createElement('h2', {
                    className: 'bank__element bank__element_name',
                    textContent: `${addedBanks[i].name}`
                })

                const bankRate = createElement('p', {
                    className: 'bank__element',
                    textContent: `${(+addedBanks[i].rate).toFixed(2)}%`
                })


                const bankMaxLoan = createElement('p', {
                    className: 'bank__element',
                    textContent: `${addedBanks[i].maxLoan}$`
                })

                const bankMinPayload = createElement('p', {
                    className: 'bank__element',
                    textContent: `${(+addedBanks[i].minPayload).toFixed(2)}%`
                })

                const bankTerm = createElement('p', {
                    className: 'bank__element',
                    textContent: `${addedBanks[i].term}`
                })
                const bankDelete = createElement('button', {
                    className: 'bank__element bank__element_delete',
                    textContent: '',
                    id: `${addedBanks[i].id}`
                })
                const bankChange = createElement('button', {
                    className: 'bank__element bank__element_change',
                    textContent: '',
                    id: `${addedBanks[i].id}`,
                    name: 'changeBtn'
                })
                bankWrap.append(bankName, bankNum, bankRate, bankMaxLoan, bankMinPayload, bankTerm, bankChange, bankDelete)
                banks.append(bankWrap)
            }
        }
    } else {
        let warning = createElement('p', {
            className: 'bank__element bank__element_warning',
            textContent: `Add the first bank to start!`,
        })
        banks.append(warning)
    }
}