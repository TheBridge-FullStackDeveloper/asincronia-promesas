// function pelarPatatas() {
//   console.log("Pelar y cortar las patatas");
// }

// function freirPatatas() {
//   console.log(
//     "Introducimos las patatas cortadas en la sartén y que se cocinen"
//   );
//   setTimeout(() => {
//     console.log("Patatas friendose");
//   }, 10000);
// }

// function batirHuevos() {
//   console.log("batimos los huevos");
// }
// function escurrirPatatas() {
//   console.log("Quitamos con una espumadera las patatas de la sartén");
// }
// function mezclarIngredientes() {
//   console.log(
//     "Introducimos las patatas escurridas al bol con la cebolla y el huevo."
//   );
// }
// function hacerUnaTortilla() {
//   pelarPatatas();
//   freirPatatas();
//   batirHuevos();
//   escurrirPatatas();
//   mezclarIngredientes();
// }

// // hacerUnaTortilla();

// // let miPromesa = new Promise((resolve, reject) => {
// //     console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
// //     setTimeout(() => {
// //      resolve("Hola");
// //     }, 3000);
// //   });
// // let miPromesa = new Promise((resolve, reject) => {
// //   let number = Math.floor(Math.random() * (100 - 0 + 1) + 0);
// //   console.log("te prometo que " + number + " es menor igual que 50");
// //   if (number <= 50) {
// //     resolve(number + " es menor igual a 50");
// //   } else {
// //     reject("mentira");
// //   }
// // });

// // miPromesa.then((res) => console.log(res))
// //          .catch((err) => console.error(err));

// let friendoPatatas = new Promise((resolve,reject) => {
//   let number = Math.floor(Math.random() * (100 - 0 + 1) + 0);
//   console.log("Aquí friendo las patatas");
//   if (number <= 50) {
//     setTimeout(() => {
//       resolve("Patatas freídas");
//     }, 1000);
//   } else {
//     reject("se han quemado");
//   }
// });

// // friendoPatatas.then((value) => {
// //   console.log(value, "Ya podemos mezclar las patatas con los huevos batidos!");
// // }).catch(err => console.error(err))

// //   friendoPatatas.then((value) => {
// //     console.log(value, "Ya podemos mezclar las patatas con los huevos batidos!");
// //     mezclarIngredientes();
// //   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
//*CRUD

const postsDiv = document.querySelector(".posts");
const API_URL = "https://jsonplaceholder.typicode.com/posts/"
//read
axios
  .get(API_URL)
  .then((res) => {
    postsDiv.innerHTML = res.data.map((post) => `<p>${post.title}</p>`);
  })

  .catch((err) => console.error(err));
//create
axios
  .post(API_URL, {
    title: "New Post",
    body: "Body title",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//update
axios
  .put(API_URL + "1", {
    title: "Post updated",
    body: "Body updated",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//delete
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
