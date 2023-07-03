function display()
{
    let d=new Date();
    console.log(d)
    let hrs= d.getHours();
    let min= d.getMinutes();
    let sec= d.getSeconds();
   if(hrs>12)
   {
    document.getElementById("hour").value=hrs-12;
    document.getElementById("minute").value=min;
    document.getElementById("second").value=sec;
    document.getElementById("ampm").innerText="PM";
   }
   else
   {
    document.getElementById("hour").value=hrs;
    document.getElementById("minute").value=min;
    document.getElementById("second").value=sec;
    document.getElementById("ampm").innerText="AM";
}
}
display();
setInterval(()=>
{
    display();
    
},1000);


