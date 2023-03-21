setInterval(function(){
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr >= 10){
        hnum = hr;
    } else {
        hnum = '0' + hr;
    }

    if(min >= 10){
        mnum = min;
    } else {
        mnum = '0' + min;
    }

    if(sec >= 10){
        snum = sec;
    } else {
        snum = '0' + sec;
    }

    document.querySelectorAll("#phone p span")[0].innerHTML = hnum;
    document.querySelectorAll("#phone p span")[1].innerHTML = mnum;
    document.querySelectorAll("#phone p span")[2].innerHTML = snum;
})

    let now = new Date();
    let hr = now.getHours();

    if(hr >= 6 && hr < 12) {
        document.getElementById("wrapper").classList.add("morning");
        document.querySelectorAll("nav li")[0].classList.add('on');
    } else if (hr >=12 && hr < 16) {
        document.getElementById("wrapper").classList.add("afternoon");
        document.querySelectorAll("nav li")[1].classList.add('on');
    } else if (hr >=16 && hr < 20) {
        document.getElementById("wrapper").classList.add("evening");
        document.querySelectorAll("nav li")[2].classList.add('on');
    } else {
        document.getElementById("wrapper").classList.add("night");
        document.querySelectorAll("nav li")[3].classList.add('on');
    }

    // querySelectorAll을 이용해서 nav li 들을 담아준다.
    let btnList = document.querySelectorAll("nav li");
    let back = document.getElementById("wrapper");

    btnList.forEach(function(btn){
        let text = btn.querySelector("a").innerHTML;
        console.log(text);

        btn.addEventListener('click', function(a){
            a.preventDefault();
            btnList.forEach(function(e){
                e.classList.remove('on');
            })
            btn.classList.add('on');
            back.className = text;
        })
    })

    let name = ['상현1', '상현2', '상현3', '상현4', '상현5'];
    // for문 (console.log)
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }

    // forEach문
    // forEach 메서드로 배열을 순회하려면 콜백 함수 필요하다.
    // 배열의 요소를 나타내는 매개변수가 반드시 하나 이상 있어야 한다.
    // IE버전 8 이하를 제외한 모든 브라우저에서 사용 가능.
    // Can i use
    name.forEach(function(sanghyun){
        console.log(sanghyun);
    })