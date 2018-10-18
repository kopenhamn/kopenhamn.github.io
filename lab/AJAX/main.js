function loadDoc(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readystate == 4 && this.status == 200) {

            document.getElementById('textHere').innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "test.txt", true);
    xhttp.send();
}
