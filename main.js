let todos = [];
function add(){
    document.getElementById("head").innerHTML="Please Enter your List";
    let input=prompt("Enter your List ");
    if(input!="quit")
    todos.push(input);
    while(input!="quit"){
     input=prompt("Enter your List ");
     if(input!="quit")
    todos.push(input);
    }
    document.getElementById("head").innerHTML="Click on Show Button";
    document.getElementById("points").innerHTML="";
}
function showList(){
    document.getElementById("head").innerHTML="Here is your Todo-List";
    var holder = document.getElementById("points");
    let index = 0;
    for(var i=0; i < todos.length; i++){
        if(todos[i]!=null){
      holder.innerHTML +="<li>"+todos[i]+"</li>";
    }
}
    console.log(todos);
}
function deleteI(){
    let delIndex = 0;
    document.getElementById("head").innerHTML="Type the index to delete in the prompt";
    delIndex=prompt("Enter the index ");
    delete todos[delIndex];
    todos[delIndex]="Task Completed !";
    document.getElementById("head").innerHTML="Click on Show Button";
    document.getElementById("points").innerHTML=" ";
}
function clearAll(){
    todos=["Nothing to do !"];
    document.getElementById("head").innerHTML="You are all FREE ! Enjoy !!!";
    document.getElementById("points").innerHTML=todos;
}