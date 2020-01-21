var weather = /** @class */ (function () {
    function weather() {
        this.temp = document.getElementById("temp");
        this.mains = document.getElementById("mainn");
        this.mag = document.getElementById("imge");
        this.locate = (document.getElementById("place").value);
        this.loc = document.getElementById("name");
        this.wind = document.getElementById("wind");
        this.press = document.getElementById("pressure");
        this.humid = document.getElementById("humid");
    }
    weather.prototype.find = function () {
        var _this = this;
        return fetch('http://api.weatherstack.com/current?access_key=c55132a6234cad11948e6cd8a696ef04&query=' + this.locate + '&units=f')
            .then(function (response) {
            return response.json();
        }).then(function (dataa) {
            console.log(dataa);
            {
                var name_1 = dataa["location"]["region"];
                var tempValue = dataa['current']['temperature'];
                var imga = dataa['current']['weather_icons'];
                var hum = dataa["current"]["humidity"];
                var pre = dataa["current"]["pressure"];
                var win = dataa["current"]["wind_speed"];
                var des = dataa["current"]["weather_descriptions"];
                _this.mains.innerHTML = "It's " + des[0];
                _this.loc.innerHTML = "your city =>  " + name_1;
                _this.temp.innerHTML = "Temp => " + tempValue;
                _this.wind.innerHTML = "wind speed => " + win;
                _this.press.innerHTML = "wind pressure => " + pre;
                _this.humid.innerHTML = "humidity =>   " + hum;
                _this.mag.src = imga[0];
                return dataa;
            }
        })["catch"](function (error) {
            alert("valid not");
        });
    };
    return weather;
}());
