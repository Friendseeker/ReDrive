function showCities()
{
    let country = document.getElementById("countrySelect").value.toLowerCase();
    if(country === "choose")
    {
        console.log(false);
    }
    console.log(country);
}