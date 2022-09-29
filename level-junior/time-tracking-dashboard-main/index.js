//colors
const mainSection = document.getElementById('main');

const lightRedWorks = 'hsl(15, 100%, 70%)';
const softBluePlay =  'hsl(195, 74%, 62%)';
const lightRedStudy = 'hsl(348, 100%, 68%)';
const limeGreenExercises = 'hsl(145, 58%, 55%)';
const violetSocial = 'hsl(264, 64%, 52%)';
const softOrangeSelfCare = 'hsl(43, 84%, 65%)';

const day = [];
const week = [];
const mounth = [];

async function fetchData() {
    const fetchData = await fetch('data.json');
    const data = await fetchData.json();
    return data;
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    .then(data => {
        let count = 0;
        for (let key in data) {
            day[count] = {};
            day[count].title = data[key].title;
            day[count].current = data[key].timeframes.daily.current;
            day[count].previous = data[key].timeframes.daily.previous;

            week[count] = {};
            week[count].title = data[key].title;
            week[count].current = data[key].timeframes.daily.current;
            week[count].previous = data[key].timeframes.daily.previous;

            mounth[count] = {};
            mounth[count].title = data[key].title;
            mounth[count].current = data[key].timeframes.daily.current;
            mounth[count].previous = data[key].timeframes.daily.previous;
            count++;
        }
    }).catch(error => {
        console.log(error)
    })
});

console.log(day)
console.log(week)
console.log(mounth)