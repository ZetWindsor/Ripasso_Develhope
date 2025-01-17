`-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.`;

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("ok");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("minore");
      }, 2000);
    }
  });
};

checkAge(20)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
