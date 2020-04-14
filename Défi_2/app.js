// customer Script : ---------------------------------------------------------------------------------

button1.onclick = function loadCustomer() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
            if(xhttp.status == 200) {
                try {
                    const user = JSON.parse(xhttp.responseText);
                    var output = '';
                    output += '<ul>' +
                    '<li>ID : '+user.id+'</li>' +
                    '<li>Name : '+user.name+'</li>' +
                    '<li>Company : '+user.company+'</li>' +
                    '<li>Phone : '+user.phone+'</li>' +
                    '</ul>';
                    document.getElementById('customer').innerHTML = output;
                } catch (e) {
                    console.warn('There was an error in the JSON. Could not parse!');
                }
            } else {
                console.warn('file not found');
            }
    };
    xhttp.open('get', 'customer.json', true);
    xhttp.send();
};

// customers Script : ---------------------------------------------------------------------------------

button2.onclick = function loadCustomers() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
            if(xhttp.status == 200) {
                try {
                    const users = JSON.parse(xhttp.responseText);
                    var output = '';
                    for(var i in users){
                        output += '<ul>' +
                        '<li>ID : '+users[i].id+'</li>' +
                        '<li>Name : '+users[i].name+'</li>' +
                        '<li>Company : '+users[i].company+'</li>' +
                        '<li>Phone : '+users[i].phone+'</li>' +
                        '</ul>';
                    }
                    document.getElementById('customers').innerHTML = output;
                } catch (e) {
                    console.warn('There was an error in the JSON. Could not parse!');
                }
            } else {
                console.warn('file not found');
            }
    };
    xhttp.open('get', 'customers.json', true);
    xhttp.send();
};