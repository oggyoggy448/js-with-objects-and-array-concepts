window.onload = init;

function init(){
    // object creation 
    var countries = {
        name : "China",
        "no of province": 36,
        location : "Asia",
        university: {
            province: "Chongqing",
            city: "chongqing",
            "university name": "Chongqing University"
        }

    };

    //object access ways 
    console.log(countries.university["university name"]);
    console.log(countries.name);

    //modification 
    countries.name = "Germany";
    var provinces = "36";
    countries["no of province"] = provinces;

    //In some cases we have to put quotes around the property name:
    // Or it contains spaces or special characters,

    countries['no of province'] = '6 avril 1943'; // OK
    countries["date of publication"] = '6 avril 1943'; // allowed, but avoid!

    // An object can contain another object
    countries.university['university name'];
    countries.university.province;

    //object can contain function too 

    var math = {
        first_number : 4,
        second_number: 5,
        sum(){
            return this.first_number + math.second_number;
        }
        ,
        avg(){
            return math.sum()/2;
        }
    }


    //access the object 
    console.log(math.sum());
    console.log(math.avg());


    //use of this keyword
    var math01 = {
        first_number : 4,
        second_number: 5,
        sum(math){
            return (math.first_number+math+second_number) +(this.first_number + this.second_number);
        }
        ,
        avg(){
            return math.sum()/2;
        }
    }


    //custom object 
    var custom_country = {};
    //adding a new key elements 
    custom_country.name = "ABC";
    custom_country.continent = "ASIA";
    custom_country.province = function(){return 4;};
    //deleteing some element 
    delete custom_country.continent;

    console.log(custom_country.province());
    
    //old way to create a class 
    // ES5's constructor functions, the new keyword
    //hero name will always be captilzed i.e. Hero
    function Hero(name, side) {
        //this keyword is used to distinguish the object property and parameters values. here this.name is property 
        //not the parameter.
        this.name = name;
        this.side = side;
        //function defining
        //function keyword is necessary
        this.speak = function() {
            console.log("My name is " + this.name + " and I'm with the " + this.side);
        }
    }

    //function calling
    //make use to use the new keyword
    var luke = new Hero('Luke Skywalker', 'rebels');        
    //use . operator to call it.
    console.log(luke.speak());

    // new way to caches create a class 
    // use class keyword
    class hero1 {
        // use constructor keyword 
        constructor(name, side) {
            this.name = name; // property
            this.side = side; // property
        }
        // there is no need to use function keyword to define a function 
        speak() { // method, no more "function"
            return "<p>My name is " + this.name +
                   ", I'm with the " + this.side + ".</p>";
        }
    }
     
    var darkVador = new hero1("Dark Vador", "empire");
    console.log(darkVador.speak());

    /*********************************Error information ************************ */
    //ReferenceError comes when you try to access the class without declaring it. 
    // console.log(new Park("value1","value3"));

    /***************************************a new way to create a object**********************(((()))) */
    // function getMousePos(event, canvas) {
    //     // var rect = canvas.getBoundingClientRect();
    //     // var mxx = event.clientX - rect.left;
    //     var my = event.clientY - rect.top;
        
    //     //new way to create a object
    //     return { // the getMousePos function returns an object. It’s a factory
    //         x: mx,
    //         y: my
    //     }
    // }

    // //note that evt and canvas are not defined yet.
    // var mousePos = getMousePos(Math, Math);
    // //object calling.
    // console.log("Mouse position x = " + mousePos.x + " y = " + mousePos.y);


    /************************************another way to create a class************************ */
    class Point {
        constructor(x, y) {
           this.x = x;
           this.y = y;
           // static property and it is mandatory to define it outside of class.
           Point.nbPointsCreated++;
        }
      
        // static method
        static distance(a, b) {
            //const keyword is used to specify, this value cannot be modified
           const dx = a.x - b.x;
           const dy = a.y - b.y;
            
           //Math is a library
           return Math.sqrt(dx*dx + dy*dy);
        }
     }
     // here we define the static value, static property definition is necessarily outside of the class with ES6
     Point.nbPointsCreated=0;
      
     // We create 3 points
     const p1 = new Point(5, 5);
     const p2 = new Point(10, 10);
      
     //way to access it 
     document.body.innerHTML += "<p>Distance between points (5, 5) and (10, 10) is " +
                                Point.distance(p1, p2) + "</p>";
     /********************************getters and setters**************** */
    
    class university {
        //constuctor keyword is essential. Values must be passed in parameters. we can't intiliaze the value 
        // like this                this.name = "chongqing university";
        constructor(name,location){
            this.name = name;
            this.location = location;
        }

        //set and get property must have the same name 
        //set property and other property can't have the same names 
        //for example               this.campus inside the constructor and set campus
        set set_campus(to_campus){
            this.campus = to_campus;
        }

        //same name for set_campuse as a get and set
        get set_campus(){
            return this.campus;
        }

        //method, not to use the function keyword
        cal_students(){
            return Math.sqrt(Math.E*Math.E-Math.E);
        }
    }
    //instance create
    const cal_universtiy = new university("Chongqing University","Shapbingba");

    console.log(cal_universtiy.name);
    console.log(cal_universtiy.location);
    //set property must give value first, it can't be accessed in console.log directly 
    cal_universtiy.set_campus = 4;

    //get value is accessed after the intilizing the set value.
    console.log(cal_universtiy.set_campus);
    console.log(cal_universtiy.cal_students());
}

//comparing two object 
//they must have same value and also linked to each other as a reference
var originalObject = {name:'Michel'};
var copy = originalObject;
var result = copy === originalObject;
// alert(result);
//stuff like this won't work because the object written on right side doesn't have reference to copy object.
copy == {name: 'Michel'}
        

