const mondayRef = 1;
const sundayRef = 7;

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dateRange = document.getElementById('date-range');
const dateViews = document.getElementsByClassName('date');
const daysOfMonth = document.getElementById('days-of-month');
const calendarPopover = document.getElementById('calendar-popover');

function adjustCalendar(monRef, sunRef) {
    const monday = moment().day(monRef);
    const sunday = moment().day(sunRef);

    if (monRef > 0) {
        for (const date = monRef; date <= sunRef; date++) {
            dateViews[(date - 1) % 7].innerHTML = moment().day(date).format('M[/]D');
        }
    } else {
        for (const date = -monRef; date >= -sunRef; date--) {
            dateViews[-(monRef + date)].innerHTML = moment().day(-date).format('M[/]D');
        }
    }

    if (monday.format('YYYY') !== sunday.format('YYYY')) {
        dateRange.innerHTML = `${monday.format('MMMM Do, YYYY')} - ${sunday.format('MMMM Do, YYYY')} asdfasdfasdf`;
    } else {
        dateRange.innerHTML = `${monday.format('MMMM Do')} - ${sunday.format('MMMM Do, YYYY')} aaaaaaaaaa`;
    }
}

// Init
adjustCalendar(mondayRef, sundayRef);

next.addEventListener('click', () => {
    mondayRef += 7;
    sundayRef += 7;
    adjustCalendar(mondayRef, sundayRef);
})

prev.addEventListener('click', () => {
    mondayRef -= 7;
    sundayRef -= 7;
    adjustCalendar(mondayRef, sundayRef);
})
meTouch.addEventListener('click', () => {
    alert('me tocaste')
})