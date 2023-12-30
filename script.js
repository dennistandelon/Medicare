var clicked = false;
function hamburger(){
    var menu = document.getElementById("menu")
    if(clicked){
        menu.setAttribute('class','')
        clicked = false
    } else{
        menu.setAttribute('class','menu-clicked')
        clicked = true
    }
    return false;
}



function form_validation(){

    var name = document.getElementById("name-input").value;
    var gender = document.getElementsByName("gender-radio");
    var pass = document.getElementById("pw-input").value;
    var cpass = document.getElementById("cpw-input").value;
    var city = document.getElementById("city-input").value;
    
    console.log(city)
    if(name.length <= 0 || pass.length <=0 || cpass.length <= 0){
        return false;
    }

    if(gender[0].checked == false && gender[1].checked == false){
        return false;
    }

    if(city == "default"){
        return false;
    }

    if(pass != cpass){
        return false;
    }

    return true;

}