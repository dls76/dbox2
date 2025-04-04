const monthYearElement = document.getElementById("monthYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
// const todayButton = document.getElementById('todayButton');
const weekdaysElement = document.querySelector(".weekdays");
const daysElement = document.querySelector(".days");

const eventos = [
  //Fev
  {
    data: new Date(2025, 1, 3),
    culto1: "Diretor",
    culto2: "Diretor",
    culto3: "Diretor",
  },
  {
    data: new Date(2025, 1, 4),
    culto1: "Vice",
    culto2: "Vice",
    culto3: "Vice",
  },
  {
    data: new Date(2025, 1, 5),
    culto1: "Nailson",
    culto2: "Nailson",
    culto3: "Nailson",
  },
  {
    data: new Date(2025, 1, 6),
    culto1: "Andressa",
    culto2: "Nailson",
    culto3: "Malu",
  },
  {
    data: new Date(2025, 1, 7),
    culto1: "Diretor",
    culto2: "Diretor",
    culto3: "Diretor",
  },

  {
    data: new Date(2025, 1, 10),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 1, 11),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 1, 12),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },
  {
    data: new Date(2025, 1, 13),
    culto1: "Jaqueline",
    culto2: "Valéria",
    culto3: "Adriene",
  },
  {
    data: new Date(2025, 1, 14),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },

  {
    data: new Date(2025, 1, 17),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 1, 18),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 1, 19),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  {
    data: new Date(2025, 1, 20),
    culto1: "Carol",
    culto2: "Renata",
    culto3: "Jhessica",
  },
  {
    data: new Date(2025, 1, 21),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  {
    data: new Date(2025, 1, 24),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 1, 25),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 1, 26),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  {
    data: new Date(2025, 1, 27),
    culto1: "Márcio",
    culto2: "Nailson",
    culto3: "Ana Prado",
  },
  {
    data: new Date(2025, 1, 28),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  // Março

  {
    data: new Date(2025, 2, 3),
    culto1: "Recesso",
    culto2: "Recesso",
    culto3: "Recesso",
  },
  {
    data: new Date(2025, 2, 4),
    culto1: "Feriado",
    culto2: "Feriado",
    culto3: "Feriado",
  },
  {
    data: new Date(2025, 2, 5),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  { data: new Date(2025, 2, 6), culto1: "", culto2: "", culto3: "" },
  {
    data: new Date(2025, 2, 7),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  {
    data: new Date(2025, 2, 10),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 2, 11),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 2, 12),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  { data: new Date(2025, 2, 13), culto1: "", culto2: "", culto3: "" },
  {
    data: new Date(2025, 2, 14),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  {
    data: new Date(2025, 2, 17),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 2, 18),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 2, 19),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  { data: new Date(2025, 2, 20), culto1: "", culto2: "", culto3: "" },
  {
    data: new Date(2025, 2, 21),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  {
    data: new Date(2025, 2, 24),
    culto1: "Murilo",
    culto2: "Murilo",
    culto3: "Murilo",
  },
  {
    data: new Date(2025, 2, 25),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 2, 26),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  { data: new Date(2025, 2, 27), culto1: "", culto2: "", culto3: "" },
  {
    data: new Date(2025, 2, 28),
    culto1: "Pr. Leonardo",
    culto2: "Pr. Leonardo",
    culto3: "Pr. Leonardo",
  },

  // Abril

  {
    data: new Date(2025, 2, 31),
    culto1: "Recesso",
    culto2: "Recesso",
    culto3: "Recesso",
  },
  {
    data: new Date(2025, 3, 1),
    culto1: "Pr. Vini",
    culto2: "Pr. Vini",
    culto3: "Pr. Vini",
  },
  {
    data: new Date(2025, 3, 2),
    culto1: "Dire",
    culto2: "Dire",
    culto3: "Dire",
  },
  { data: new Date(2025, 3, 3), culto1: "Pr.Ari", culto2: "Pr.Ari", culto3: "Pr.Ari" },
  {
    data: new Date(2025, 3, 4),
    culto1: "Pr.Leo",
    culto2: "Pr.Leo",
    culto3: "Pr.Leo",
  },

  {
    data: new Date(2025, 3, 7),
    culto1: "Vice",
    culto2: "Vice",
    culto3: "Vice",
  },
  {
    data: new Date(2025, 3, 8),
    culto1: "Pr.Vini",
    culto2: "Pr.Vini",
    culto3: "Pr.Vini",
  },
  {
    data: new Date(2025, 3, 9),
    culto1: "Dire",
    culto2: "Dire",
    culto3: "Dire",
  },
  { data: new Date(2025, 3, 10), culto1: "Pr.Ari", culto2: "Pr.Ari", culto3: "Pr.Ari" },
  {
    data: new Date(2025, 3, 11),
    culto1: "Pr.Leo",
    culto2: "Pr.Leo",
    culto3: "Pr.Leo",
  },

  {
    data: new Date(2025, 3, 14),
    culto1: "Vice",
    culto2: "Vice",
    culto3: "Vice",
  },
  {
    data: new Date(2025, 3, 15),
    culto1: "Pr.Vini",
    culto2: "Pr.Vini",
    culto3: "Pr.Vini",
  },
  {
    data: new Date(2025, 3, 16),
    culto1: "Dire",
    culto2: "Dire",
    culto3: "Dire",
  },
  { data: new Date(2025, 3, 17), culto1: "Pr.Ari", culto2: "Pr.Ari", culto3: "Pr.Ari" },
  {
    data: new Date(2025, 3, 18),
    culto1: "Feriado",
    culto2: "Feriado",
    culto3: "Feriado",
  },

  {
    data: new Date(2025, 3, 21),
    culto1: "Feriado",
    culto2: "Feriado",
    culto3: "Feriado",
  },
  {
    data: new Date(2025, 3, 22),
    culto1: "Pr. Vinícius",
    culto2: "Pr. Vinícius",
    culto3: "Pr. Vinícius",
  },
  {
    data: new Date(2025, 3, 23),
    culto1: "Douglas",
    culto2: "Douglas",
    culto3: "Douglas",
  },
  { data: new Date(2025, 3, 24), culto1: "Pr.Ari", culto2: "Pr.Ari", culto3: "Pr.Ari" },
  {
    data: new Date(2025, 3, 25),
    culto1: "Pr.Leo",
    culto2: "Pr.Leo",
    culto3: "Pr.Leo",
  },
];

let currentDate = new Date();

function renderCalendar() {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const monthName = firstDayOfMonth.toLocaleString("default", {
    month: "long",
  });
  const capitalizedMonthName =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);

  monthYearElement.textContent = `${capitalizedMonthName} ${currentDate.getFullYear()}`;
  monthYearElement.classList.add("monthYear");
  weekdaysElement.innerHTML = "";
  daysElement.innerHTML = "";

  // Render weekdays
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  weekdays.forEach((weekday) => {
    const weekdayElement = document.createElement("div");
    weekdayElement.classList.add("weekday");
    weekdayElement.textContent = weekday;
    weekdaysElement.appendChild(weekdayElement);
  });

  // Render days
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    const emptyDayElement = document.createElement("div");
    emptyDayElement.classList.add("day");
    daysElement.appendChild(emptyDayElement);
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");

    const dayNumberElement = document.createElement("div");
    dayNumberElement.classList.add("day-number");
    dayNumberElement.textContent = i;
    // if ( i === currentDate.getDate()) {
    //   dayNumberElement.style.color = "dodgerblue"
    // }
    dayElement.appendChild(dayNumberElement);

    if (
      currentDate.getDate() === i &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      dayElement.classList.add("current-day");
    }

    const eventsOnDay = eventos.filter(
      (evento) =>
        evento.data.getDate() === i &&
        evento.data.getMonth() === currentDate.getMonth() &&
        evento.data.getFullYear() === currentDate.getFullYear()
    );

    eventsOnDay.forEach((evento) => {
      const eventElement1 = document.createElement("div");
      eventElement1.classList.add("event");
      eventElement1.textContent = "07:00 | " + evento.culto1;
      dayElement.appendChild(eventElement1);

      const eventElement2 = document.createElement("div");
      eventElement2.classList.add("event");
      eventElement2.textContent = "10:15 | " + evento.culto2;
      dayElement.appendChild(eventElement2);

      const eventElement3 = document.createElement("div");
      eventElement3.classList.add("event");
      eventElement3.textContent = "13:00 | " + evento.culto3;
      dayElement.appendChild(eventElement3);
    });

    daysElement.appendChild(dayElement);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// todayButton.addEventListener('click', () => {
//   currentDate = new Date();
//   renderCalendar();
// });

renderCalendar();
