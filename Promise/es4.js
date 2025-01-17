`-Crea una Promise che simula il recupero dei dati da un'API.
 A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. 
 -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
 -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data
`;
function fetchDataFromAPI(num) {
  const timeout = 2000;

  return new Promise((resolve, reject) => {
    if (num < 0.5) {
      setTimeout(() => {
        resolve("success");
      }, timeout);
    } else {
      setTimeout(() => {
        reject("explosion");
      }, timeout);
    }
  });
}

fetchDataFromAPI(Math.random() * 1)
  .then((data) => {
    console.log(data);
  })
  .catch((errore) => {
    console.log(errore);
  });
