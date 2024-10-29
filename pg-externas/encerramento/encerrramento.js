function calcularDiasParaEvento() {
    const hoje = new Date();
    const evento = new Date(hoje.getFullYear(), 11, 1); // 11 representa dezembro (0-11)
  
    // Se o evento já passou este ano, define para o próximo ano
    if (hoje > evento) {
      evento.setFullYear(evento.getFullYear() + 1);
    }
  
    // Define a hora do evento para 00:00:00
    evento.setHours(0, 0, 0, 0);
  
    const diferencaEmMs = evento.getTime() - hoje.getTime();
    const diasRestantes = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
  
    if (diasRestantes === 0) {
      return "É hoje!";
    } else {
      return `${diasRestantes} dias!`;
    }
  }
  
  // Exibe a mensagem na página
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = calcularDiasParaEvento();
  
  // Atualiza a mensagem a cada segundo
  setInterval(function() {
    mensagem.textContent = calcularDiasParaEvento();
  }, 1000);

  // Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Exibe a mensagem na página
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = calcularDiasParaEvento();
  
    // Atualiza a mensagem a cada segundo
    setInterval(function() {
      mensagem.textContent = calcularDiasParaEvento();
    }, 1000); 
  });