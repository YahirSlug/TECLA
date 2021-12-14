console.log("uwu")

function socios() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function aver() {
      let data = JSON.parse(this.responseText)
      console.log(data[0].name)
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/");
    xhttp.send();
  }
  

socios()
