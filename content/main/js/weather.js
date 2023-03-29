const token = "4619caa912829cb525698f5306d64634";
const city = "London";
const BASEURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`
const get_weather = document.getElementById('get_weather');
const response_block = document.getElementById('response');
get_weather.addEventListener('click', () => {
    fetch(BASEURL)
    .then((response) => {
        response.json().then((data) => {
            if (data.error) {
                response_block.innerHTML = data.error;
            } else {
                response_block.innerHTML = data.main.feels_like;
            }
        })
    })
})