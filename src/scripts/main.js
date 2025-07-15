// Integração (request - response) //
async function getClockCards() {
    try {
        // 1° Realizar a request para o endpoint
        const response = await fetch('http://localhost:3339/api/v1/clocks'); // Guardar a resposta da requisição; await -> 'aguarde' a buscar nesse endpoint
        const clocks = await response.json(); // formatar a response para JSON

        console.log(clocks);

        // 2° Aonde injetar os cards provenientes da requisição
        // capturar o container de injeção
        const container = document.getElementById('clock-container'); // document -> é o HTML

        // limpar o container de injeção
        container.innerHTML = '';

        // rederizar componentes (montar um card em memória dinamicamente)
        clocks.forEach(clock => {

            // div do card
            const card = document.createElement('div'); // criar elemento div
            card.className = 'card'; // atribuir um nome classe html

            // img
            const image = document.createElement('img');
            image.src = clock.picture;
            image.alt = clock.name;
            image.className = 'card-image'
            image.width = 250

            // h2
            const title = document.createElement('h2');
            title.className = 'card-title';
            title.textContent = clock.name;

            // p
            const price = document.createElement('p');
            price.className = 'card-price';
            price.textContent = `$ ${parseFloat(clock.actualPrice).toFixed(2)}`;

            // integrar elementos HTML
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(price);
            container.appendChild(card);
        });
    } catch (error) {
        console.log(error)
    }
}

getClockCards()