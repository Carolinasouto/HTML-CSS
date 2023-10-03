// Exemplo de JavaScript inicial para desabilitar envios de formulários se houver campos inválidos
(() => {
  'use strict'

  // Busque todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap
  const forms = document.querySelectorAll('.needs-validation')

  // Passe por cima deles e evite o envio
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
