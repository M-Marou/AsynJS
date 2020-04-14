button.onclick = function loadData () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById('output').innerHTML = xhttp.responseText;
        } if (xhttp.status == 404){
            console.warn('file not found');
        }
    }
    xhttp.open('get', 'data.txt', true);
    xhttp.send();
}