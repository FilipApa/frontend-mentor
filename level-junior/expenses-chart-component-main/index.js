const chart = document.getElementById('chart'); 

async function getData() {
    const res = await fetch('./data.json');
    const data = await res.json();
    const dailyBalanceRes = [];
    dailyBalanceRes.push(data);

    const balance = [];
    for(let value in dailyBalanceRes[0]) {
        balance.push(dailyBalanceRes[0][value].amount)
    }

    const maxBalanceAmount = Math.max(...balance);

    console.log(maxBalanceAmount);
}

getData();
