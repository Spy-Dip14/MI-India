console.log('Hello World!')

var a = 1;
console.log(a);

if (a == 1) {
    console.log("Ok")
}

var shown = false;
function buttonClick() {
    if (shown) {
        document.getElementById('hiddenImage').className = 'hidden';
    }
    else {
        document.getElementById('hiddenImage').className = 'shown';
    }
    shown = !shown;
}