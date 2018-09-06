//Video-course: https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4393202?start=0

/*

console.log("Hello world!");

console.log(200);

console.log(true);

var num = 10;

console.log(num);


// simple function

function makeCoffe (sugar, milk) {
    var instructions = "Boil water,";
    instructions += " pour into cup,";
    instructions += " add coffe granules,";
    instructions += " add " + sugar + " spoons of sugar";
    instructions += " add " + milk + " % of milk.";
    return instructions;
}

console.log(makeCoffe(2, 20));


//not working, doesn't get the case value

function goToWorkByCar (weather, km, fuellitre, time) {
    switch (goToWorkByCar) {
        case 10 || km === 10 && fuellitre === 10 && time === 'few':
        console.log('As you choose: weather is ' + weather + '; km is ' + km + '; fuel - litre is '  + fuellitre + '; time is ' + time + ';. So I think it will be better you go to work by car!');
        break;
        default:
        console.log('As you choose: weather is ' + weather + '; km is ' + km + '; fuel - litre is '  + fuellitre + '; time is ' + time + ';. So I think it will be better you go to work NOT by car!');
        break;
    }
    }

goToWorkByCar ( 10, 10, 10, 'few' );


// simple function

function somenumber (x, y) {
    let table = 'lets sum: ';
    table += +x+ ' + ' +y+ ' = ';
    table += x + y + '!';
    return table;
}
console.log(somenumber(8, 4));

// object:
var car = {
    color : "red",
    speed : 200,
    drive : function(){ return "drive"; }
};

//array:
var shoppinglist = [
    "Orange",
    "Apple",
    "Pear"
];


var car = {
    make : "volvo",
    speed : 160,
    engine : {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        pistons :[
            { maker : "BMW" },
            { maker : "BMWbmw" }
        ]
    },
    drive : function() { return "drive"; }
};
var array = [
    "string",
    100,
    ["embed", 200],
    {car : "ford"},
    function() {return "drive";}
]


//some functions in work:

function name (){
    var fullname = 'Michael Feninets';
    function cons (sum) {
        function mr(x, y) {
            return x + y;
        }
        return mr("M", "R. ") + sum;
    }

    return cons(fullname);
}

function myaddres () {
    var city = "Kyiv";
    var country = "Ukraine";
    function fulladdres (x, y){
        return "I leave in " + x + ", this is the best city in " + y + "!";
    }
    return fulladdres (city, country);
}


//callableObjects

function myname (fullname){
    return fullname.firstname + fullname.lastname;
}
console.log(myname ({firstname: "Michael", lastname: "Feninets"}));

//callableObjects

console.log(name (function (){
    return "embed";
}))
function name (fullname) {
    return fullname();
}


var myName = "Michael1"       //executed

console.log( myName, myName2,names3());

var myName2 = "Michael2"       //not executed
function names3 (name) {       //executed
    return "Michael3";
}

*/
