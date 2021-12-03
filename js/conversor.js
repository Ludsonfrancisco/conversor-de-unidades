$(() => {
  $('button').click(() => {
    const milha = $('#ml')
    const metro = $('#mt')

    const conversonUnidadeParaMetro = (milha) => milha.val() * 1609.34
    // const conversonUnidadeParaMilha = (metro) => metro.val() / 1609.34

    metro.val(conversonUnidadeParaMetro(milha).toFixed(2))
    // milha.val(conversonUnidadeParaMilha(metro).toFixed(2))

  })

})