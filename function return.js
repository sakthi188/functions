//this function returns
var changed=0;
function change(num)
{
    return (num+5)/3;
}
changed=change(10);
console.log(changed);

//this function doesn't return anything
var changed1=0;
function change1(num)
{
    console.log(num);
}
changed=change1(10);