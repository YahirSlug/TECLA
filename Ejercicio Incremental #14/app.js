

function loadDoc() {

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function aver() {
        let jeison = JSON.parse(this.responseText)
        document.getElementById("nombrePer").innerHTML =  jeison.results[0].name.title + ". " +jeison.results[0].name.first +" "+ jeison.results[0].name.last;
        document.getElementById("pais").innerHTML = jeison.results[0].location.city + ", " + jeison.results[0].location.country;
        document.getElementById("nacimiento").innerHTML = jeison.results[0].dob.age + " años";
        document.getElementById("mail").innerHTML = jeison.results[0].email;
        document.getElementById("telefonof").innerHTML = "Tel: " + jeison.results[0].phone
        document.getElementById("empresa").innerHTML = jeison.results[0].nat;
        console.log(jeison.results[0].name.title + ". " +jeison.results[0].name.first)
      }
      xhttp.open("GET", "https://randomuser.me/api/");
      xhttp.send();
    }
    

    loadDoc()
  