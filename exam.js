


var next=document.getElementsByClassName('next')[0];
var prevous=document.getElementsByClassName('prevous')[0];
var page=document.getElementById('page')
var bar=document.getElementsByClassName('progress')[0];
var questionId=document.getElementsByClassName('question')[0];


var index=1;
var max=0;
var val=5;
var sum=0;
var interval=setInterval((e)=>{
  sum=sum+val
  bar.style=`width:${sum}`
   if(sum>1500){
   timeOut();
   clearInterval(interval)
  } 
},1000) 

function timeOut() {
  for (let index = 1; index < 11; index++) {
    
    sessionStorage.removeItem('mark'+index,index)
  }

  document.getElementsByClassName('timeout')[0].click()

}
function Question(id,value) {
    this.id=id;
    this.value=value;
    var answers;
    var rightAnswer;

    this.getAnswers=function() {
        return answers
    };
    this.setAnswers=function(_answers) {
        answers=_answers.map(e=>e);
    }
  
   this.getAnswer= function(){
        return rightAnswer;
    }

   this.setAnswer=function(x) {
        rightAnswer=x;
    }
    
}

function Answers(id,value) {
    this.id=id;
    this.value=value;
}

function getqq() {
  var q=shuffle(startTest());
  return function() {
    return q;
  }
}

var x=getqq()


window.addEventListener('DOMContentLoaded',(e)=>{

appendQuestion(x()[0])
appendAnswers(x()[0])

})





 


next.addEventListener('click',(e)=>{
//get the answers

  max=1;
  prevous.style='display:inline-block;'
  appendQuestion(x()[index])
  appendAnswers(x()[index])

if(index==9)
  next.style='display:none;'

  page.value=++index

  
})

prevous.addEventListener('click',(e)=>{
if(max=1){
  next.style='display:inline-block;'
  appendQuestion(x()[index-2])
  appendAnswers(x()[index-2])
  max=0;
}
else{
  appendQuestion(x()[--index])
  appendAnswers(x()[--index])
  
}
  if(index==2)
    prevous.style='display:none;'
  

page.value=--index
})

//arr or function constructor

