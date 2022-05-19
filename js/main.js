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
  } else {
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
  }
  if (datiValidi == true) {
    const prezzoAlKm = 0.21;

    // creiamo una variabile dove calcolare il prezzo finale
    let prezzoFinale = parseInt(inputKm.value) * prezzoAlKm;

    // variabile per lo sconto
    let scontoDaApplicare = 0;
    console.log("prezzo originale: ", prezzoFinale);

    if (parseInt(inputAge.value) < 18) {
      // applico sconto 20%
      scontoDaApplicare = 0.2;

      //  prezzoFinale = prezzoFinale - prezzoFinale * 0.2;
    } else if (parseInt(inputAge.value) >= 65) {
      // applico sconto 40%
      scontoDaApplicare = 0.4;

      // prezzoFinale = prezzoFinale - prezzoFinale * 0.4;
    }

    //  prezzoFinale = prezzoFinale - prezzoFinale * scontoDaApplicare;
    // Sarebbe coretto da scrivere cosi:
    prezzoFinale -= prezzoFinale * scontoDaApplicare;

    // Stampo il prezzo finale
    const customDisplayElement = document.getElementById("display-custom");

    customDisplayElement.classList.add("d-block");
    document.getElementById("prezzo").innerHTML = prezzoFinale.toFixed(2);
    document.getElementById("user-name").innerHTML = inputName.value;
    if (inputAge.value < 18 || inputAge.value > 65) {
      document.getElementById("sconto").innerHTML = "Biglietto ridotto";
    } else {
      document.getElementById("sconto").innerHTML = "Biglietto standard";
      let car = Math.floor(Math.random() * 101);
      document.getElementById("carrozza").innerHTML = car;
      document.getElementById("CP").innerHTML =
        Math.floor(Math.random() * 99999) + 10000;

      document.getElementById("prezzo").innerHTML =
        prezzoFinale.toFixed(2) + " " + "€";

      console.log("prezzo finale: ", prezzoFinale);
    }
  }
});

// Aggiunto il reset del form
annulaButton.addEventListener("click", function () {
  inputName.value = "";
  inputAge.value = "";
  inputKm.value = "";
  let customDisplayElement = document.getElementById("display-custom");
  customDisplayElement.classList.remove("d-block");
});
