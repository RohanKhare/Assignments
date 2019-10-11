import Register from './Register.js'
import Login from './Login.js'


document.getElementById("sub1").addEventListener("click",function(){

    var name = document.getElementById("name1").value
    var email = document.getElementById("email1").value
    var pass = document.getElementById("pass1").value
    var cpass = document.getElementById("cpass1").value
    //alert(name+email+pass+cpass);*/

    var reg = new Register(name,email,pass,cpass);
    //reg.validate1();
    reg.validate();
})

document.getElementById("sub2").addEventListener("click",function(){

    var email2 = document.getElementById("email2").value;
    var pass2 = document.getElementById("pass2").value;
    var login = new Login(email2,pass2)
    login.validate();
})