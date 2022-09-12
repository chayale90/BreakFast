function init() {
    declareEvents()
}


function declareEvents() {
    let my_btn = document.querySelector("#my_btn");
    let p = document.createElement("p");
    p.className = "lead";
    document.querySelector("#id_div").append(p);
    //    document.querySelector(".para").append(p);

    my_btn.addEventListener("click", function () {
        if (p.innerHTML.length < 1) {
            p.innerHTML = `The bar seating around the open kitchen is the perfect spot
            to soak in the atmosphere, and get a good view of this beautiful restaurant.
             We love to host and treat every event as if it were our own :-)
We will go above and beyond so that you and your guests are happy.`
            my_btn.innerHTML = `Hide Info 
            <i class="fa fa-chevron-up" aria-hidden="true"></i>`
            my_btn.style.background = "rgb(246, 137, 137)"

        } else {
            p.innerHTML = "";
            my_btn.style.background = "rgb(135, 67, 86)"
            my_btn.innerHTML = `More Info
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            `
            
        }
    })
}



init();