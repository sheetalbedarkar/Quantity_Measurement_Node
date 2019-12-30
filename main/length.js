function feetConvertor(length) {
    // if(length == null || length == undefined || length == '') throw new Error('Length cannot be empty');
    return length*12;
}

function inchConvertor(length){
    return length
}

function yardConvertor(length){
    return length*36;
}

function CmConvertor(length){
    return Math.ceil(length*0.394);
}

function add(length1,length2){
    return length1+length2;
}
module.exports = {
    feetConvertor,
    inchConvertor,
    yardConvertor,
    CmConvertor,
    add
}

 
  