const apiKey = `6c2e94c0c364f63d85c4621b`;
const apiURL =  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

async function getExchangeRates(daMoeda, paraMoeda){
    try {
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
 
        if (data.result === "success") {
            return data.conversion_rates[paraMoeda];
        } else {
            throw new Error("Erro ao buscar taxa de câmbio");
        }
    } catch (error) {
        console.error("Error", error);
        return null;
    }
}

// ###############################################################################

document.getElementById('form').addEventListener('submit', async function(event){ 
    event.preventDefault();

    // Obter valores de entrada 
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    const exchangeRate = await getExchangeRates(daMoeda, paraMoeda);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;

        const conversao = document.getElementById('conversão');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)}${paraMoeda}`;
    } else{ 
        alert('Erro ao buscar a cotação. Tente novamente');
    }
})


