class question{
    constructor(q,op1,op2,op3,op4,ans)
    {
        this.q=q;
        this.op1=op1;
        this.op2=op2;
        this.op3=op3;
        this.op4=op4;
        this.ans=ans;
    }
}

let index=0;
let q1=new question("Which of the following is a client site language?","Java","C","Python","JavaScript","d");
let q2=new question("What does HTML stand for?","Hypertext Markup Language","Cascading Style Sheet","Jason Object Notation","Helicopters Terminals Motorboats Lamborginis","a");
let q3=new question("What year was JavaScript launched?","1996","1995","1994","none of the above","b");
let q4=new question("What does CSS stands for?","Hypertext Markup Language","Cascading Style Sheet","Jason Object Notation","Helicopters Terminals Motorboats Lamborginis","b");
let arr=[q1,q2,q3,q4];
let marks=0;

const cont=document.getElementsByClassName("container");
const sbt=document.querySelector("#submit");
const optioninp=document.querySelectorAll("input");
// console.log(optioninp);
loadQuestion();
sbt.addEventListener("click",()=>{
    
    const data=arr[index];
    // console.log(`submit was clicked ${index}`);

    let userAns=getAnswere();
    console.log(userAns);
    if(arr[index].ans==userAns)
    {
        marks++;
    }
    console.log(marks);
    
    index++;
    if(index>=arr.length)
    {
        return quizResult();
    }
    loadQuestion();
})

function quizResult()
{
    const temp=document.getElementsByClassName("container");
    console.log(temp);
    return temp[0].innerHTML=`
    <div class="col">
        <h3 > Hii, you've scored ${marks} / ${arr.length} </h3>
    </div>`
}

function getAnswere(){
    let ans;
    for(let its of optioninp)
    {
        // console.log(its);
        if(its.checked)
        {
            // console.log("yes");
            ans=its.value;
        }
    }
    return ans;
}


function loadQuestion()
{
    cont[0].children[0].children[0].innerText=arr[index].q;
    cont[0].children[1].children[1].innerText=arr[index].op1
    cont[0].children[2].children[1].innerText=arr[index].op2
    cont[0].children[3].children[1].innerText=arr[index].op3
    cont[0].children[4].children[1].innerText=arr[index].op4
}

