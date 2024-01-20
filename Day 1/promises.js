let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});

let promise2 = new Promise((resolve, reject) => {
  reject(new Error("Rejected!"));
});

promise1.then((value) => {
  console.log("Promise 1 Resolved: ", value);
});

promise2.catch((error) => {
  console.log("Promise 2 Rejected: ", error);
});

console.log("\n");

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is promise 3");
    resolve(1);
  }, 2000);
});

console.log(promise3);

promise3.then(
  (value) => {
    console.log("promise 3 resolved: ", value);
    console.log(promise3);
  },
  (error) => {
    console.log("promise 3 rejected", error);
  }
);

async function fetchDataFromAPI() {
  const apiURL = "https://jsonplaceholder.typicode.com/todos/1";

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

let b = fetchDataFromAPI();
b.then((x) => {
  console.log("Hello");
});
