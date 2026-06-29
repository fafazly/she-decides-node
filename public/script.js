// Texto animado (typewriter effect)
const texto = "notícias femininas você só vê aqui";
const elemento = document.querySelector(".texto-digitado");
let i = 0;

function digitar() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 80);
    } else {
        setTimeout(() => {
            elemento.textContent = "";
            i = 0;
            digitar();
        }, 4000);
    }
}

digitar();

// Carregar notícias
async function carregarNoticias() {
    try {
        const response = await fetch("/api/news");
        const noticias = await response.json();
        const container = document.getElementById("noticias");

        container.innerHTML = noticias.map(noticia => `
            <article class="news-card">
                <div class="news-card-content">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descricao}</p>
                    <a href="${noticia.url}" target="_blank">Leia mais →</a>
                </div>
            </article>
        `).join("");
    } catch (error) {
        console.error("Erro ao carregar notícias:", error);
    }
}

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const button = e.target.querySelector("button");
    const originalText = button.textContent;

    try {
        button.textContent = "Inscrevendo...";
        button.disabled = true;

        const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            button.textContent = "✓ Inscrito com sucesso!";
            document.getElementById("email").value = "";
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        } else {
            button.textContent = "Erro ao inscrever";
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }
    } catch (error) {
        console.error("Erro:", error);
        button.textContent = "Erro ao inscrever";
        button.disabled = false;
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }
});

// Carregar notícias ao iniciar
carregarNoticias();

