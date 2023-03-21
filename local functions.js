function Example()
{
    var animal1="Cat";
    console.log(animal1); //var animal1 can be accessed only inside Example
}
function Example1()
{
    var animal2="dog";
    console.log(animal2); //var animal2 can be accessed only inside Example1
}
Example();
Example1();