let locations = document.getElementById('location')
let tempIcon = document.getElementById('icon')
let tempValue = document.getElementById('temp-value')
let climate = document.getElementById('climate')
let iconfile
window.addEventListener('load', ()=>{
    let lon
    let lat

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            lon= position.coords.longitude
            lat =position.coords.latitude
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4677710a835beeb1ad88615a46707b8a`
            fetch(api).then(response => response.json())
            .then(data => {
                const{name} =data
                const{feels_like} =data.main
                const {id,main} = data.weather[0]
                locations.innerText = name
                climate.innerText = main
                climate.style.color = 'white'
                tempValue.textContent = Math.round(feels_like-273)
                if(id<250)
                {
                    tempIcon.src = 'thunder.png'
                }
                else if(id<350){
                    tempIcon.src = 'drizzle.png'
                }
                else if(id<550){
                    tempIcon.src = 'rain.png'
                }
                else if(id<650){
                    tempIcon.src = 'snow.png'
                }
                else if(id<800){
                    tempIcon.src = 'atmosphere.png'
                }
                else if(id === 800){
                    tempIcon.src = 'clear.png'
                }else if(id>800){
                    tempIcon.src = 'clouds.png'
                }
                console.log(data)})
        })
    }
})