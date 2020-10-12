//make enter click buttons
$(document).ready(function (){
    $('body').keydown(function (event){
        console.log(event.keyCode);
        if (event.keyCode == 13){
            var bodyclass = $('body').attr('class');
            console.log(bodyclass);
            if (bodyclass == 'body-state1'){
                changeState(2)
            }
            if (bodyclass == 'body-state2'){
                changeState(1)
            }
            if (bodyclass == 'body-state3'){
                changeState(1)
            }
            if (bodyclass == 'body-state4'){
                changeState(1)
            }
            if (bodyclass == 'body-state5'){
                changeState(1)
            }
        }
    })
}
);

var timer = null;
var changeState = function (state){
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    var counter = 10;
    document.getElementById('countDown').innerHTML = counter;
    if ( state == 1){
        $('.right_space').attr('class', 'right');
        $('.moon').attr('class', 'ground');
    }
    if (state == 2){
        timer = setInterval(function() {
            counter = counter-1;
            document.getElementById('countDown').innerHTML = counter;
            if (counter <= 0){
                changeState(3);
            }
        }, 200)
    }
    else if (state == 3){
        document.body.className = 'body-state'+state;
        var success = setTimeout(function(){
            var randonNum = Math.round(Math.random()*10);
            console.log(randonNum);
            //success
            if (randonNum > 1){
                changeState(4);
            }
            //failure
            else {
                changeState(5);
            }
        }, 2000)
    }
    else if (state == 4){
        $('.right').attr('class', 'right_space');
        $('.ground').attr('class','moon')
    }
};



