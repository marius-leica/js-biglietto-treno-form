// Selezzinare gli input e salvarli in una variabile
const inputName = document.querySelector('[name="userName"]');
const inputAge = document.querySelector('[name="userAge"]');
const inputKm = document.querySelector('[name="distance"]');

const generaButton = document.getElementById("submit");
const annulaButton = document.getElementById("reset");
let datiValidi = true;

// Aggiunto un evento al click del bottone
generaButton.addEventListener("click", function () {
  // validazione dei dati
  if (inputName.value == "" || inputAge.value == "" || inputKm.value == "") {
    datiValidi = false;
    alert("Per favore inserisci tutti i dati richiesti");
  }

  let userName = inputName.value;
  if (!isNaN(userName) || userName.length < 3) {
    datiValidi = false;
    alert("Per favore inserisci un valore valido per il nome");
  }

  if (inputAge.value < 14 || inputAge.value > 122) {
    datiValidi = false;
    alert("Per favore inserisci un valore compreso tra 14 e 122 anni");
  }
  if (inputKm.value < 10 || inputKm.value > 2000) {
    datiValidi = false;
    alert("Per favore inserisci un valore compreso tra 10 e 2000 km");
  }
  if (datiValidi == true) {
    console.log(inputName.value);
    console.log(inputAge.value);
    console.log(inputKm.value);
  }
});

// Aggiunto il reset del form
annulaButton.addEventListener("click", function () {
  inputName.value = "";
  inputAge.value = "";
  inputKm.value = "";
});
