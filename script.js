// call()

function Emp(id,name){
    this.id = id;
    this.name = name;
}

function permanentEmp(id,name){
    Emp.call(this,id,name);
}

function temporarayEmp(id,name){
    Emp.call(this,id,name);
}

var pEmp = new permanentEmp(1,"Abdul");
var Temp = new temporarayEmp(2,"Rahman");

console.log(pEmp.id + " " + pEmp.name);
console.log(Temp.id + " " + Temp.name);

// apply()

var arr = [2,4,6,8];
var max = Math.max.apply(null,arr);
console.log(max);

// bind()

var website = {
    name:"javascript",
    getName: function(){
        return this.name;
    },
   
}

var website2 = {
    name:"Google"
}

var website3 = {
    name:"yahoo"
}

var unboundGetname = website.getName;
var boundGetname = unboundGetname.bind(website);
var boundGetname = unboundGetname.bind(website2);
var boundGetname = unboundGetname.bind(website3);
