function showDetails() {
    details.classList.toggle('active_g')
    if (details.classList.contains('active_g')) {
        detailsBtn.textContent = 'Hide details'
    } else {
        detailsBtn.textContent = 'Show details'
    }
}