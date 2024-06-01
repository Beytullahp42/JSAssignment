function disableButton(button) {
    alert('The course is added to the wait list!');
    button.style.backgroundColor = 'gray';
    button.textContent = 'Added to wait list';
    button.disabled = true;
}
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
function viewModal(block) {
    modal.style.display = "block";
    let content = "";
    switch (block.id) { //content for each course
        case "js":
            content = "<ul><li>HTML & CSS Fundamentals</li><li>Introduction to JavaScript</li><li>JavaScript Functions</li><li>JavaScript Arrays</li><li>...</li></ul>";
            break;
        case "py":
            content = "<ul><li>Python Basics</li><li>Python Functions</li><li>Python Lists</li><li>Python Dictionaries</li><li>...</li></ul>";
            break;
        case "rj":
            content = "<ul><li>Introduction to React.js</li><li>React Components</li><li>React State</li><li>React Props</li><li>...</li></ul>";
            break;
        case "fd":
            content = "<ul><li>Introduction to Flutter</li><li>Flutter Widgets</li><li>Flutter State Management</li><li>Flutter Navigation</li><li>...</li></ul>";
            break;
    }
    document.getElementById("description").innerHTML = content;
    let imgElement = block.querySelector('img');
    document.getElementById("modal-img").src = imgElement.src;
    document.getElementById("modal-title").textContent = block.querySelector('h2').textContent;
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}