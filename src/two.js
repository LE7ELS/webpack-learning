function two() {
    let element = document.createElement("div");
    element.innerHTML = "This is the second entry file!";
    return element;
}

document.getElementById("root").appendChild(two());
