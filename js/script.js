var historyLabel = document.getElementsByClassName('history-item')[0];
var ResultLabel = document.getElementById('result-item');
    
function removeHistory(){
    historyLabel.innerHTML = ''
    ResultLabel.innerHTML = ''
}
function calculate(){
    var hasil = ResultLabel.innerHTML = eval(ResultLabel.innerHTML);
    var ribuan;
    var	reverse = hasil.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
	hasil_ribuan	= ribuan.join('.').split('').reverse().join('');
    console.log(hasil_ribuan);
}

function pushBtn(value) {
         
        var pushed = value.innerHTML;

        console.log(pushed);

        if (pushed == '=') {
            // Calculate
           calculate();
            
        } else if (pushed == 'AC') {
           removeHistory();
        }
        else if (pushed == 'l') {
            if (ResultLabel.innerHTML == '0') {
                historyLabel.innerHTML = pushed;
                ResultLabel.innerHTML = pushed;
               
            } else {
                
                ResultLabel.innerHTML -= pushed; 
                historyLabel.innerHTML -= pushed  
            }
        }else 
        {
            if (ResultLabel.innerHTML == '0') {
                historyLabel.innerHTML = pushed;
                ResultLabel.innerHTML = pushed;
               
            } else {
                
                ResultLabel.innerHTML += pushed; 
                historyLabel.innerHTML += pushed  
            }
        }
    }
    