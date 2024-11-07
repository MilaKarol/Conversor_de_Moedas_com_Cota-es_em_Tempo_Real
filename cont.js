const apiKey = `6c2e94c0c364f63d85c4621b`
const apiURL =  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD `

async function getExchangeRates(deMoeda, paraMoeda){
    try {
        const response = await fetch(`${apiUrl}${daMoeda}`);
        const data = response.json();
 
        if (data === "success") {
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

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    if(exchangeRate){
        const covertedValue = valor * exchangeRates;


        // console.log(covertedValue);

        const conversao = document.getElementById('conversão');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)}$ {paraMoeda}`;
    } else{ 
        alert('Erro ao buscar a cotação. Tente novamente');
    }
})