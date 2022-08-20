async function getData() {
  let url = "https://jsonplaceholder.typicode.com/photos/1";
  let data = await fetch(url);
  let result = await data.json();
  console.log(result);
}
getData();
