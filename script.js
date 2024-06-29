document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data;
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
});
