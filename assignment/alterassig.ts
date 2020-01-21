class weather {
    temp;
    mains;
    mag;
    locate: string;
    loc;
    wind;
    press;
    humid;

    constructor() {
        this.temp = document.getElementById("temp");
        this.mains = document.getElementById("mainn") as HTMLParagraphElement;
        this.mag = document.getElementById("imge") as HTMLImageElement;
        this.locate = ((document.getElementById("place") as HTMLInputElement).value);
        this.loc = document.getElementById("name");
        this.wind = document.getElementById("wind");
        this.press = document.getElementById("pressure");
        this.humid = document.getElementById("humid");
    }
    find() {
        return fetch('http://api.weatherstack.com/current?access_key=c55132a6234cad11948e6cd8a696ef04&query=' + this.locate + '&units=f')
            .then(response => {
                return response.json()
            }).then(dataa => {

                console.log(dataa)
                {
                    let name = dataa["location"]["region"]
                    var tempValue = dataa['current']['temperature'];
                    var imga = dataa['current']['weather_icons'];
                    let hum = dataa["current"]["humidity"];
                    let pre = dataa["current"]["pressure"];
                    let win = dataa["current"]["wind_speed"];
                    let  des = dataa["current"]["weather_descriptions"];


                    
                    this.mains.innerHTML = "It's " + des[0];
                    this.loc.innerHTML = "your city =>  "+name;
                    this.temp.innerHTML = "Temp => " + tempValue;
                    this.wind.innerHTML = "wind speed => " +win;
                    this.press.innerHTML="wind pressure => " +pre;
                    this.humid.innerHTML="humidity =>   " + hum;


                    this.mag.src = imga[0];
                    return dataa
                }
            })
            .catch((error: Error) => {
                alert("valid not");
            })
    }
}
