 console.log("JavaScript Loaded");

document.querySelector('.button_add').addEventListener('click',function(event){
    
    var todoinput = document.querySelector('.task_input').value;
    //console.log(todoinput);
    if(todoinput=='')
    {
        alert('input is null Please Enter input');
    }
    else
    {
        var myhtml=`
    <div class="task">
        <div>
        <p class="input_text"> <input class ="mark_done" type="checkbox">  ${todoinput} </p>
        </div>
        <button class="delete_btn">X</button>
    </div>
    `;
    document.querySelector('.task_list').insertAdjacentHTML('beforeend',myhtml);
    
    document.querySelector('.task_input').value='';
    }

});


document.querySelector('.task_list').addEventListener('click',function(event){
    if(event.target.classList.contains('delete_btn')){
        event.target.parentElement.remove();
    }
});

document.querySelector('.task_list').addEventListener('click',function(event){
    if(event.target.classList.contains('mark_done')){
       if(event.target.parentElement.style.textDecoration!= "line-through")
       {
            event.target.parentElement.style.textDecoration="line-through";
            event.target.parentElement.style.opacity=.5;

       }
       else
       {
            event.target.parentElement.style.textDecoration="";
            event.target.parentElement.style.opacity=1;

       }
        
    }
});
