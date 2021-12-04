$(() => {
  $('#calc').click(() => {
    $('#formValidate').valid()
    $('#formValidate').validate({
      debug: true,
      rules: {
        ml: {
          required: true,
          number: true,
          accept: "Digite um número!"
        }
      }
    })

    const milhas = parseFloat($('#ml').val())
    const metros = (milhas * 1609.34).toFixed(2)

    if (isNaN(milhas)) {
      $('#mt').val('')
    } else {
      $('#mt').val(metros)
    }
  })
})


