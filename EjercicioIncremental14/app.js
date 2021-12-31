cargar()

function cargar(){
  loadDoc()
  loadDoc2()
  loadDoc3()
  loadDoc4()
  text()
}

function text() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function aver() {
      let jeison = JSON.parse(this.responseText)
      let indice = Math.floor((Math.random() * (41 - 0 + 1)) + 0);
      document.getElementById("frase1").innerHTML = jeison[indice].cita;
      indice = Math.floor((Math.random() * (41 - 0 + 1)) + 0);
      document.getElementById("frase2").innerHTML = jeison[indice].cita;
      indice = Math.floor((Math.random() * (41 - 0 + 1)) + 0);
      document.getElementById("frase3").innerHTML = jeison[indice].cita;

    }
    xhttp.open("GET", "https://raw.githubusercontent.com/bitgary/hola-mundo/master/citas.json");
    xhttp.send();
  }
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function aver() {
      let jeison = JSON.parse(this.responseText)
      document.getElementById("nombrePer").innerHTML =  jeison.results[0].name.title + ". " +jeison.results[0].name.first +" "+ jeison.results[0].name.last;
      document.getElementById("pais").innerHTML = jeison.results[0].location.city + ", " + jeison.results[0].location.country;
      document.getElementById("nacimiento").innerHTML = jeison.results[0].dob.age + " años";
      document.getElementById("foto").src = jeison.results[0].picture.large;
      document.getElementById("mail").innerHTML = jeison.results[0].email;
      document.getElementById("telefonof").innerHTML = "Tel: " + jeison.results[0].phone
      document.getElementById("empresa").innerHTML = jeison.results[0].nat;
    }
    xhttp.open("GET", "https://randomuser.me/api/");
    xhttp.send();
  }
  function loadDoc2() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function aver() {
        let jeison = JSON.parse(this.responseText)
        document.getElementById("nombrePer2").innerHTML = jeison.results[0].name.first +" "+ jeison.results[0].name.last;
        document.getElementById("foto2").src = jeison.results[0].picture.thumbnail;
  
      }
      xhttp.open("GET", "https://randomuser.me/api/");
      xhttp.send();
    }
    function loadDoc3() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function aver() {
          let jeison = JSON.parse(this.responseText)
          document.getElementById("nombrePer3").innerHTML = jeison.results[0].name.first +" "+ jeison.results[0].name.last;
          document.getElementById("foto3").src = jeison.results[0].picture.thumbnail;
    
        }
        xhttp.open("GET", "https://randomuser.me/api/");
        xhttp.send();
      }
      function loadDoc4() {
          const xhttp = new XMLHttpRequest();
          xhttp.onload = function aver() {
            let jeison = JSON.parse(this.responseText)
            document.getElementById("nombrePer4").innerHTML = jeison.results[0].name.first +" "+ jeison.results[0].name.last;
            document.getElementById("foto4").src = jeison.results[0].picture.thumbnail;
      
          }
          xhttp.open("GET", "https://randomuser.me/api/");
          xhttp.send();
        }