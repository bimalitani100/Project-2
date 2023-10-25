const form = document.getElementById('response');

const printSong = (event) => {
    // Get the name of the requester
    let name = document.getElementById('name').value;
    let user =document.getElementById('username').value;
    let password =document.getElementById('password').value;
    let con = document.getElementById('confirm').value;
    // Print the name
    console.log(name);
    // print user name
    console.log(user);
    // print password
    console.log(con);
    if(password!=con){
        console.log("Password doesnot match");
    }
    else{
        console.log("Password match");
    }
    console.log(password);
    // Prevent default behavior
    event.preventDefault();
}

form.addEventListener('submit', printSong);


// form validation below =>

const validateForm = (event) => {
    let elements = document.getElementById('response').elements;

    for (let i = 0; i < elements.length; i++) {
        

        // Check if the input is empty
        if (elements[i].value === "") {
            console.log("This input is empty!");
        } else {
            console.log("This input has some data");
            // Print out each element in the elements array
            console.log(elements[i].value);
        }
    }
    // Prevents redirect
    event.preventDefault();
}
form.addEventListener('submit',validateForm);

