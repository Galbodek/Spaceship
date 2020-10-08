// console.log('Hello JS');
// $(document).ready(function (){
//     // console.log('Hello there jQuery');
//     // $('p span').html('Bla Bla');
//     $('body').keydown(function (event){
//         console.log(event.keyCode);
//         $('#key').html(event.keyCode);
//         if(event.keyCode === 13){
//             $('#key').html('Bla Bla')
//         }
//     });
//     }
// );

var timer = null;
var changeState = function (state){
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    var counter = 10;
    document.getElementById('countDown').innerHTML = counter;
    if (state == 2){
        timer = setInterval(function() {
            counter = counter-1;
            document.getElementById('countDown').innerHTML = counter;
            if (counter <= 0){
                changeState(3);
            }
        }, 500)
    }
    else if (state == 3){
        document.body.className = 'body-state'+state;
        var success = setTimeout(function(){
            var randonNum = Math.round(Math.random()*10);
            console.log(randonNum);
            //success
            if (randonNum > 5){
                changeState(4);
            }
            //failure
            else {
                changeState(5);
            }
        }, 2000)
    }
};



