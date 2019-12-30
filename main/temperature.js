function celsiusConvertor(temperature){
    return (temperature * 9 / 5) + 32;
}

function fahrenheitConvertor(temperature){
    return temperature;
}

module.exports = {
    celsiusConvertor,
    fahrenheitConvertor
}