    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
/*const seconds = document.getElementById('seconds'),
    minutes = document.getElementById('minutes'),
    hours = document.getElementById('hours'),
    days = document.getElementById('days');*/
let countDown = new Date('Feb 22, 2020 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
        distance = countDown - now;
        let second1=-1, second2=-1
        //Second
        /*if (Math.floor((distance % (minute)) / second) < 10) {
            s = '0' + Math.floor((distance % (minute)) / second);
            //seconds.innerHTML = s;
            second1=0
            second2=s.charCodeAt(1)-48
        }
        else {*/
            //seconds.innerHTML = Math.floor((distance % (minute)) / second);
            second1=Math.floor(Math.floor((distance % (minute)) / second)/10);
            second2=Math.floor((distance % (minute)) / second)%10
        //}
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[6];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(second1, dummy1, dummy2)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[7];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(second2, dummy1, dummy2)
        //Minute
        /*if (Math.floor((distance % (hour)) / (minute)) < 10) {
            m = '0' + Math.floor((distance % (hour)) / (minute));
            //minutes.innerHTML = m;
            minute1=0
            minute2=m.charCodeAt(1)-48
        }
        else {*/
            //minutes.innerHTML = Math.floor((distance % (hour)) / (minute));
            minute1=Math.floor(Math.floor((distance % (hour)) / (minute))/10);
            minute2=Math.floor((distance % (hour)) / (minute))%10
        //}
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[4];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(minute1, dummy1, dummy2)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[5];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(minute2, dummy1, dummy2)
        //Hour
        /*if (Math.floor((distance % (day)) / (hour)) < 10) {
            h = '0' + Math.floor((distance % (day)) / (hour));
            //hours.innerHTML = h;
            hour1=0;
            hour2=h.charCodeAt(1)-48;
        }
        else {*/
            //hours.innerHTML = Math.floor((distance % (day)) / (hour));
            hour1=Math.floor( Math.floor((distance % (day)) / (hour))/10);
            hour2=Math.floor((distance % (day)) / (hour))%10
        //}
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[2];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(hour1, dummy1, dummy2)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[3];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(hour2, dummy1, dummy2)
        //console.log(hour2)


        //document.getElementById('days').innerText = Math.floor(distance / (day));
        day1=Math.floor(Math.floor(distance / (day))/10)
        day2=Math.floor(distance / (day))%10
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[0];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(day1, dummy1, dummy2)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[1];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(day2, dummy1, dummy2)
        //Fires the day of eXabyte            
        if (distance < 0) {
            clearInterval(x);
        }

    }, second)

    function displayDigit(digit, dummy1, dummy2)
    {
        switch(digit)
        {
            case 0:dummy1.style.border="5px solid white";
                   dummy1.style.borderBottom='none'
                   dummy2.style.border="5px solid white";
                   dummy2.style.borderTop="none"; break; 
                   break;
            case 1: dummy1.style.border="none";
                    dummy1.style.borderRight='5px solid white';
                    dummy2.style.border="none";
                    dummy2.style.borderRight="5px solid white"
                    break;
            case 2: dummy1.style.border="5px solid white";
                    dummy1.style.borderLeft='none'
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderRight="none";
                    dummy2.style.borderTop="none"; break; 
            case 3: dummy1.style.border="5px solid white";
                    dummy1.style.borderLeft='none';
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; break; 
            case 4: dummy1.style.border="5px solid white";
                    dummy1.style.borderTop='none';
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; 
                    dummy2.style.borderBottom="none"; 
                    break; 
            case 5: dummy1.style.border="5px solid white";
                    dummy1.style.borderRight='none';
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; break;
            case 6: dummy1.style.border="5px solid white";
                    dummy1.style.borderRight='none';
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderTop="none"; break;
            case 7: dummy1.style.border="5px solid white";
                    dummy1.style.borderLeft='none';
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderTop="none"; 
                    dummy2.style.borderLeft='none'
                    dummy2.style.borderBottom='none'
                    break;
            case 8: dummy1.style.border="5px solid white";
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderTop="none"; 
                    break;
            case 9: dummy1.style.border="5px solid white";
                    dummy2.style.border="5px solid white";
                    dummy2.style.borderTop="none";
                    dummy2.style.borderLeft="none";
                    break;

        }

    }
