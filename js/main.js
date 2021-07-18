function showCities()
{
    let country = document.getElementById("countrySelect").value.toLowerCase();
    if(country != "choose...")
    {
        document.getElementById("countryPrompt").style.display = "none";
        let locationArr = document.getElementsByClassName("location");
        for(let l = 0; l < locationArr.length; l++)
        {
            locationArr[l].style.display = "block";
        }
        
    }
    else if(country === "choose..."){
        document.getElementById("countryPrompt").style.display = "block";
        let locationArr = document.getElementsByClassName("location");
        for(let l = 0; l < locationArr.length; l++)
        {
            locationArr[l].style.display = "none";
        }
    }
    console.log(country);
}

function signup() {
    let headersList = {

    }

    let formdata = new FormData();
    formdata.append("username", document.getElementById("username").value);
    formdata.append("password", document.getElementById("password").value);

    fetch("https://recation.herokuapp.com/signup", {
        method: "POST",
        body: formdata,
        headers: headersList
    }).then(r => null) // hope it is the right way to let it do noting
}