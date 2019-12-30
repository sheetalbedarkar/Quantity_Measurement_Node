function gallonConvertor(volume){
    return volume * 3.78;
}

function litresConvertor(volume){
    return volume;
}

function mlConvertor(volume){
   return volume / 1000;
}

function add(volume1,volume2){
    return volume1 +volume2 ;
}

module.exports = {
    gallonConvertor,
    litresConvertor,
    mlConvertor,
    add
}