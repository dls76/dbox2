const monthYearElement = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
// const todayButton = document.getElementById('todayButton');
const weekdaysElement = document.querySelector('.weekdays');
const daysElement = document.querySelector('.days');

const eventos = [

    //Fev    
    {data: new Date(2025, 1, 3), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    {data: new Date(2025, 1, 4), culto1: 'Vice', culto2: 'Vice', culto3: 'Vice'},
    {data: new Date(2025, 1, 5), culto1: 'Nailson', culto2: 'Nailson', culto3: 'Nailson'},
    {data: new Date(2025, 1, 6), culto1: 'Andressa', culto2: 'Nailson', culto3: 'Malu'},
    {data: new Date(2025, 1, 7), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},

    {data: new Date(2025, 1, 10), culto1: 'Murilo', culto2: 'Murilo', culto3: 'Murilo'},
    {data: new Date(2025, 1, 11), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2025, 1, 12), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2025, 1, 13), culto1: 'Jaqueline', culto2: 'Valéria', culto3: 'Adriene'},
    {data: new Date(2025, 1, 14), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2025, 1, 17), culto1: 'Murilo', culto2: 'Murilo', culto3: 'Murilo'},
    {data: new Date(2025, 1, 18), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2025, 1, 19), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2025, 1, 20), culto1: 'Carol', culto2: 'Renata', culto3: 'Jhessica'},
    {data: new Date(2025, 1, 21), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2025, 1, 24), culto1: 'Murilo', culto2: 'Murilo', culto3: 'Murilo'},
    {data: new Date(2025, 1, 25), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2025, 1, 26), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2025, 1, 27), culto1: 'Márcio', culto2: 'Nailson', culto3: 'Ana Prado'},
    {data: new Date(2025, 1, 28), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

];

// if ( datahoje.getDate() == 7) {
//   document.querySelector('#cultos').innerHTML = '7h Jaque' + ' | ' + '10h15 Nailson' + ' | ' + '13h Andressa' 
// }
// if ( datahoje.getDate() == 14) {
//   document.querySelector('#cultos').innerHTML = '7h Fillipe' + ' | ' + '10h15 Malú' + ' | ' + '13h Pr. Vinícius' 
// }
// if ( datahoje.getDate() == 21) {
//   document.querySelector('#cultos').innerHTML = '7h Jhéssica' + ' | ' + '10h15 Valéria' + ' | ' + '13h Pr. Vinícius' 
// }
// if ( datahoje.getDate() == 28) {
//   document.querySelector('#cultos').innerHTML = '7h Nailson' + ' | ' + '10h15 Nailson' + ' | ' + '13h Drika' 
// }

let currentDate = new Date();

function renderCalendar() {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  const monthName = firstDayOfMonth.toLocaleString('default', { month: 'long' });
  const capitalizedMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  monthYearElement.textContent = `${capitalizedMonthName} ${currentDate.getFullYear()}`;
  monthYearElement.classList.add('monthYear')
  weekdaysElement.innerHTML = '';
  daysElement.innerHTML = '';

  // Render weekdays
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  weekdays.forEach(weekday => {
    const weekdayElement = document.createElement('div');
    weekdayElement.classList.add('weekday');
    weekdayElement.textContent = weekday;
    weekdaysElement.appendChild(weekdayElement);
  });

  // Render days
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    const emptyDayElement = document.createElement('div');
    emptyDayElement.classList.add('day');
    daysElement.appendChild(emptyDayElement);
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    
    const dayNumberElement = document.createElement('div');
    dayNumberElement.classList.add('day-number');
    dayNumberElement.textContent = i;
    // if ( i === currentDate.getDate()) {
    //   dayNumberElement.style.color = "dodgerblue"
    // }
    dayElement.appendChild(dayNumberElement);

    if (currentDate.getDate() === i && currentDate.getMonth() === (new Date()).getMonth() && currentDate.getFullYear() === (new Date()).getFullYear()) {
      dayElement.classList.add('current-day');
    }

    const eventsOnDay = eventos.filter(evento => evento.data.getDate() === i && evento.data.getMonth() === currentDate.getMonth() && evento.data.getFullYear() === currentDate.getFullYear());
    
    eventsOnDay.forEach(evento => {
      const eventElement1 = document.createElement('div');
      eventElement1.classList.add('event');
      eventElement1.textContent = '07:00 | ' + evento.culto1;
      dayElement.appendChild(eventElement1);

      const eventElement2 = document.createElement('div');
      eventElement2.classList.add('event');
      eventElement2.textContent = '10:15 | ' +  evento.culto2;
      dayElement.appendChild(eventElement2);

      const eventElement3 = document.createElement('div');
      eventElement3.classList.add('event');
      eventElement3.textContent = '13:00 | ' +  evento.culto3;
      dayElement.appendChild(eventElement3);
    });

    daysElement.appendChild(dayElement);
  }
}

prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// todayButton.addEventListener('click', () => {
//   currentDate = new Date();
//   renderCalendar();
// });

renderCalendar();
