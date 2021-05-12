var isItImportant = false;


function toggleImportant(){
    console.log("Icon clicked!!");

    if(isItImportant){
        //change to non important
        isItImportant = false;
        $("#iImportant").removeClass('fas').addClass('far');
    }   
    else{
        //change to important
    isItImportant = true;
    $("#iImportant").removeClass('far').addClass('fas');
   }
}

function saveTask(){
    console.log("saving!!");

    //get the values from control
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let important = $("#iImportant").val();
    let dueDate = $("#txtDueDate").val();
    let alertText = $("#selAlert").val();
    let location = $("#txtLocation").val();
    //create an object 
    // let task = new task(pass the perameters, second, third)
    let theTask = new Task(title, desc, important, dueDate, alertText, location)

    //console.log the object
    console.log(theTask);
}
function init(){
    console.log("Task Manager");

    //hook events
    $("#iImportant").click( toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnDetails").click(function(){ 
        $("#details").toggle();   
    });
}


window.onload = init;