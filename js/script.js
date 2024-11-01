function openModal() {
    document.querySelector('#consultation').style.display = 'flex';
}

let modal = document.querySelector('#consultation');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector('#receive').style.display = 'block'; 
        document.querySelector('#success').style.display = 'none';
    }
}

function closeModal() {
    document.querySelector('#consultation').style.display = 'none';
    document.querySelector('#receive').style.display = 'block'; 
    document.querySelector('#success').style.display = 'none';
}

function success() {
    document.querySelector('#receive').style.display = 'none';
    document.querySelector('#success').style.display = 'block';
}