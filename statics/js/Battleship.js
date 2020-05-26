var shortship_in_left = Math.floor(Math.random() * 2);
var left = [];
var right = [];
var miss_field = [Math.floor(Math.random() * 15)];
miss_field[1] = Math.floor(Math.random() * (21 - miss_field[0] + 1))
left[0] = miss_field[0] + 1
right[0] = miss_field[0] + 3 * shortship_in_left
left[1] = right[0] + miss_field[1] + 1
right[1] = left[1] + 4 * (1 - shortship_in_left ) - 1
var guess;
var hits = 0;
var num_guess = 0;
var isSunk = false;

while(isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-9):");
    if(guess < 0 || guess > 20){
        alert("Please enter a valid cell number!");
    }else{
        num_guess = num_guess + 1;
        if(guess >= left[0] && guess <= right[0]  || guess >= right[1] || guess <= right[1]){
            alert("HIT!");
            hits = hits + 1;
            if(hits == 7){
                isSunk = true;
                alert("Congratulations! You are our hero");
            }
        }else{
            alert("MISS");
        }
    }
}