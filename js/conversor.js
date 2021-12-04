$(() => {
  $('#calc').click(() => {
    $('#formValidate').validate({
      debug: true,
      rules: {
        ml: {
          required: true,
          number: true,
        }
      }
    })
    $('#formValidate').valid()

    const milhas = parseFloat($('#ml').val())
    const metros = (milhas * 1609.34).toFixed(2)

    if (isNaN(milhas)) {
      $('#mt').val('')
    } else {
      $('#mt').val(metros)
    }
  })
})


