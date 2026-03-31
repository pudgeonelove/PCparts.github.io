function showPage(page) {
    document.getElementById('home-page').style.display = page === 'home' ? 'block' : 'none';
    document.getElementById('empty-page').style.display = page === 'empty' ? 'block' : 'none';
}

function openModal(name) {
    document.getElementById('itemName').innerText = name;
    document.getElementById('orderModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function confirmPurchase() {
    alert("Заказ принят!");
    closeModal();
}
