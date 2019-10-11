export default class Login{
    constructor(email2,pass2)
    {
        this.email=email2;
        this.pass=pass2;

    }

    validate()
    {

      console.log(this.email);
      console.log(this.pass);
        var epatt=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var res1=this.email.match(epatt)
       
        if(res1==null)
        {
            alert("Invalid Email");
        }
        else{
             alert("Login Successful");
             $("#three").show();
             $("#two").hide();
        }
    }
}


