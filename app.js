class question{
    constructor(q,op1,op2,op3,op4,ans)
    {
        this.q=q;
        this.op1=op1;
        this.op2=op2;
        this.op3=op3;
        this.op4=op4;
        this.ans=ans;
        this.value;
    }
    corect(){
        return this.ans==this.value;
    }
}


let q1=new question("Which of the following is a client site language?","Java","C","Python","JavaScript","JavaScript");
let q2=new question("What does HTML stand for?","Hypertext Markup Language","Cascading Style Sheet","Jason Object Notation","Helicopters Terminals Motorboats Lamborginis","Hypertext Markup Language");
let q3=new question("What year was JavaScript launched?","1996","1995","1994","none of the above","1995");
let q4=new question("What does CSS stands for?","Hypertext Markup Language","Cascading Style Sheet","Jason Object Notation","Helicopters Terminals Motorboats Lamborginis","Cascading Style Sheet");
let arr=[q1,q2,q3,q4];
let marks=0;
const cont=document.getElementsByClassName("container");
 
console.log(cont);

function myfunc()
{
    console.log("i was called");
}
let index=0;
function loadQuestion()
{
    cont[0].children[0].children[0].innerText=arr[index].q;
    cont[0].children[1].children[1].innerText=arr[index].op1
    cont[0].children[2].children[1].innerText=arr[index].op2
    cont[0].children[3].children[1].innerText=arr[index].op3
    cont[0].children[4].children[1].innerText=arr[index].op4
}



    // console.log();
