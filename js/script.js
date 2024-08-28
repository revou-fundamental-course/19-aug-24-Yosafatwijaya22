function validateForm() {
  const name = document.forms['message-form']['full-name'].value;
  const birthDate = document.forms['message-form']['birth-date'].value;
  const gender = document.forms['message-form']['gender'].value;
  const messages = document.forms['message-form']['messages'].value;

  if (name == '' || birthDate == '' || gender == '' || messages == '') {
    alert('Tidak boleh kosong');
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}

function formValidation() {
  // Ini cara ambil DOM
  let name = document.getElementById('name').value;
  // Ini Kondisi pemisahnya
  if (name == '') {
    alert('Formnya kosong');
    // Ini Kondisi jika Formnya kosong
    document.getElementById('result').innerHTML = '-';
  } else {
    // Ini Kondisi jika Formnya Diisi
    document.getElementById('result').innerText = name;
  }
  console.log(name);
}
