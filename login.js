function flipCard(){
    const card = document.getElementById("authCard");
    card.classList.toggle("flipped")
}

function togglePassword(id,button){
    const input = document.getElementById(id);
    const icon = button.querySelector("i");
    if(input.type === "password"){
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else{
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


document.querySelectorAll("form").forEach(form =>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const button = this.querySelector(".main-btn");
        const oldText = button.textContent;

        button.textContent = "SUCCESS";

        setTimeout(()=>{
            button.textContent = oldText;
        },1800)

    })
})