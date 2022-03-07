

Execution Context

    Is like a box in which the code is running. The box contains the memory objects and 
    processes used by the program. Every JS code file establishes a global execution
    context. Every time we execute a function, a new global context is created. 
    Within the global context, a function context is creates



    Global: 
            an object whose properties are visible from weverywhere in the code
    local: 
            inside a function; the local variable's properties are visible in the fn only
    THIS:
             when JS execution begins, this points to the global object inside a function,
            "this" points to the object that owns the fn. If there's no object when by
            default it points to the global

Undefined
    When a variable is created, it is set to undefined
    undefined means there is a variable.. but its undefined
    a empty variable that is not pointed to any value

    var myVar = 4
        two steps
        first sets my var to undefined
        then assings it to 4


Creation / Definition

when you run code it runs in two stages
    first stage it is creationg / definition.
    goes through all lines and runs definition phase
    Then runs through all the lines again and executes

    setting variables is two step process first creation, then execution.

    function definition: function myfunction(){} 
    vs  
    function expression: var myNewFunc = function(){}
        this is postponing the function to the second phase
        can be passed around


Implied returns is using () instead of {}


var vs let

Let is similar to var but let has block scope. let is oly accessible in the block level it is defined in

const 
    const is used to assign a constant value to variable. and the value cannot be changed while program is running
    its fixed and block scoped
    you can still mutate the object



Primitive variables copy/pass by value. Objects copy/pass by reference


In JS two types:
Primitives vs objects
Primitives are NOT OBJECTS
    undefined - has not been defined
    null - lack of value
    boolean - true or false
    number - floating type, has decimal
    string
    symbol - es6 only

everything else is an object
    functions, arrays, objects


NOTE: stringify turns into string.. parse turns string into object


How to make a true copy of an object?

tarket = {...source} //shaddow copy
target = JSON.parse{JSON.stringify(source)} //deep copy
target = Object.assign({}, source) //deep copy
target = Object.create(source) //protostype





[1,2,3].map(v => v*2)


var doubleAndFilter = arr => arr
    .map(val => val * 2)
    .filter(num => num % 3 ===8)


look up JS . notation.. you can just keep going and passing


*everything in JS is a object

Coercion

JS always coerces to a primitive, never an object
Other languages called type converstion type casting
in JS when it happes inmplicity its called coercion
coercion is not always logic. you need to remember or quickly test coersion



Object
    Remember ojbects are collections of name value pairs
    functions inside of objects are methods


 use [] when you don't know what the property is called   
 so if the property needs to be a variable it must be in brackets
 