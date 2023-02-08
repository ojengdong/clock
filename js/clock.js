var clock = document.querySelector('.time');

function getTime(){
    const time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hour = ('00' + hour).slice(-2);
    minutes = ('00' + minutes).slice(-2);
    seconds = ('00' + seconds).slice(-2);

    // clock.innerHTML = `${hour<10 ? `0${hour}`:hour} : ${minutes<10 ? `0${minutes}` : minutes} : ${seconds<10 ? `0${seconds}`:seconds}`
    clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

function init(){
    setInterval(() => {
        getTime();
    }, 1000);
    // setInterval(getTime(), 1000);
}

init();

$(".inputbox").click(function(e){
    e.preventDefault();
    $(".inputbox").removeClass('btn-primary');
    $(".inputbox").removeAttr('checked');

    $(this).addClass('btn-primary');
    $(this).children('input[type=radio]').attr('checked', 'checked');
    if($(this).children('input[type=radio]').val()==0){
        $('.back').css({"background-image":"url(./img/bg_morning.jpg)"});
        $('.back-img').css({"background-image":"url(./img/phone_morning.jpg)"});
        $('.logo img').attr("src", "./img/logo_b.png");
        $('.globel-header a').css("color","#000");
        $('main').css("color","#000");
        $('.gnb').removeClass("whiteline");
    }
});