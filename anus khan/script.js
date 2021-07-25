

//OBJECT 01

var student =[
    {fname: 'anus', lname : 'khan', age : 21},
    {fname: 'talha', lname : 'ashraf', age : 22},
    {fname: 'alishan', lname : 'chishti' , age : 23},
]
console.log(student);

for(var a = 0; a < student.length; a++){
    document.write(student[a].fname + "<br>" + student[a].age);

}


// OBJECT 02

 
var obj ={
    name : 'anus' ,
    email : 'anuskhanlodhi79@gmail.com',
    password : 'anuskhan',
    age : 21,
    gender : 'male',
    city : 'karachi',
    country : 'pakistan'
 }

document.write(obj.name,'<br>',obj.email ,'<br>',obj.password,'<br>', obj.age,'<br>', obj.gender,'<br>',obj.city,'<br>',obj.country);


// OBJECT 03

function Name(fname,lname,age,cls,id) {
    this.fname = fname,
    this.lname = lname,
    this.age = age,
    this.cls = cls,
    this.id = id   
}
var a = new Name('anus','khna',21,12,23502);
console.log(a); 



var b = new Name('TALHA','ashraf',23,14,23501);
console.log(b);




// object 04

var fnameValue = document.getElementById("fname").value;
var lnameValue = document.getElementById("lname").value;
var gender = document.getElementById("male").value;
var profession = document.getElementById("profession").value;



function PopulationData (FirstName, LastName, Gender, Profession){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Gender = Gender;
    this.Profession = Profession;
}

var talha = new PopulationData("anus", "Khan", "Male", "Developer");
var Saman = new PopulationData("talha", "ashraf", "Female", "Doctor");
var AbdulHamid = new PopulationData("ali", "shan", "female", "Teacher");
var Saqib = new PopulationData("Saqib", "Hussain", "Female", "Doctor");


localStorage.setItem('Aslam', JSON.stringify(anus));
localStorage.setItem('Usama', JSON.stringify(talha));
localStorage.setItem('Saman', JSON.stringify(Saman));
localStorage.setItem('AbdulHamid', JSON.stringify(AbdulHamid));
localStorage.setItem('Saqib', JSON.stringify(Saqib));



