function getPersonalPage(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if(fname == 'jeremy' && lname == 'schlagel'){
        window.location.href = "jeremys_site_about_me.html";
    }
    else{
        alert("IT DID NOT WORK!!!")
    }

}
document.getElementById("mybtn").addEventListener("click", getPersonalPage);

