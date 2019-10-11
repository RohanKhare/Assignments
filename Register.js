export default class Register 
{   constructor(name,email,pass,cpass) 
    {
      this.name = name;
      this.email=email;
      this.pass = pass;
      this.cpass = cpass;   
    }
    validate1()
    {
      alert(this.name);
    }
    validate()
    {
      
      console.log(this.name);
      console.log(this.email);
      console.log(this.pass);
      console.log(this.cpass);

   
      var epatt=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      var res1=this.email.match(epatt)
      

      var comp = this.pass.localeCompare(this.cpass);

      


      if(this.name=="" || this.email==""||this.pass==""||this.cpass=="")
      {
        alert("All Fields are mandatory");
      }
      else if(res1==null)
      {
        alert("Invalid Email");
      }
      else if(comp!=0)
      {
        alert("Password does not match");
      }
      else
      {
        //alert("RagisterPpage")
        $("#two").show();
        $("#three").hide();
        $("#one").hide();
        
        //alert("hellooo!!")

        //validation12();
      }
    }
  
}


