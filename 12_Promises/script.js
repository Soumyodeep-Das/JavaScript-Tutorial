// let resultFromServer = fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// )

// console.log(resultFromServer) // returns Promise {<pending>}

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

const getDataFromServer = async () => {
  let resultFromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
    );
    console.log( await resultFromServer.json())
};

getDataFromServer()


