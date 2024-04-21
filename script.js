// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal gönderimini engelle
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basit bir geri bildirim
    alert("Teşekkürler, mesajınız alındı. Adınız: " + name + ", E-posta: " + email + ", Mesajınız: " + message);

    // Burada form verilerini sunucuya göndermek için AJAX isteği yapabilirsiniz.
});
