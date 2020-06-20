class Form{
   constructor(){
    this.ans1 = createInput('Answer');
    this.ans2 = createInput('Answer');
    this.ans3 = createInput('Answer');
    this.ans4 = createInput('Answer');

   
   }
  display(){
  this.ans1.position(480,130);
  this.ans2.position(480,230);
  this.ans3.position(480,330);
  this.ans4.position(480,430);
  }
}