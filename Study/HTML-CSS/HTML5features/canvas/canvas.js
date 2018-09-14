function makeCanvas() {

//canvas1
    var can1 = document.getElementById('canvas1');
    var cont1 = can1.getContext('2d');

    cont1.font = '32pt Arial'
    cont1.fillStyle = 'DeepSkyBlue';
    cont1.strokeStyle = 'black';

    cont1.fillText('I Love HTML5', 45, 150);
    cont1.strokeText('I Love HTML5', 45, 150);


//canvas2
    var can2 = document.getElementById('canvas2');
    var cont2 = can2.getContext('2d');

    var rect2 = colorRect(210, 0, 145, 145, 'blue')
    var rect3 = colorRect(40, 155, 145, 145, 'blue')

    cont2.lineWidth = 10;
    var rect1 = colorRect(45, 5, 135, 135, 'red')
    cont2.strokeRect(45, 5, 135, 135);

    cont2.lineWidth = 10;
    var rect4 = colorRect(215, 160, 135, 135, 'red');
    cont2.strokeRect(215, 160, 135, 135);

    function colorRect(x, y, w, h, c) {
        cont2.fillStyle = c;
        cont2.fillRect(x, y, w, h);
    }

//canvas3
    var can3 = document.getElementById('canvas3');
    var cont3 = can3.getContext('2d');

    cont3.strokeStyle = 'black';
    cont3.fillStyle = '#ff0000';
    cont3.lineWidth = 5;

    cont3.beginPath();
    cont3.moveTo(100, 50,);
    cont3.lineTo(300, 50);
    cont3.lineTo(300, 280);
    cont3.lineTo(200, 280);
    cont3.lineTo(200, 150);
    cont3.lineTo(150, 150);
    cont3.stroke();
    cont3.fill();

//canvas4
    var can4 = document.getElementById('canvas4');
    var cont4 = can4.getContext('2d');

    colorCircle(200, 150, 150, '#f3f0f6');
    colorCircle(200, 100, 50, 'red');
    colorCircle(200, 150, 60, 'yellow');
    colorCircle(200, 200, 70, 'green');
    colorCircle(210, 220, 70, 'blue');
    colorCircle(150, 200, 80, 'white');
    colorCircle(200, 220, 60, 'grey');


    function colorCircle(w, h, r, c) {
        cont4.beginPath();
        cont4.fillStyle = c;
        cont4.arc(w, h, r, 0,Math.PI*2,true);
        cont4.fill();
    }

}
