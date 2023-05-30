const inc_btn = document.getElementById("increase_btn");
const dec_btn = document.getElementById("decrease_btn");
const res_btn = document.getElementById("reset_btn");

let curr_val = document.getElementById("rage_count").innerHTML;

function update_num() {
    document.getElementById("rage_count").innerHTML = curr_val;
};

inc_btn.addEventListener("click", function() {
    if(curr_val <= 10){
        curr_val++;
        update_num();
    }
});

dec_btn.addEventListener("click", function() {
    if(curr_val > 0){
        curr_val--;
        update_num();
    }
});

res_btn.addEventListener("click", function() {
    curr_val=10;
    update_num();
});

