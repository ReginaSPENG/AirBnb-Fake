
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var response
        if (this.readyState == 4 && this.status == 200) {

            response = JSON.parse(this.responseText)
            console.log(response)
            var text = ""
            for (i = 0; i < response.length; i++) {
                text += `<div style="background-color:lightblue">
                <h3>This is a heading</h3>
                <p>${response[i].name}</p>
                <p>${response[i].city}</p>
                <p>${response[i].price}</p>
                <img src=${response[i].photo}>{response[i].photo}</img>

              </div>`
               // text += response[i].name + "<br>";
            }
            document.getElementById("Principal").innerHTML = text
        }
    };




    xhttp.open("GET", "http://airbnb.douglasmaia.com/api/properties", true);
    xhttp.send();



}
