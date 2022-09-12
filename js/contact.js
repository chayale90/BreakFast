function init() {
    declareEvents();
}


function declareEvents() {
    id_form = document.querySelector("#id_form");

    id_form.addEventListener("submit", function (e) {
        e.preventDefault();
        id_name = document.querySelector("#id_name").value;
        id_phone = document.querySelector("#id_phone").value;
        id_email = document.querySelector("#id_email").value;
        id_textarea = document.querySelector("#id_textarea").value;
        id_h5 = document.querySelector("#id_h5");
        id_btn = document.querySelector("#id_btn").value;


        if (id_name.length < 2) {
            alert("Enter valid name , min 2 chars");
            return; // עוצר את כל הפקונציה
        }
        else if (id_phone.length < 5) {
            alert("Enter valid phone , min 5 chars");
            return;
        }
        else if (id_email.indexOf(".") == -1 || id_email.indexOf("@") == -1) {
            alert("Enter valid email ");
            return;
        }
        else if (id_textarea.length < 10) {
            alert("Enter min 20 chars in the message");
            return;
        }
        // window.open("https://aresto-restaurant.co.il/")
        window.open(url = "formSend.html");
    
    })

}




init();