
const timeleft = document.getElementById('time-left');
const btnCalcular = document.getElementById('btncal')

const birthday = new Date("12/20/2023");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

const today = new Date();

    
function countDown(){
  const today = new Date();
  
  
  const timeSpan = birthday - today;
  
  if(timeSpan <= day){
      timeleft.innerHTML = "hope you had a nice birthday";
      clearInterval(timerId);
      return;
  }
  else if  (timeSpan <= 0) {
      timeleft.innerHTML = "happy birthday";
      clearInterval(timerId);
      return;
  }
 const days = Math.floor( timeSpan / day);
 const hours = Math.floor((timeSpan % day) / hour);
 const minutes = Math.floor((timeSpan % hour) / minute);
 const seconds = Math.floor((timeSpan % minute) / second );

 timeleft.innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'minutes ' + seconds + 'seconds';
 
}

timerId = setInterval(countDown, second)


