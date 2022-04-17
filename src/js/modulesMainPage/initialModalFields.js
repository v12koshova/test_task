function initialModalFields(info) {
    for (let i in info) {
        info[i].value = ''
        info[i].classList.contains('error') ? info[i].classList.remove('error') : ''
    }
}