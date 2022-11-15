let cities = ["Tokyo", "Jakarta", "Budapest", "Milan", "Paris"];
var i = 0;
while (i < cities.length) {
    document.getElementById("city").innerHTML += "I will visit " + cities[i] + "<br>";
    i++;
}