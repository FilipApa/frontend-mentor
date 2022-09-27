const adviceIdHtml = document.getElementById('advice-id');
const adviceContentHtml = document.getElementById('advice');
const adviceBtn = document.getElementById('advice-btn');

async function displayAdvice() {
    const fetchAdvice = await fetch('https://api.adviceslip.com/advice');
    const advice = await fetchAdvice.json();

    const adviceId = advice.slip.id;
    const adviceContent = advice.slip.advice;

    adviceIdHtml.innerText = adviceId;
    adviceContentHtml.innerText = adviceContent;

}

adviceBtn.addEventListener('click', function() {
    displayAdvice();
})