import axios from 'axios';
import readline from 'readline';
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const API_URL="https://open.er-api.com/v6/latest/";
async function currencyConverter(from,to,amount){
    try{
        const res=await axios.get(`${API_URL}/${from}`);
        const rates=res.data.rates;
        if(!rates[to.toUpperCase()]){
            console.log(`Currency code ${to} not found.`);
        }
        const converted=amount*rates[to.toUpperCase()];
        console.log(`${amount} ${from.toUpperCase()}=${converted.toFixed(2)} ${to.toUpperCase()}`);


    }catch(error){
        console.error("Error fetching exchange rates:",error);

    }
}

rl.question("Enter Target Currency(eg:USD)",(from)=>{
    rl.question("Enter Base Currency(eg:INR):",(to)=>{
        rl.question("Enter Amount to be converted:",(amount)=>{
            currencyConverter(from,to,parseFloat(amount));

        });
    });

})