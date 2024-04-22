function updateProgress()
{
    var name_input=document.getElementById("Name").value;
    const name=name_input.trim().length;
    const privateRadio = document.getElementById('private');
    const commercialRadio = document.getElementById('commercial');
    const paperRadio= document.getElementById('paper');
    const smartRadio= document.getElementById('smart');
    var progress=document.getElementById("progress");
    const renew1=document.getElementById("renew1");
    const renew2=document.getElementById("renew2");
    if(name>2 && (privateRadio.checked || commercialRadio.checked) && (paperRadio.checked || smartRadio.checked))
    {
      progress.style.width="100%";
      renew1.style.display="none";
      renew2.style.display="block";
      progress.style.backgroundColor="orangered";
    }
    else if(((name>2) && (privateRadio.checked || commercialRadio.checked)) || ((privateRadio.checked || commercialRadio.checked) && (paperRadio.checked || smartRadio.checked)) || ((name>2) && (paperRadio.checked || smartRadio.checked)))
    {
      progress.style.width="66.66%";
      progress.style.backgroundColor="orangered";
    }
    else if((name>2) || (privateRadio.checked || commercialRadio.checked) || (paperRadio.checked || smartRadio.checked))
    {
      progress.style.width="33.33%";
      progress.style.backgroundColor="orangered";
    }
    else
    {
      progress.style.width="0%";
    }
}
function dropdown_click1()
{
    var option=document.getElementById("option");
    var choose=document.getElementById("choose_issue");
    if(option.style.display==="none")
    {
        option.style.display="flex";
        choose.style.display="none";
        option.style.backgroundColor="#ffffff";
    }
    else
    {
        option.style.display="none";
    }
}
function dropdown_click2()
{
    var option=document.getElementById("option2");
    var choose=document.getElementById("choose_exp");
    if(option.style.display==="none")
    {
        option.style.display="flex";
        choose.style.display="none";
        option.style.backgroundColor="#ffffff";
    }
    else
    {
        option.style.display="none";
    }
}
function selectYear1(year)
{
    var option=document.getElementById("option");
    var choose=document.getElementById("choose_issue");
    var progress=document.getElementById("progress1");
    var year=year;
    choose.innerHTML=""+year+' <img src="dropdown_icon.png" alt="downicon" class="down">';
    progress.style.width="66.66%";
    progress.style.backgroundColor="orangered";
    if(option.style.display="none")
    {
        choose.style.display="block";
    }
    else{
        option.style.display="block";
        down.style.display="none";
    }      
}
function selectYear2(year)
{
    var option=document.getElementById("option2");
    var choose=document.getElementById("choose_exp");
    const renew2= document.getElementById('renew2');
    const renew1=document.getElementById('renew1');
    var progress=document.getElementById("progress1");
    var year=year;
    choose.innerHTML=""+year+' <img src="dropdown_icon.png" alt="downicon" class="down">';
    progress.style.width="100%";
    progress.style.backgroundColor="orangered";
    renew1.style.display="block";
    renew2.style.display="none";
    if(option.style.display="none")
    {
        choose.style.display="block";
    }
    else{
        option.style.display="block";
        down.style.display="none";
    }      
}
function updateProgress2()
{
  var placename=document.getElementById("placename").value;
  const place=placename.trim().length;
  var progress=document.getElementById("progress1");
  if(place>2)
  {
    progress.style.width="33.33%";
    progress.style.backgroundColor="orangered";
  }
  else
  {
    progress.style.width="0%";
  }
}
function back1()
{
    const renew2= document.getElementById('renew2');
    const renew1=document.getElementById('renew1');
    renew2.style.display="block";
    renew1.style.display="none";
}
function back2()
{
    const renew2= document.getElementById('renew2');
    const renew1=document.getElementById('renew1');
    renew1.style.display="block";
    renew2.style.display="none";
}