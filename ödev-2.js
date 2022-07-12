let text = document.querySelector("#task");
let ekle = document.querySelector("#liveToastBtn");
let liste = document.querySelector("ul#list")


ekle.addEventListener("click",function() {
    if ( text.value == 0)
    {
        return $(".error").toast("show");

    }
    else {     
        yazıekle()
        return $(".success").toast("show");
    }
});

function yazıekle() {

    let li = document.createElement("li");
    li.textContent = task.value;
    
    let btn = document.createElement("button");
    btn.classList.add("btn")
    btn.addEventListener("click", function() {
        this.parentElement.remove();
    });

    btn.appendChild(document.createTextNode(`X`));
    li.appendChild(btn);

    liste.appendChild(li);
    task.value = "";
}