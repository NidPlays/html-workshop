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
            <input type="checkbox">${todoinput}
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
