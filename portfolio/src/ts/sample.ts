function greeter(person) {
    return "Hello, " + person;
}

let user = "Tarou Yamada";

let button = document.createElement('button');
button.textContent = greeter(user);
//document.body.appendChild(button);