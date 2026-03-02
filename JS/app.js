// Gestion du mode sombre
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggleBtn.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Vérification Entreprise (Veolia)
function checkCompany() {
    const input = document.getElementById('company-input').value.toLowerCase();
    const msg = document.getElementById('result-msg');
    
    if (input.includes('veolia')) {
        msg.innerHTML = "<p style='color: #15803d; margin-top:15px;'>✅ <strong>Partenaire confirmé !</strong> Votre premier appel est offert.</p>";
    } else if (input.length > 2) {
        msg.innerHTML = "<p style='color: #8892b0; margin-top:15px;'>ℹ️ Entreprise non répertoriée. Premier appel : 49€.</p>";
    }
}
