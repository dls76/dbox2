const monthYearElement = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
// const todayButton = document.getElementById('todayButton');
const weekdaysElement = document.querySelector('.weekdays');
const daysElement = document.querySelector('.days');

const eventos = [

    {data: new Date(2024, 5, 3), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 5, 4), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 5, 5), culto1: 'Pr. Léo', culto2: 'Pr. Léo', culto3: 'Pr. Léo'},
    {data: new Date(2024, 5, 6), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 5, 7), culto1: 'Douglas', culto2: ' Douglas ', culto3: 'Douglas'},

    {data: new Date(2024, 5, 10), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 5, 11), culto1: 'Pr. Vini', culto2: 'Pr. Vini', culto3: 'Pr. Vini'},
    {data: new Date(2024, 5, 12), culto1: 'Alexandro', culto2: 'Pr. Léo', culto3: 'Pr. Léo'},
    {data: new Date(2024, 5, 13), culto1: 'Jaque', culto2: 'Malú', culto3: 'Márcio'},
    {data: new Date(2024, 5, 14), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 5, 17), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 5, 18), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 5, 19), culto1: 'Pr. Léo', culto2: 'Pr. Léo', culto3: 'Pr. Léo'},
    {data: new Date(2024, 5, 20), culto1: 'Andressa', culto2: 'Nailson', culto3: 'Adriene'},
    {data: new Date(2024, 5, 21), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    
    {data: new Date(2024, 5, 24), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 5, 25), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 5, 26), culto1: 'Pr. Léo', culto2: 'Pr. Léo', culto3: 'Pr. Léo'},
    {data: new Date(2024, 5, 27), culto1: 'Jhéssica', culto2: 'Valéria', culto3: 'Eliane'},
    {data: new Date(2024, 5, 28), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    
    {data: new Date(2024, 2, 4), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 2, 5), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 2, 6), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 2, 7), culto1: 'Jaque', culto2: 'Nailson', culto3: 'Andressa'},
    {data: new Date(2024, 2, 8), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 2, 11), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 2, 12), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 2, 13), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 2, 14), culto1: 'Fillipe', culto2: 'Malu', culto3: 'Fillipe'},
    {data: new Date(2024, 2, 15), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 2, 18), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 2, 19), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 2, 20), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 2, 21), culto1: 'Jhéssica', culto2: 'Valéria', culto3: 'Jhéssica'},
    {data: new Date(2024, 2, 22), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 2, 25), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 2, 26), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 2, 27), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 2, 28), culto1: 'Drika', culto2: 'Nailson', culto3: 'Drika'},
    {data: new Date(2024, 2, 29), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    //Abril

    {data: new Date(2024, 3, 15), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 3, 16), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 3, 17), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 3, 18), culto1: 'Jaque', culto2: 'Nailson', culto3: 'Andressa'},
    {data: new Date(2024, 3, 19), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 3, 22), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 3, 23), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 3, 24), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 3, 25), culto1: 'Fillipe', culto2: 'Malú', culto3: 'Adriene'},
    {data: new Date(2024, 3, 26), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    //Maio 
    
    {data: new Date(2024, 4, 2), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},

    {data: new Date(2024, 4, 6), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 4, 7), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 4, 8), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 4, 9), culto1: 'Andressa', culto2: 'Nailson', culto3: 'Malu'},
    {data: new Date(2024, 4, 10), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 4, 13), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 4, 14), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 4, 15), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 4, 16), culto1: 'Jaque', culto2: 'Jairo', culto3: 'Drika'},
    {data: new Date(2024, 4, 17), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 4, 20), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 4, 21), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 4, 22), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 4, 23), culto1: 'Fillipe', culto2: 'Valéria', culto3: 'Marcio'},
    {data: new Date(2024, 4, 24), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},

    {data: new Date(2024, 4, 27), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 4, 28), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 4, 29), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 4, 30), culto1: 'Jhéssica', culto2: 'Nailson', culto3: 'Eliane'},
    {data: new Date(2024, 4, 31), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    
    
    // Agosto
    {data: new Date(2024, 7, 1), culto1: 'Carol', culto2: 'Renata', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 2), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 5), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 7, 6), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 7), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 7, 8), culto1: 'Jaque', culto2: 'Malú', culto3: 'Márcio'},
    {data: new Date(2024, 7, 9), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    {data: new Date(2024, 7, 12), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 7, 13), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 14), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 7, 15), culto1: 'Andressa', culto2: 'Jairo', culto3: 'Drica'},
    {data: new Date(2024, 7, 16), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    {data: new Date(2024, 7, 19), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 7, 20), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 21), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 7, 22), culto1: 'Jhéssica', culto2: 'Valéria', culto3: 'Eliane'},
    {data: new Date(2024, 7, 23), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    {data: new Date(2024, 7, 26), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 7, 27), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 7, 28), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 7, 29), culto1: 'Pr. Vinícius', culto2: 'Ingo', culto3: 'Ana B.'},
    {data: new Date(2024, 7, 30), culto1: 'Douglas', culto2: 'Douglas', culto3: 'Douglas'},
    
    //Setembro
    {data: new Date(2024, 8, 2), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 8, 3), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 8, 4), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 8, 5), culto1: 'Agaurdando escala', culto2: 'Agaurdando escala', culto3: 'Agaurdando escala'},
    {data: new Date(2024, 8, 6), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    {data: new Date(2024, 8, 9), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 8, 10), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 8, 11), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 8, 12), culto1: 'Aguardando escala', culto2: 'Aguardando escala', culto3: 'Aguardando escala'},
    {data: new Date(2024, 8, 13), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    {data: new Date(2024, 8, 16), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 8, 17), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 8, 18), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 8, 19), culto1: 'Andressa', culto2: 'Valéria', culto3: 'Marcio'},
    {data: new Date(2024, 8, 20), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    {data: new Date(2024, 8, 23), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 8, 24), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 8, 25), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 8, 26), culto1: 'Jaque', culto2: 'Malu', culto3: 'Drika'},
    {data: new Date(2024, 8, 27), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    {data: new Date(2024, 8, 30), culto1: 'Alexandro', culto2: 'Alexandro', culto3: 'Alexandro'},
    {data: new Date(2024, 9, 1), culto1: 'Pr. Vinícius', culto2: 'Pr. Vinícius', culto3: 'Pr. Vinícius'},
    {data: new Date(2024, 9, 2), culto1: 'Pr. Leonardo', culto2: 'Pr. Leonardo', culto3: 'Pr. Leonardo'},
    {data: new Date(2024, 9, 3), culto1: 'Aguardando escala', culto2: 'Aguardando escala', culto3: 'Aguardando escala'},
    {data: new Date(2024, 9, 4), culto1: 'Diretor', culto2: 'Diretor', culto3: 'Diretor'},
    



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
