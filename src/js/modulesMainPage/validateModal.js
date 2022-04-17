function validateModal(info) {
    for (let i in info) {
        if (info[i].value === '') {
            return false
        } 
    }
    return true
}