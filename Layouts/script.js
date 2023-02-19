// A function to display the floating action buttons
function actionButtons() {
  let buttons = document.getElementById('floating-buttons-container');
    if(buttons.style.display=== "none"){
        buttons.style.display= "block";
    }else {
        buttons.style.display = "none";
    }
    let button_show = document.getElementById('add-file-button');
   button_show.addEventListener("blur", () => {
       buttons.style.display = "none";
    });
}
// function to open the chat page for a registered user
function registeredSuccessifully(){
    // document.getElementById('login-page').style.display = 'none';
    // document.getElementById('chat-page').style.display = 'block';
    // document.getElementById('register-page').style.display = 'none';
}

//showing the settings fo a smaller screen and hiding it when ignored
function showSettings() {
  let settingsMenu =  document.getElementById('settings-menu');
  if(settingsMenu.style.display=== "none"){
    settingsMenu.style.display= "block";
   // document.addEventListener("click", hideDiv);

}else {
    settingsMenu.style.display = "none";
}
/** adding an on ignore functionality*/
}


//changing the theme
var light = true;
function changeTheme(){
    let theme_image = document.getElementById('theme-image');
    let changeStyleSheet = document.getElementById("stylesheet");
    // let theme_name = docoment.getElementById('theme');
    if(light){
        theme_image.src = '/Layouts/Files/light-img.svg';
        changeStyleSheet.href = "dark.css";
        light = false;
        // theme_name.innerHTML = "Light Mode";
    }else {
        theme_image.src = '/Layouts/Files/dark-img.svg';
         changeStyleSheet.href = "style.css"; 
         light = true;
        //  theme_name.innerHTML = "Dark Mode";
    }
}

//uses an event listener to prevent submiting the form is any of the inputs is invalid
//function to validate the user inputs
    
    const form = document.querySelector('#myForm');
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();
// Get form inputs
    const name = document.getElementById("user-name").value;
    const phone = document.getElementById("phone-no").value;
    const password = document.getElementById("password").value;
//create variables to store the errors
    var nameError = document.getElementById('name-error-message');
    var phoneError = document.getElementById('phone-error-message');
    var passwordError = document.getElementById('password-error-message');
    // Regular expression patterns for validation
    const namePattern = /^[a-zA-Z ]+$/;
    const phonePattern = /^\d+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/;
  
    //check that the fields are not empty
    if (name.trim() === "" && phone.trim() === "" && password.trim() === "") {
        alert("Please fill in all fields.");
        return false;
        }else {
        //validating the user name
            //Check the name if the name field is empty
            if (name.trim() === "") {
                nameError.innerHTML =  "Please enter your name.";
                document.getElementById('user-name').style.borderColor = "red";
                return false;
                //else check that the format of the name is valid
                }else if (!name.match(namePattern)) {
                    nameError.innerHTML = "Name should contain only letters and spaces.";
                    document.getElementById('user-name').style.borderColor = "red";
                    return false;
                    }else{
                        //when everything is okay continue to the next step
                        document.getElementById('user-name').style.borderColor = "green";
                        nameError.innerHTML =  "";
                         }
        //validating the phone number
            if (phone.trim() === "") {
                phoneError.innerHTML =  "Please enter your phone Number.";
                document.getElementById('phone-no').style.borderColor = "red";
                return false;
                }else  if (!phone.match(phonePattern)) {
                    phoneError.innerHTML = "Phone number should contain only numbers.";
                    document.getElementById('phone-no').style.borderColor = "red";
                    return false;
                    }else{
                        phoneError.innerHTML =  "";
                        document.getElementById('phone-no').style.borderColor = "green";
                         }
        //validating the user password
            if (password.trim() === "") {
                passwordError.innerHTML = "Please enter your password.";
                document.getElementById('password').style.borderColor = "red";
                return false;
                }else  if (!password.match(passwordPattern)) {
                    document.getElementById('password').style.borderColor = "red";
                    passwordError.innerHTML ="Password should contain at least one letter, one number, and one special character and be at least 8 characters long.";
                    return false;
                    }else{
                        passwordError.innerHTML =  "";
                        document.getElementById('password').style.borderColor = "green";
                        }
                  }
        // If all inputs are valid, return true
            nameError.innerHTML = "";
            phoneError.innerHTML = "";
            passwordError.innerHTML = "";
            
            form.submit();
});