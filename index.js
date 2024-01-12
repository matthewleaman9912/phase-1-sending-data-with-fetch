// Add your code here


function submitData (name, email) {
    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    }
    return fetch('http://localhost:3000/users', data) 
        .then(function (response){
            return response.json();
        })
        .then(function(object){
            let info = document.querySelector("body")
            info.innerHTML = object.id
        })
        .catch(function(error) {
            let message = document.querySelector("body")
            message.innerHTML = error;
        })
}
