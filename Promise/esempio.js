function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("ok");
      } else {
        reject("ko");
      }
    }, 1000);
  });
}

checkAge(2)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
