function mostrarPagina(id) {
  // Esconde todas
  document.querySelectorAll('.pag').forEach(p => p.classList.remove('ativa'));

  // Mostra a escolhida
  document.getElementById(id).classList.add('ativa');
}
