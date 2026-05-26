const username_final = "AsG1", password_final = "asg1"; 

let username_attempt, password_attempt, click_output, click_google, click_apple; click_facebook;

function LoginVerified(username_attempt, password_attempt) {
    username_attempt = document.getElementById("user-input").value;
    password_attempt = document.getElementById("pass-input").value;
    if (username_attempt == username_final && password_attempt == password_final) {
        alert("Welcome " + username_final + " to PhantomWall!"); 
        open("http://127.0.0.1:5500/index.html"); 
    } else {
        alert("Invalid Credentials. Try Again!");
        username_attempt = document.getElementById("user-input").value = "";
        password_attempt = document.getElementById("pass-input").value = "";
    }
}

function RegisterVerified(click_output) {
    if (click_output = document.getElementById("register-information").onclick) {
        alert("Registering Account - PhantomWall"); 
        open("http://127.0.0.1:5500/index.html");
    }
}

function SocialVerifiedGoogle(click_google) {
    click_google = document.getElementById("google-button").onclick;
    if (click_google) {
        alert("Social: Google - PhantomWall")
    }
}

function SocialVerifiedFacebook(click_facebook) {
    click_facebook = document.getElementById("facebook-button").onclick;
    if (click_facebook) {
        alert("Social: Facebook - PhantomWall");
    }
}

function SocialVerifiedApple(click_apple) {
    click_apple = document.getElementById("apple-button").onclick;
    if (click_apple) {
        alert("Social: Apple - PhantonWall");
    }
}