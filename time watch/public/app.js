

        var mins = 0;
        var sec = 0;
        var mili = 0;

        var minute = document.getElementById('mins');
        var second = document.getElementById('sec');
        var milis = document.getElementById('mili');
        var strt = document.getElementById('strtbtn');
        var intervali ;


        function time(){

            mili++;
            milis.innerHTML = mili;
            if (mili === 100){
                sec++;
                second.innerHTML = sec;
                mili = 0;
            }
            else if (sec === 60){
                mins++;
                minute.innerHTML = mins;
                sec = 0;

            }


        }


        
        function start(){
            intervali = setInterval(time,10)
            strt.disabled = true; 
            
        }

        function pause(){

            clearInterval(intervali)
            strt.disabled = false;

        }


        function conti(){

            mili =0;
            sec = 0;
            mins =0;
            milis.innerHTML=mili;
            second.innerHTML=sec;
            minute.innerHTML=mins;
            pause();
            strt.disabled = false;

        }
