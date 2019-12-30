function kilogramConvertor(mass){
    return mass;
}

function gramConvertor(mass){
    return mass / 1000;
}

function tonneConvertor(mass){
    return mass * 1000;
}

function add(mass1,mass2){
    return mass1 + mass2;
}

module.exports = {
    kilogramConvertor,
    gramConvertor,
    tonneConvertor,
    add
}