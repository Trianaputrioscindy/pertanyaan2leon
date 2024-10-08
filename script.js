function tampilkanPesanan() {
    let pesanan = [];
    let checkboxes = document.querySelectorAll('input[name="pesanan"]:checked');
    checkboxes.forEach((checkbox) => {
        pesanan.push(checkbox.value);
    });
    console.log("Pesanan Anda: " + pesanan.join(", "));
}
