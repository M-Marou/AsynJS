var url  = "http://localhost:3000/books";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
        try {
            var output = '';
            for(var i in users){
                output += '<tr>' +
                '<td>'+users[i].author+'</td>' +
                '<td>'+users[i].country+'</td>' +
                '<td>'+users[i].language+'</td>' +
                '<td>'+users[i].title+'</td>' +
                '<td>'+users[i].year+'</td>' +
                '<td>'+users[i].pages+'</td>' +
                '<td><a>'+users[i].link+'</a></td>' +
                '</tr>'
                ;
            }
            document.getElementById('mylist_books').innerHTML = output;
        } catch (e) {
            console.warn('There was an error in the JSON. Could not parse!');
        }
	} else {
		console.error(users);
	}
}
xhr.send(null);

// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "201") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send();



        // ((res) => res.json());
        // ((data) => {
        //     let output = '';
        //     data.forEach(function(user){
        //         output += `
        //                 <ul>
        //                 <li>${user.author}</li>
        //                 <li>${user.country}</li>
        //                 <li>${user.language}</li>
        //                 <li>${user.title}</li>
        //                 <li>${user.year}</li>
        //                 <li>${user.pages}</li>
        //                 <li>${user.link}</li>
        //                 </ul>  
        //         `;
        //     });
        //     document.getElementById('testing').innerHTML = output;
        // })