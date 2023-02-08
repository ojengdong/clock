setInterval(function(){
    // 변수들이 setInterval 안에 있어야 하는 이유
    // : 1000ms마다 새로운 값을 업데이트 해줘야하기 때문

    // setInterval
    // 주기적으로 어떤 값을 업데이트 해야 하거나, 
    // API로 부터 변경된 데이터를 주기적으로 받아야 하는 경우
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr >= 10) {
        hnum = hr;
    } else {
        hnum = '0' + hr;
    }

    if(min >= 10) {
        mnum = min;
    } else {
        mnum = '0' + min
    }

    if(sec >= 10) {
        snum = sec;
    } else {
        snum = '0' + sec
    }

    $("#phone p span").eq(0).text(hnum);
    $("#phone p span").eq(1).text(mnum);
    $("#phone p span").eq(2).text(snum);
})

let now = new Date();
let hr = now.getHours(); 

if(hr >=6 && hr < 12) {
   $("#wrapper").addClass("morning");
   $("nav li").eq(0).addClass("on");
} else if (hr >=12 && hr < 16) {
    $("#wrapper").addClass("afternoon");
   $("nav li").eq(1).addClass("on");
} else if (hr >=16 && hr < 20) {
    $("#wrapper").addClass("evening");
   $("nav li").eq(2).addClass("on");
} else {
    $("#wrapper").addClass("night");
   $("nav li").eq(3).addClass("on");
}

$("nav li").click(function(e){
    e.preventDefault();
    let back = $(this).children("a").text();
    $("nav li").removeClass();
    $(this).addClass("on");
    $("#wrapper").removeClass();
    $("#wrapper").addClass(back);
});