function startTest() {

var q1=new Question(1,"what is the old name of portSaid ?");
var q2=new Question(2,"don't throw rubbish on  ____ ");
var q3=new Question(3,"what is the meaning of welfare ?");
var q4=new Question(4,"who built the pyramids ?");
var q5=new Question(5,"they _____ me believer ");
var q6=new Question(6,"______ is the best club in the world ?");
var q7=new Question(7,"what is our galaxy called ?");
var q8=new Question(8,"I  ______ the player of the month ");
var q9=new Question(9,"how ______ you ?");
var q0=new Question(10,"hello from the _____ ");
//-----------------------------answers----------------------------
var a1=new Answers( 1,'farama');
var a14=new Answers( 14,'el abtal');
var a15=new Answers( 15,'abo nahea');

var a2=new Answers( 2,'street');
var a16=new Answers( 16,'basket');
var a17=new Answers( 17,'garbage');

var a3=new Answers( 3,'luxury');
var a18=new Answers( 18,'hopeless');
var a19=new Answers( 19,'cheap');

var a4=new Answers( 4,'canadians');
var a20=new Answers( 20,'arabs');
var a21=new Answers( 21,'pharaohs');

var a5=new Answers( 5,'are');
var a22=new Answers( 22,'me');
var a23=new Answers( 23,'call');

var a6=new Answers( 6,'zamalek');
var a24=new Answers( 24,'realmadrid');
var a25=new Answers( 25,'milan');

var a7=new Answers( 7,'chile chile');
var a26=new Answers( 26,'milky way');
var a27=new Answers( 27,'luxomburg');

var a8=new Answers( 8,'for every');
var a28=new Answers( 28,'want');
var a29=new Answers( 29,'am');


var a9=new Answers( 9,'had');
var a30=new Answers( 30,'are');
var a11=new Answers( 11,'is');

var a12=new Answers( 12,'outside');
var a0=new Answers( 10,'other side');
var a13=new Answers( 13,'other\'s side');

q1.setAnswers([a1,a14,a15])
q1.setAnswer(a1)
q2.setAnswers([a2,a16,a17])
q2.setAnswer(a2)
q3.setAnswers([a18,a3,a19])
q3.setAnswer(a3)
q4.setAnswers([a4,a20,a21])
q4.setAnswer(a21)

q5.setAnswers([a5,a22,a23])
q5.setAnswer(a23);

q6.setAnswers([a6,a24,a25])
q6.setAnswer(a6);

q7.setAnswers([a7,a26,a27])
q7.setAnswer(a26);

q8.setAnswers([a8,a28,a29])
q8.setAnswer(a29);

q9.setAnswers([a9,a30,a11])
q9.setAnswer(a30);

q0.setAnswers([a0,a12,a13])
q0.setAnswer(a0);
var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q0];
return questions;

}



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function appendQuestion(question) {
    var q=document.getElementsByClassName('question')[0];
    q.setAttribute('id',question.id)
    q.textContent='Q'+page.innerText+'-'+question.value;
  }

  function appendAnswers(_answers) {

    var answer=document.getElementsByClassName('answer');

     for (let index = 0; index <  _answers.getAnswers().length; index++) {
       let element =  _answers.getAnswers()[index];
        if(window.sessionStorage.getItem('Q'+_answers.id)==element.id){
          console.log(window.sessionStorage.getItem('Q'+_answers.id));
          if(answer[index].childNodes[0].getAttribute('class')!='rad-input'){
         
           answer[index].removeChild(answer[index].childNodes[0])
          }
        var t=document.createElement('span')
        t.textContent=element.value
        answer[index].insertBefore(t, answer[index].lastChild )
        answer[index].lastChild.setAttribute('value',element.id)
        answer[index].lastChild.click()
      
      
      
      }
        else{
          if(answer[index].childNodes[0].getAttribute('class')!='rad-input'){
            answer[index].removeChild(answer[index].childNodes[0])

          }
          var t=document.createElement('span')
          t.textContent=element.value
          var rad=document.createElement('input');
          rad.type='radio'
          rad.className='rad-input'
          rad.name='rad'
          answer[index].replaceChild(rad,answer[index].lastChild)
          answer[index].insertBefore(t, answer[index].lastChild )
          answer[index].lastChild.setAttribute('value',element.id)
          document.getElementsByClassName('temp')[0].setAttribute('checked','true')  
        
        }
     }
      
    
  

    
 
  }

  
  function markQuestion() {
    if(sessionStorage.getItem('mark'+index)!=index){

      var insideWrapper=document.getElementsByClassName('insideWrapper')[0];
      var div=document.createElement('div');
      var btn=document.createElement('button');
      btn.className='btn-close';
      btn.setAttribute("data-bs-dismiss","alert");
      btn.setAttribute("aria-label","close");
      btn.setAttribute("onclick","closeMarked(event)")
      btn.id=index;
      div.className='markedq alert alert-warning alert-dismissible fade show';
      div.setAttribute('onclick','appendMarked(event)')
      div.id=index;
      div.innerHTML=` Question ${index} marked`
      div.appendChild(btn)
      sessionStorage.setItem('mark'+index,index)
      insideWrapper.appendChild(div);
    }
    
  }



  function stdSolve(qId,aId) {
    if(sessionStorage.getItem('Q'+qId)){
      sessionStorage.removeItem('Q'+qId)
      sessionStorage.setItem('Q'+qId,aId);
    }
    else
    sessionStorage.setItem('Q'+qId,aId);

    
    
   
  }
  
  
    function getModelAnswer() {
      return modelAnswer=x().map((e)=>{
        return {[e.id]:e.getAnswer().id}
      })
    }

    function correction() {
      var stdModel=getStdModel();
      var result=[];
      console.log(stdModel[0][`${0+1}`],stdModel);
      for (let index = 0; index < 10; index++) {
        
        if(stdModel[index][`${index+1}`]==getValueAnswer(index+1)){
       
          result.push({[`${index+1}`]:1})
        }
        else
        result.push({[`${index+1}`]:0})
      }
      return result;  

    }
  
    function getValueAnswer(id) {
      var model=getModelAnswer();
      var x;
      model.forEach((e)=>{
        if(Object.keys(e)==id){
          x=Object.values(e)
        }
      })
      return x[0];
    }
    function getStdModel() {
      var stdModel=[];
      for (let index = 1; index < 11; index++) {     
       stdModel.push({[`${index}`]:sessionStorage.getItem('Q'+index)})
      }
      return stdModel
    }

    function finalGrade() {
      correction()
      var result=0;
      correction().forEach((e)=>{
        result=result+(+Object.values(e))
      })
      return result
    }


    function submit()
    {


    finalGrade();

    if(window.localStorage.getItem('grades')){
      window.localStorage.removeItem('grades')
    }
    window.localStorage.setItem('grades',finalGrade())
    window.location.replace('grades.html')  

  }


var a1=document.getElementsByClassName('answer')[0];
a1.addEventListener('click',()=>{

  a1.lastChild.click()
  stdSolve(questionId.getAttribute('id'),a1.lastChild.value)
})
var a2=document.getElementsByClassName('answer')[1];
a2.addEventListener('click',({target})=>{
  a2.lastChild.click()
  stdSolve(questionId.getAttribute('id'),a2.lastChild.value)
})
var a3=document.getElementsByClassName('answer')[2];
a3.addEventListener('click',({target})=>{
a3.lastChild.click()
stdSolve(questionId.getAttribute('id'),a3.lastChild.value)
})

function closeMarked({target}) {
  sessionStorage.removeItem('mark'+target.id,target.id)

}

function appendMarked({target}) {
  console.log(target.id,index);
  if(index<+target.id){
    var times=(+target.id)-index;
    for (let index = 0; index < times; index++) {
     next.click()
    }
  }
  else
  {
    var times=index-(+target.id);
    for (let index = 0; index < times; index++) {
     prevous.click()
    }
  }
}
