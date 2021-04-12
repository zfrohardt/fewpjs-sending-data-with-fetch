// Add your code here
function submitData(name, email) {
    let userData = {
        "name": name,
        "email": email,
    };
    let fetchVar = fetch("http://localhost:3000/users", getConfigObject(userData));

    fetchVar.then(response => response.json())
    .then(json => document.body.innerHTML = json.id)
    .catch(error => document.body.innerHTML = error.message);

    return fetchVar;
}

function getConfigObject(reqBody) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    };

    configObj.body = JSON.stringify(reqBody);

    return configObj;
}