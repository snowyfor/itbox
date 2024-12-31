// Promise in variable
let janji = new Promise((resolve, reject) => {
  try {
    resolve("Fulfilled");
  } catch (err) {
    reject(err);
  }
});

janji.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});

// Promise in function
function janjiManis() {
  return new Promise((resolve, reject) => {
    try {
      resolve("Janji Manis Terpenuhi");
    } catch (err) {
      reject(err);
    }
  });
}

janjiManis()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });