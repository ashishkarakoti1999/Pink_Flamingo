 function Counters(click)
        {
            var data = document.getElementById('data');
            var value = parseInt(data.innerText) + click;
            
            data.innerText=value;
            
            if(value < 0 )
            {
                data.innerText = 0;
            }


        }