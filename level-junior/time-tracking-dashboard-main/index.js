const mainSection = document.getElementById('main');
const dailyBtn = document.getElementById('tab-daily');
const weeklyBtn = document.getElementById('tab-weekly');
const mounthlyBtn = document.getElementById('tab-mouthly');
const btns = document.getElementsByClassName('btn');

const timeTrackingTop = [
    {
        "color": 'hsl(15, 100%, 70%)',
        "iconUrl": './images/icon-work.svg'
    },
    {
        "color": 'hsl(195, 74%, 62%)',
        "iconUrl": './images/icon-play.svg'
    },
    {
        "color": 'hsl(348, 100%, 68%)',
        "iconUrl": './images/icon-study.svg'
    },
    {
        "color": 'hsl(145, 58%, 55%)',
        "iconUrl": './images/icon-exercise.svg'
    },
    {
        "color": 'hsl(264, 64%, 52%)',
        "iconUrl": './images/icon-social.svg'
    },
    {
        "color": 'hsl(43, 84%, 65%)',
        "iconUrl": './images/icon-self-care.svg'
    }
]

const day = [];
const week = [];
const mounth = [];

async function fetchData() {
    const fetchData = await fetch('data.json');
    const data = await fetchData.json();
    return data;
}

function removeActiveClass( button) {
    if(button.classList.contains('active')) {
        button.classList.remove('active')
    }
}

function makeTrackingHtml(data, time) {
    mainSection.innerHTML = ''

    for (let key of data) {
        console.log(key)
        let html = `
        <section class="time-tracking">
            <div class="time-tracking-top" style="background-color:${key.timeTrackingTop.color}; background-image:url(${key.timeTrackingTop.iconUrl})">
            </div>
            
            <div class="time-tracking-bottom">
                <div class="time-tracking-title"> 
                    <h2>${key.title}</h2>
                    <img src="./images/icon-ellipsis.svg" alt="Ellipsis icon">
                </div>

                <div class="time-tracking-hours">
                    <span class="current-hours">${key.current} ${key.current <= 1 ? key.current === 0 ? '' : 'hr' : 'hrs'}</span>
                    <span class="previous-hours">Last ${time} - ${key.previous} ${key.previous <= 1 ? key.previous === 0 ? '' : 'hr' : 'hrs'}</span>

                </div>
            </div>
        </section>
    `
    mainSection.insertAdjacentHTML('beforeend', html);
    }
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
            day[count].timeTrackingTop = timeTrackingTop[count]

            week[count] = {};
            week[count].title = data[key].title;
            week[count].current = data[key].timeframes.weekly.current;
            week[count].previous = data[key].timeframes.weekly.previous;
            week[count].timeTrackingTop = timeTrackingTop[count]


            mounth[count] = {};
            mounth[count].title = data[key].title;
            mounth[count].current = data[key].timeframes.monthly.current;
            mounth[count].previous = data[key].timeframes.monthly.previous;
            mounth[count].timeTrackingTop = timeTrackingTop[count];

            count++;
        }
    }).then(() => {
        makeTrackingHtml(day, "Day");
        dailyBtn.addEventListener('click', function() {
            makeTrackingHtml(day, "Day");
            btns.forEach(btn => {
                removeActiveClass(btn)
            });

            this.classList.add('active');
        });

        weeklyBtn.addEventListener('click', function() {
            makeTrackingHtml(week, "Week");

            btns.forEach(btn => {
                removeActiveClass(btn)
            });

            this.classList.add('active');
        });

        mounthlyBtn.addEventListener('click', function() {
            makeTrackingHtml(mounth, "Mounth");

            btns.forEach(btn => {
                removeActiveClass(btn)
            });

            this.classList.add('active');
        });
    }).catch(error => {
        console.log(error)
    })
});
