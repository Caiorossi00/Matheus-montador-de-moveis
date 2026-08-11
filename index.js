document.addEventListener('DOMContentLoaded', () => {
  const telefone = '5553984796866';

  function abrirWhatsapp(mensagem) {
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  const btnOrcamento = document.getElementById('btn-orcamento');
  if (btnOrcamento) {
    btnOrcamento.addEventListener('click', (e) => {
      e.preventDefault();
      const mensagem = 'Olá, Matheus! Gostaria de solicitar um orçamento para montagem de móveis.';
      abrirWhatsapp(mensagem);
    });
  }

  const btnRodape = document.getElementById('btn-whatsapp-rodape');
  if (btnRodape) {
    btnRodape.addEventListener('click', (e) => {
      e.preventDefault();
      const mensagem = 'Olá, Matheus! Gostaria de tirar uma dúvida sobre seus serviços.';
      abrirWhatsapp(mensagem);
    });
  }
});
