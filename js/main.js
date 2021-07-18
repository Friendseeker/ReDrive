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