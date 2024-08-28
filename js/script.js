/*function validateForm() {
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
}*/

/*function formValidation() {
  // Ini cara ambil DOM
  let name = document.getElementById('full-name').value;
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
}*/

function formValidation() {
  // Get the form elements
  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('date');
  const genderRadio = document.getElementsByName('gender');
  const messageInput = document.getElementById('message');
  const resultElement = document.getElementById('result');

  // Validate the name field
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return false;
  }

  // Validate the date field
  if (dateInput.value === '') {
    alert('Please enter your birth date.');
    return false;
  }

  // Validate the gender field
  let genderSelected = false;
  for (let i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    alert('Please select your gender.');
    return false;
  }

  // Validate the message field
  if (messageInput.value === '') {
    alert('Please enter a message.');
    return false;
  }

  // If all fields are valid, display the results
  const resultText = `Name: ${nameInput.value}<br>Birth Date: ${dateInput.value}<br>Gender: ${genderRadio[0].checked ? 'Male' : 'Female'}<br>Message: ${messageInput.value}`;
  resultElement.innerHTML = resultText;
  return true;
}
