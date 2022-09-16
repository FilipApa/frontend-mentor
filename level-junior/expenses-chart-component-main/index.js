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
    const chartBarMaxHeight = 150;
    const html = '';

    for(let value in dailyBalanceRes[0]) {
        let precentOfMaxVal = Math.ceil( dailyBalanceRes[0][value].amount / maxBalanceAmount * 100 );
        let chartBarHeight = Math.ceil(precentOfMaxVal / 100 * chartBarMaxHeight);
        
        dailyBalanceRes[0][value].barHeight = chartBarHeight;

        if( chartBarHeight === chartBarMaxHeight) {
            dailyBalanceRes[0][value].backColor = 'hsl(186, 34%, 60%)';
        } else {
            dailyBalanceRes[0][value].backColor = 'hsl(10, 79%, 65%)';
        }

        let chartHtml = `<div style="height:${dailyBalanceRes[0][value].barHeight}px; background-color:${dailyBalanceRes[0][value].backColor}" class="chart-bar"></div>`

        let barHtml = `
        <div class="chart-element">
            <span class="tooltip" role="tooltip">$${dailyBalanceRes[0][value].amount}</span>
            ${chartHtml}
            <span class="day">${dailyBalanceRes[0][value].day}</span>
        </div>
        `        
        chart.innerHTML += barHtml;
    }
}

getData();
