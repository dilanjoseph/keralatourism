function check()
{
    let em=document.getElementById("exampleInputEmail1");
    let pass=document.getElementById("exampleInputPassword1");
    let reg1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let reg2=/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
    if(reg1.test(em.value) && (reg2.test(pass.value)))
    {
        return true;
    }
    else
    {
        em.style.border="2px solid red";
        pass.style.border="2px solid red";
        em.setAttribute("placeholder","Invalid Email");
        alert("Invalid Email or password");
        return false;
    }

}
function valid()
{
    let em = document.getElementById("inputEmail4");
    let pass=document.getElementById("inputPassword4");
    let passcon=document.getElementById("inputPassword5");
    let ph=document.getElementById("phone");
    let regem=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regpass=/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
    let regphone=/^([0-9]{3})([-.' ']{1})([0-9]{3})([-.' ']{1})([0-9]{4})$/;
    if (regem.test(em.value))
    {
        if(regphone.test(ph.value))
        {
            if(regpass.test(pass.value))
            {
                if(pass.value==passcon.value)
                {
                    return true;
                }
                else
                {
                    passcon.style.border="2px solid red";
                    alert("Passwords don't match!");
                    return false;
                }
            }
            else
            {
                pass.style.border="2px solid red";
                pass.setAttribute("placeholder","Invalid format");
                alert("Password must contain atleast 1 uppercase alphabet, 1 lowercase alphabet and 1 number.")
                return false;
            }
        }
        else
        {
            ph.style.border="2px solid red";
            ph.setAttribute("placeholder","Invalid format");
            return false;
        }
    }
    else
    {
        em.style.border="2px solid red";
        alert("Invalid email");
        em.setAttribute("placeholder","Invalid format");
        return false;
    }
}
function strength()
{
    let pass=document.getElementById("inputPassword4");
    let str=document.getElementById("strength");
    if(pass.value.length>=8 && pass.value.length<14)
    {
        str.innerText="Medium";
        str.style.color="orange";
        pass.style.border="2px solid orange";
    }
    else if(pass.value.length>=14)
    {
        str.innerText="Strong";
        str.style.color="green";
        pass.style.border="2px solid green";
    }
    else
    {
        str.innerText="Weak";
        str.style.color="red";
        pass.style.border="2px solid red";
    }
}