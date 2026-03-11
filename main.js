function s() {
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById("Email").value;
    let PhoneNumber = document.getElementById("PhoneNumber").value;
    let Message = document.getElementById("Message").value;
    let P = document.getElementById("P");
    let P2 = document.getElementById("P2");
    if(FirstName == "" || LastName== ""|| Email=="" || PhoneNumber== ""|| Message== ""){
        alert("The form is empty")
    }
    if(Email.indexOf("@") ==-1 || Email.indexOf(".") ==-1){
        P.innerText="Please write @ and . in the email"
    }
    else{
        P.innerText="";
    }
    if(PhoneNumber.length >11){
        P2.innerText="Please write only 11 number"
    }
}
