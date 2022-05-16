var loginEmail = document.getElementById("loginEmail");
var phoneNumber = document.getElementById("phoneNumber");
var inputPass = document.getElementById("inputPass");
var inputConfPass = document.getElementById("inputConfPass");
var gridCheck = document.getElementById("gridCheck");
var emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/ ;
var numberRegex = /^([0-9]{3})([- \.]?)([0-9]{3})([- \.]?)([0-9]{4})$/ ;
var passRegex = /((?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+))/ ;
var emailLoginError = document.getElementById("emailLoginError"); 
var emailSignupError = document.getElementById("emailSignupError"); 
var numberError = document.getElementById("numberError");
var passError = document.getElementById("passError");
var passStrLabel = document.getElementById("passStrLabel");

function validLogin() 
    {
        if (emailRegex.test(loginEmail.value))
        {
            emailLoginError.innerHTML="Valid Format";
            loginEmail.style.border = "";
            return true;
        }
        else
        {
            emailLoginError.innerHTML="Invalid Format! Please re-enter email address";
            loginEmail.style.border = "red 1px solid";
            return false;
        }
    }
function validSignupEmail() 
    {
        if (emailRegex.test(signupEmail.value))
        {
            emailSignupError.innerHTML="Valid Format";
            signupEmail.style.border = "";
            return true;
        }
        else
        {
            emailSignupError.innerHTML="Invalid Format! Please re-enter email address";
            signupEmail.style.border = "red 1px solid";
            return false;
        }
    }

function validNumber()
{
        if (numberRegex.test(phoneNumber.value))
        {
            numberError.innerText = "Valid Number";
            phoneNumber.style.border = "";
            return true;
        }
        else
        {
            numberError.innerText = "Invalid Format! Please re-enter phone number";
            phoneNumber.style.border = "red 1px solid"
            return false;
        }
}

function validPass()
{
    if (passRegex.test(inputPass.value) && inputPass.value.length>=8)
    {
        passError.innerHTML = "Valid Format";
        inputPass.style.border = "";
        return true;
    }
    else
    {
        passError.innerHTML = "Password must contain a minimum of 8 characters with at least one uppercase, lowercase character and number";
        inputPass.style.border = "red 1px solid";
        return false;
    }
}

function validConfPass()
{
    if (inputConfPass.value == inputPass.value)
    {
        confError.innerHTML = "Passwords match";
        inputConfPass.style.border = "";
        return true;
    }
    else
    {
        confError.innerHTML = "Passwords don't match";
        inputConfPass.style.border = "red 1px solid";
        return false;
    }
}

function checkTerms()
{
    if (gridCheck.checked == false)
    {
        gridCheck.style.border = "red 1px solid";
    }
    return gridCheck.checked ? true : false
}

function passStrength()
{
    if (inputPass.value.length<=9)
    {
        inputPass.style.border = "red 1px solid";
        passStrLabel.style.color = "red";
        passStrLabel.innerHTML = "Weak Password!";
    }
    else if (inputPass.value.length>9 && inputPass.value.length<=12)
    {
        inputPass.style.border = "yellow 1px solid";
        passStrLabel.style.color = "yellow";
        passStrLabel.innerHTML = "Medium Password";
    }
    else if (inputPass.value.length>12)
    {
        inputPass.style.border = "green 1px solid";
        passStrLabel.style.color = "green";
        passStrLabel.innerHTML = "Strong Password!";
    }
    else if(inputPass.value.length == 0)
    {
        inputPass.style.border = "";
        passStrLabel.innerHTML = "";
    }
}

function validate()
{
    var a = validSignupEmail();
    var b = validNumber();
    var c = validPass();
    var d = validConfPass();
    var e = checkTerms();
    if (a && b && c && d && e)
    return true
    else
    return false
}
