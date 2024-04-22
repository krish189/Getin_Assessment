function dropdown_click()
{
    var option=document.getElementById("option");
    var dropdown=document.getElementById("dropdown_without_select");
    var choose=document.getElementById("choose_issue");
    if(option.style.display==="none")
    {
        option.style.display="flex";
        choose.style.display="none";
        option.style.backgroundColor="#ffffff";
        dropdown.style.backgroundColor="#cccccc";
        document.body.classList.add("bg");
    }
    else
    {
        option.style.display="none";
        document.body.classList.remove("bg");
    }
}
function selectIssue(issue)
{
    var option=document.getElementById("option");
    var choose=document.getElementById("choose_issue");
    var issue=issue;
    if(issue.length<8)
    {
      choose.innerHTML=""+issue+' <img src="dropdown_icon.png" alt="downicon" class="down">';
    }
    else
    {
      choose.innerHTML=""+issue+' <img src="dropdown_icon.png" alt="downicon" class="down_high_length">';
    }
    if(option.style.display="none")
    {
        choose.style.display="block";
    }
    else{
        option.style.display="block";
        down.style.display="none";
    }      
}