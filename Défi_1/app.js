button.onclick = function loadDate() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if(xhttp.status == 200) {
                document.getElementById('output').textContent = xhttp.responseText;
                // console.log(xhttp.responseText);
            }
            if (xhttp.status == 404){
                console.log('File not found');
            }
        } 
    };
    xhttp.open('get', 'data.txt', true);
    xhttp.send();
    // console.log(xhttp.readyState)
};