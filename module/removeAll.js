const removeAll = () => {
    localStorage.removeItem('books');

    location.reload();
};

export { removeAll };