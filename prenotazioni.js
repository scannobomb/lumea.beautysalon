function caricaPrenotazioni() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    let prenotazioni = JSON.parse(localStorage.getItem("prenotazioni")) || [];

    prenotazioni.forEach((p, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ✨ <strong>${p.nome}</strong><br>
            🌙 ${p.data} - ${p.ora}<br>
            💎 ${p.trattamento}<br>
            <button onclick="elimina(${index})">❌ Elimina</button>
        `;

        lista.appendChild(li);
    });
}

function prenota() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let ora = document.getElementById("ora").value;

    let select = document.getElementById("trattamento");
    let trattamento = select.options[select.selectedIndex].text;

    if (!nome || !data || !ora) {
        alert("Compila tutti i campi!");
        return;
    }

    let prenotazioni = JSON.parse(localStorage.getItem("prenotazioni")) || [];

    prenotazioni.push({
        nome,
        data,
        ora,
        trattamento
    });

    localStorage.setItem("prenotazioni", JSON.stringify(prenotazioni));

    alert("✨ Prenotazione salvata con successo!");

    caricaPrenotazioni();
}

function elimina(index) {
    let prenotazioni = JSON.parse(localStorage.getItem("prenotazioni")) || [];
    prenotazioni.splice(index, 1);
    localStorage.setItem("prenotazioni", JSON.stringify(prenotazioni));

    caricaPrenotazioni();
}

window.onload = caricaPrenotazioni;