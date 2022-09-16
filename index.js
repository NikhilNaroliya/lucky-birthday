const DateOfBirth=document.querySelector("#date-of-birth");
const LuckyNumber=document.querySelector("#lucky-number");
const CheckButton=document.querySelector("#check-number");
const outputresult=document.querySelector("#output");


function checkbirthdayislucky(){

    console.log("in bir");
    const dob=DateOfBirth.value;
    const sum=calculatesum(dob);
    
    if(sum&&dob)
    comparevalues(sum,LuckyNumber.value);
    else
    outputresult.innerText="🙃Enter both the fields🙃"

    
    
}
function comparevalues(sum,LuckyNumber){
    
    if(sum % LuckyNumber===0)
    {
        //  console.log("luck is in your favour")
        outputresult.innerText="Your DOB is lucky ✨"
     }
     else
     {
        outputresult.innerText="Your DOB is not lucky 😏"
        // console.log("not")
     }
}
function calculatesum(dob){
    
    dob=dob.replaceAll("-","");
    var sum=0;
    
    // console.log("date",dob);
    
    for(let i of dob)
    {
        sum=sum+Number(dob.charAt(i));
        // console.log("sum isiisis",sum)
    }
    return sum;
    
    
}
CheckButton.addEventListener("click", checkbirthdayislucky)
