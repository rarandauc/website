console.log("Javier")
function validarEmail(){
    let vali1=document.getElementById("email").value
    let vali2=document.getElementById("emailconfirm").value
    if (vali1!==vali2){
        document.getElementById("email").style.borderBlockColor="red"
        document.getElementById("emailconfirm").style.borderBlockColor="red"
    }else{
        document.getElementById("email").style.borderBlockColor="gray"
        document.getElementById("emailconfirm").style.borderBlockColor="gray"
    }
}