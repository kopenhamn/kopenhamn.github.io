let i = document.getElementsByClassName('I');
let iFirst = i[0];
let iSecond = i[1];

//style of i
let iFirstTop = i[0].firstElementChild.style;
let iFirstBottom = i[0].lastElementChild.style;
let iSecondTop = i[1].firstElementChild.style;
let iSecondBottom = i[1].lastElementChild.style;

//lets modify autoMargin between top and botom items

//set top position of top item
//let setTop =
//let itemMarginBottom =

window.onload = function() {
    iFirstBottom.height="54px";
    iSecondBottom.height="54px";

    setInterval(logoAnim, 3000);

    let mod;

    function logoAnim() {
        if(iFirstBottom.height=="54px"){
            iFirstBottom.height = 15 + 'px';
            iFirstTop.top = 20 + 'px';
        } else {
            iFirstBottom.height= 54 + 'px';
            iFirstTop.top = 0;
        }

        if(iSecondBottom.height=="54px"){
            iSecondBottom.height = 15 + 'px';
            iSecondTop.top = 20 + 'px';
        } else {
            iSecondBottom.height= 54 + 'px';
            iSecondTop.top = 0;
        }

        console.log(iFirstBottom.height);

        //set height of bottom item
        mod = setBottomHeight();

        function setBottomHeight() {
            let x = Math.round(Math.random()*100/5);
            return x;
        }
    }
}
