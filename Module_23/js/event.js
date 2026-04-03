console.log("Connected");

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// 3. get element by id and then set on "ONCLICK"
const btnMakeBlue = document.getElementById('btn-make-blue');
        console.log(btnMakeBlue);
        btnMakeBlue.onclick=function makeBlue(){
            document.body.style.backgroundColor='blue';
        }