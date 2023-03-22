var num=5;
function equal(num1)
{
    if(num==num1)
    {
        console.log("Equal");
    }                              //output: equal
    else
    console.log("Not equal");
}
equal('5');


var num1=5;
function equal1(num2)
{
    if(num1===num2)
    {
       console.log("Equal");         //output: Not equal
    }
    else
    console.log("Not equal");
}
equal1('5');
