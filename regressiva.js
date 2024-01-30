window.addEventListener("load", function() {
    const proximosEventos = [
      { nome: "Capacitação de professores", data: new Date(2024, 0, 29) },
      { nome: "Reunião de pais EI-FI", data: new Date(2024, 0, 30) },
      { nome: "Reunião de pais novos FII-EM", data: new Date(2024, 1, 1) },
    ];
  
  próximosEventos.forEach((e)=>{
    
    const a = document.createElement('a')
    
  })
  
    const regressivaEventos = [...document.querySelectorAll('.regressivaevento')];
  
    function countdown() {
      let now = new Date();
  
      proximosEventos.forEach((evento, index) => {
        let eventDate = evento.data;
  
        // Ajuste para levar em conta o horário atual
        eventDate.setHours(23, 59, 59, 999);
  
        let currentTime = now.getTime();
        let eventTime = eventDate.getTime();
  
        let remTime = eventTime - currentTime;
  
        let s = Math.floor(remTime / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);
  
        h %= 24;
        m %= 60;
        s %= 60;
  
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
  
        if (d <= 0) {
          regressivaEventos[index].innerHTML = `É hoje!`;
        } else if (d === 1) {
          regressivaEventos[index].innerHTML = `Falta ${d} dia`;
        } else {
          regressivaEventos[index].innerHTML = `Faltam ${d} dias`;
        }
      });
  
      setTimeout(countdown, 1000);
    }
  
    // Inicializar a contagem regressiva
    countdown();
  });
  
  