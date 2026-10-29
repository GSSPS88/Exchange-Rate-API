const currency_1 = document.getElementById("currency-one");
const currency_2 = document.getElementById("currency-two");

const amount_1 = document.getElementById("amount-one");
const amount_2 = document.getElementById("amount-two");

const swap = document.getElementById("btn");
const showRate = document.getElementById("rate");

currency_1.addEventListener('change', currencyConverter);
currency_2.addEventListener('change', currencyConverter);

amount_1.addEventListener('input', currencyConverter);
amount_2.addEventListener('input', currencyConverter);

function currencyConverter() {
    const one = currency_1.value;
    const two = currency_2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res => res.json())
    .then(data=> {
        console.log(data);
        const rate = data.rates[two];
        showRate.innerHTML =  `1 ${one} = ${rate} ${two}`;

        amount_2.value = (amount_1.value * rate).toFixed(2);
    });
}

swap.addEventListener('click',() => {
    const swapBtn = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = swapBtn;

    currencyConverter();
});

currencyConverter();

