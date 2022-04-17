function handleClickCreateNewBank(e) {
    modal.classList.add('active')
}

function handleClickAnywhere() {
    
        modal.classList.remove('active')
       
        initialModalFields(info)
        
        let banks = JSON.parse(localStorage.getItem('banks'))
        banks.map(item => {
            if (item.id.startsWith('none_')) {
                item.id = item.id.slice(5)
            }
        })
        localStorage.setItem('banks', JSON.stringify(banks))
    
}