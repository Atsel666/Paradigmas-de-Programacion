let list = document.getElementById("list");

let values = ['James Brown', 'Joe Mama', 'Julieta Venegas'];

const showValues = () => values.map( value => {
    let componentLI = document.createElement("li");
    componentLI.innerHTML = value;
    list.appendChild(componentLI);
})

const addName = () => {
    let value = document.getElementById("nameValue");
    list.innerHTML="";
    values.push(nameValue.value);
    console.log(values);
    showValues();
    nameValue.value="";
}

showValues();