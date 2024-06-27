// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('compromisoForm');
    const compromisosList = document.getElementById('compromisosList');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalDetails = document.getElementById('modalDetails');
    const downloadPdf = document.getElementById('downloadPdf');
    let compromisos = [];
    let selectedCompromiso = null;

    form.addEventListener('submitForm', (e) => {
        e.preventDefault();
        const compromiso = {
            titulo: form.titulo.value,
            fecha: form.fecha.value,
            hora: form.hora.value,
            integrantes: form.integrantes.value,
            texto: form.texto.value,
            responsables: form.responsables.value,
            estado: form.estado.value
        };
        compromisos.push(compromiso);
        displayCompromisos();
        form.reset();
    });

    function displayCompromisos() {
        compromisosList.innerHTML = '';
        compromisos.forEach((compromiso, index) => {
            const div = document.createElement('div');
            div.classList.add('compromiso');
            div.innerHTML = `
                <p>${compromiso.titulo} - ${compromiso.fecha} - ${compromiso.hora} - ${compromiso.estado}</p>
                <button onclick="previsualizar(${index})">Previsualizar</button>
            `;
            compromisosList.appendChild(div);
        });
    }

    window.previsualizar = (index) => {
        selectedCompromiso = compromisos[index];
        modalDetails.innerHTML = `
            <p>Título: ${selectedCompromiso.titulo}</p>
            <p>Fecha: ${selectedCompromiso.fecha}</p>
            <p>Hora: ${selectedCompromiso.hora}</p>
            <p>Integrantes: ${selectedCompromiso.integrantes}</p>
            <p>Texto: ${selectedCompromiso.texto}</p>
            <p>Responsables: ${selectedCompromiso.responsables}</p>
            <p>Estado: ${selectedCompromiso.estado}</p>
        `;
        modal.style.display = 'block';
    };

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

      /*downloadPdf.onclick = () => {
        fetch('/generate_pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedCompromiso)
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${selectedCompromiso.titulo}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
       };*/
});
