`-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
 -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.
`;

const person = { id: 1, name: "jhon" };

const post = ["Post 1", "Post 2", "Post 3"];

function fetchUserData(person) {
  return new Promise((resolve, reject) => {
    if (person) {
      resolve({ id: person.id, name: person.name });
    } else {
      reject("persona non trovata");
    }
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve({ userName, post });
    } else {
      reject("post non trovati");
    }
  });
}

fetchUserData(person)
  .then((user) => {
    console.log(user.id, user.name);
    return fetchUserPosts(user.id, user.name);
  })
  .then((result) => {
    console.log(`i post di ${result.userName}`);
    result.post.forEach((element) => {
      console.log(element);
    });
  })
  .catch((error) => {
    console.log(error);
  });
