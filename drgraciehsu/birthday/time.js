function calculateTime() {
    var birthDate = new Date("02/06/1984 00:00:00"); // 修改出生日期
    var today = new Date();
    var timeDifference = today.getTime() - birthDate.getTime();
    
    var msPerDay = 24 * 60 * 60 * 1000;
    var daysDifference = Math.floor(timeDifference / msPerDay);
    var remainingTime = timeDifference % msPerDay;
    
    var msPerHour = 60 * 60 * 1000;
    var hoursDifference = Math.floor(remainingTime / msPerHour);
    remainingTime %= msPerHour;
    
    var msPerMinute = 60 * 1000;
    var minutesDifference = Math.floor(remainingTime / msPerMinute);
    remainingTime %= msPerMinute;
    
    var secondsDifference = Math.floor(remainingTime / 1000);
    
    span_dt_dt.innerHTML = daysDifference + "天" + hoursDifference + "小时" + minutesDifference + "分" + secondsDifference + "秒";
}

calculateTime();
