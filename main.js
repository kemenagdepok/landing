function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Gagal memuat ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Highlight menu aktif berdasarkan URL saat ini (opsional)
            const currentPath = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if(link.getAttribute('href') === currentPath) {
                    link.style.color = 'var(--primary-color)';
                }
            });
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});