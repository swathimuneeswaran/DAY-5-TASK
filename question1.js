//JSON 

//for loop

function json(arr)
{
    var keyArr=Object.keys(arr);
    
    for(var i=0;i<keyArr.length;i++)
    {
        var out=keyArr[i];
        console.log(out + ":" + arr[out]);
    }
}

var person={
    "name":"swathi",
    "gender":"Female",
    "age":22,
    "Nationality":"Indian",
}

json(person);


// for in loop

function json(a)
{
    for(var a in person)
    {
      console.log(a  + ":" + person[a]);
    }
}

var person={
    "name":"swathi",
    "gender":"Female",
    "age":22,
    "Nationality":"Indian",
}

json(person);



//for of loop
function json(a)
{
    for(var [key,value] of Object.entries(a))
    {
      console.log(key + ":" + value);
    }
}

var person={
    "name":"swathi",
    "gender":"Female",
    "age":22,
    "Nationality":"Indian",
}

json(person);


//for each loop


function json(a)
{
    Object.keys(a).forEach(function(key)

    {
      console.log(key + ":" + a[key]);
    });
}

var person={
    "name":"swathi",
    "gender":"Female",
    "age":22,
    "Nationality":"Indian",
}

json(person);

