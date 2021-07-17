function showCities()
{
    let country = document.getElementById("countrySelect").value.toLowerCase();
    if(country != "choose")
    {

        console.log("change country");
    }
    console.log(country);
}