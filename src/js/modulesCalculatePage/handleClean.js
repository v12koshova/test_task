function handleClean(e) {
    const { target } = e;
    if (!target.id === 'loan' || !target.id === 'payment') return;
    target.classList.remove('error')

}