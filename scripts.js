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
    // when it contains spaces or special characters,

    countries['no of province'] = '6 avril 1943'; 
    countries["date of publication"] = '6 avril 1943'; // allowed, but avoid!

    // An object can contain another object
    countries.university['university name'];
    countries.university.province;

    //object can contain function too 

    var math = {
        first_number : 4,
        second_number: 5,
        
        // there is no need to write function keyword 
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
    //hero name will always be captilize i.e. Hero
    function Hero(name, side) {
        //this keyword is used to distinguish the object property and parameters values. here this.name is property 
        //not the parameter.
        this.name = name;
        this.side = side;
        //function defining
        //function keyword is necessary
        this.speak = function() { //equal sige is used instead of : and this keyword is optional
            console.log("My name is " + this.name + " and I'm with the " + this.side);
        }
    }

    //function calling
    //new keyword is used to access property
    var luke = new Hero('Luke Skywalker', 'rebels');        
    //use . operator to call it.
    console.log(luke.speak());

    // new way to create a class 
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

        //same name for set_campus as a get and set
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
        


    //varaibles scope with var and let keyword

    // variables created using var keyword can be accessed globally using windows. 
    var g = 12;
    //    alert(window.g === g);
    // varaibles with let keyword cannot be accessed globally.
    let msg = "HI";
    // window.onclick();
    // alert(msg);
    
    //there are some build in variables and method that can also be accessed using gloabally variable window
    window.onclick; window.onload;
    //window.addEventListener();
    // window.prompt(); window.document.querySelector();
    //while they are also accessable without gloabally variable window
    // onclick ; onload; addEventListener(); 
    
    //convertion 
    //floating to number
    var percentage = 32.4;
    var pre_percentage = parseInt(percentage);
    //floating to string
    var st_perecntage = percentage.toString();
    var st_perecntage = ""+percentage; //+ also call toString 
    Object.toString();

    //to floating value 
    var fl_percentage = parseFloat(st_perecntage);


    //checking the value of variable 
    percentage.valueOf();//return you the value of variable 
    // alert(percentage.valueOf());
    
    //everything in a JS is a Object; father of everything in JS is Object. 
    var result= {};
    //the above line is same as 
    // var result = new Object();

    // class Major {
    //     constructor(){

    //     }
    //     static Chemistry(){
    //         return alert("Chemistry");
    //     }
    // }

    
    // Major.Chemistry();
    // alert(typeof(Major));


    // Arrays are objects, but they are “special” objects
    // Their property names are numerical indexes that start from 0
    // They have a special length property that represents their length/number of elements
    // They have other built-in properties in addition to the ones inherited from Object (toString, valueOf)
    // var coll1 = [];
    // var data = "Windows";
    // var coll = new Array();
    // console.log(typeof(data));
    
    
    //Array Methods
    // returns the length of elem
    // coll.length; 
    // add a new value into array
    // coll.push();

    //Array other method inhertited from Object class;
    // convert the array to string
    // coll.toString();
    // it returns the value 
    // coll.valueOf();

    //add a name property to the array. Yes, we can do that!
    // coll.name = "I'm an array named a!";
    // add 3 at the end of array
    // coll.push(3);
    // alert(coll);


    // If you give to the length property a value bigger than the number of elements in an array, 
    // it adds undefined elements to it:
    // coll.length = 10;
    // alert(coll);
    // console.log(typeof(coll));

    //Array methods 
    // push: appends an element at the end of the array and returns the new length
    // coll.push(12);
    // alert(coll.push(12));

    // pop: removes the last element and returns it
    // coll.pop();
    // alert(coll.pop());

    // sort: sort the elements in the array in the following way
    // 1) if all the elements are numbers this method will sort the elment in ascending order i.e. small to large
    // 2) if all the first letter of all element in a array is alphabet and also uppercase it will sort the element in asending order
    // 3) if the first letter of all elements in a array is capital letter it will sort element in asending order i.e A to Z
    // 4) if it is the collection of numbers and aphabets with uppper or lowercase, it will sort number firstly followed by uppercase aphabet 
    // followed by lowercase aphabet
    // and finally return complete array
    // var new_coll = coll.sort();
    // alert(new_coll);
    // console.log(new_coll);
    
    // join: adds the value passed by parameter after each element and returns the result as a string
    // coll.join(":");
    // console.log(coll.join(":"));
    
    // join method automatically adds comma after each element if it found no parameter
    // coll.join();
    
    // The slice() method returns a sub-array without modifying the original array:
    // The slice() method returns an array from the array with this method is using by passing two parameter i.e. start and end while
    //  (end not included). The original array will not be modified.
    
    // var return_coll = coll.slice();
    // alert(return_coll);
    // console.log(return_coll);

    // if there is no second parameter it will create a new array starting from the value passed as paramete to the end 
    // var begin = 0;
    // console.log(coll.slice(begin));

    // var end = 5;
    // console.log(coll.slice(begin,end));

    // The splice() method modifies the array: it removes “a slice” and also adds new elements signature. it means that element starting 
    // from start index to end index will be removed and next inserted element will place in their place. and this method will return the 
    // array containing the deleted element

    // array.splice(start, deleteCount, item1, item2, ...)  start = start_index , deleteCount= where to start deleting element in old array
    //  that is index , other elements are replaced by deleted elements
    // array.splice(start) start = start index
    // array.splice(start, deleteCount) deleteCountr = index from where to start delete element in old array
    
    // var a = [1,3,4,3,2,32];
    // var b = a.splice(0,a.length-1,12,3,32,3,32,2,42,2,42,"done");
    // console.log("b: "+b);
    // console.log("a: "+a);

    // The Number class can be used to transform strings into numbers, but it is recommended that you use parseInt or parseFloat instead.
    // var n = Number('3.1416');
    // typeof n;
    // parseFloat(n);
    // parseInt("12");

    // Number has useful non-modifiable properties (constants): MAX_VALUE and MIN_VALUE
    // var max = Number.MAX_VALUE;
    // var min = Number.MIN_VALUE;
    // console.log("max: "+max);
    // console.log("min: "+min);
    // toFixed: sets the number of digits after the decimal point and return result in a number format
    // max = 255.12342;
    // console.log("max value: "+ max.toFixed(2));
    // There is also another method, named toPrecision, that has a very close behavior, and can also return numbers in scientific notation. 
    // console.log(max.toPrecision());
    // toExponential: force a number to use a scientific notation. For example var a=1000; a.toExponential(); console.log(a); will give 1e+3
    // console.log(max.toExponential());


    //String 
    // The String class can be used to build new strings, but it’s preferable to use the standard syntax
    // var name = 'Michel'; // use this rather than using new String(...)
    // typeof name;
    // var name = new String('Michel');
    // typeof name;

    //String other properties
    // name.length;
    // name[0];
    // name[1];
    // we cannot modify a string using s[index] = value;

    //String methods 
    // name.toUpperCase();
    // name.toLowerCase();
    // console.log(name.toUpperCase());

    // indexOf: returns the index of the string value passed as parameter, -1 if the string value is not found in the original string.
    // console.log(name.indexOf('c'));
    // console.log(name.indexOf('a'));

    // charAt: returns the char at the index passed as parameter. Returns an empty string if the index is out of bounds (less than 0 or greater than the length of the string).
    // console.log(name.charAt(1));
    // console.log(name.charAt(12)); //empty string
    // console.log(typeof name.charAt(12)); //empty string

    // lastIndexOf: returns the last index of the string value passed as parameter
    // console.log(name.lastIndexOf());
    // console.log(name.lastIndexOf('c'));

    // indexOf can also be used with two parameters, the second one being the starting index when looking for the string value passed as paramete
    // console.log(name.indexOf('2',1));

    //The slice and substring methods
    // name.slice(start,end); It return a new string without changing previous one
    //end does not count
    // console.log(name.slice(0,2)); // Michel
    // console.log("name: "+name);

    //substring method has same working style like slice. 
    // console.log(name.substring(1,3));
    // console.log(name);

    // If you are a beginner, we recommend that you use substring for most common cases 
    //difference b/w substring and slice;
    // console.log(name.slice(2, -1)); // start from index = 11 to length-1, extract the end of the string from 11th element
    // console.log(name.substring(5,-1)); // return the value starting from the first index to 5-1 index. 


    //split function 
    //it replaces the space with character specified as parameter 
    // The split method returns an array of strings, the parameter is a separator
    // name+=" "+name;
    // name+=" is "+name;
    // console.log("split function : "+name.split(' '));
    // console.log("split function : "+name.split(' '));
    // console.log("split function : "+name.split(' ').length);

    // The join method builds a string from an array of strings.
    // var g = name.split(' ');
    // console.log(g.join("##########"));
    // console.log(typeof g);

    //concat method join two differnt string together.
    // console.log("both string together: "+name.concat(name));
    //it also add array of string
    // var array_name = ["array of ","string",";"];
    // console.log("both string together: "+name.concat(array_name));

    // It doesn't change the value of previous string 
    // console.log("previous name string: ",name); //picking value from line 419

    // math API
    // Math.PI; Math.LN2; Math.LN10;Math.SQRT2;Math.E; 
    //random function 
    // returns the random in between 0 and 1
    // Math.random();
    //To get a number between a min and a max value, use this formula
    // ((max - min) * Math.random()) + min;
    // console.log(((10 - 5) * Math.random()) + 5);

    //Math methods
    // Math.max(2,10);
    // Math.min(3,10);
    // Math.round(Math.random()); //either return 0 or 1
    // console.log(Math.ceil(12.32));
    // console.log(Math.floor(12.32));
    // Math.sin(12);
    // Math.cos(32);   
    // Math.sqrt(123);
    // Math.pow(2,3);
    // Math.atan(21);
    // Math.atan2(2,3);
    // Math.tanh(12);



    //Date API
    // Without any argument, a call to new Date() returns the current date.
    // console.log(new Date());
    // console.log(typeof (new Date));

    // class c { }
    // console.log(typeof c);

    // [for string] year(1993), month (1-12), day (1-31), time (0-23):minutes (0-59):seconds:milliseconds (0-999) [for string]
    //all constrctors
    // console.log(new Date("2017 1 12"));
    // console.log(new Date("2017,1,14"));
    // console.log(new Date('2017,1,14,9:14:3:140'));
    //[for number parameters] year(1993), month (0-11), day (1-31), time (0-23),minutes (0-59),seconds:milliseconds (0-999) 
    // console.log(new Date(2017,1,14,9,14,2));
    // console.log(new Date(2017,1,29)); //No February 29th in 2017! Gives 1st of March
    // console.log(new Date(2017,11,32)); //Dec -> 1st of January!
    //console.log(Date());  //Calling Date() without "new" returns the current date as a string. It does not matter if we pass parameters:

    //Date methods 
    // var d = new Date();
    // console.log(d);
    // d.setMonth(2); // 2 is march because 1 is Januaray
    // console.log(d);
    // d.getMonth();

    // var my_birthday = new Date(1996,10,7);
    // console.log("my birthday is: "+ my_birthday);
    // var no_of_days = [0,0,0,0,0,0,0];
    // for(start=2017;start<3017;start++){
    //     my_birthday = new Date(start,10,7);
    //     no_of_days[my_birthday.getDay()]++;
    //     console.log("my birthday of "+start+ " will be on: "+my_birthday);
    // }
    // console.log("whole life schedule: "+no_of_days);
    // console.log(no_of_days.length);
    // console.log(no_of_days);
    // for (var i=0;i<no_of_days.length;i+=1){
    //     // console.log(i);
    //     switch(i){
    //         case 0:
    //         console.log("my next birthday on Sunday will be: "+no_of_days[i]+" times");
    //         break;
    //         case 1:
    //         console.log("my next birthday on Monday will be: "+no_of_days[i]+" times");
    //         break;
    //         case 2:
    //         console.log("my next birthday on Tue will be: "+no_of_days[i]+" times");
    //         break;
    //         case 3:
    //         console.log("my next birthday on Wed will be: "+no_of_days[i]+" times");
    //         break;
    //         case 4:
    //         console.log("my next birthday on Thrusday will be: "+no_of_days[i]+" times");
    //         break;
    //         case 5:
    //         console.log("my next birthday on Fri will be: "+no_of_days[i]+" times");
    //         break;
    //         default:
    //         console.log("my next birthday on Sat will be: "+no_of_days[i]+" times");
    //         break;
            
    //     }
    // }




    



    





