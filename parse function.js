function convertToInteger(str)
{
    return parseInt(str);
}
var a=convertToInteger("78");
console.log(a);        //78

var b=convertToInteger("abc");
console.log(b);       //NaN


function convertInt(str)
{
    return parseInt(str,2);
}
var c=convertInt("10011");
console.log(c);
