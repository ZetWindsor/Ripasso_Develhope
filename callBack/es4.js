`Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
`;

function runCallbacks(callbacks) {
   callbacks.forEach(element => {
    element()
   });
}
function firstCallback() {
    console.log("ciao");
}
function secondCallback() {
  console.log("mi chiamo");
}

function thirdCallback() {
  console.log("Poalo");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
