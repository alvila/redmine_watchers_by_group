function checkAll(name)
{
    boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++)
	boxes[i].checked = true ;
    return false;
}

function uncheckAll(name)
{
    boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++)
	boxes[i].checked = false ;
    return false;
}

function checkSome(name)
{
    var selected_values=document.getElementById('watcher_multiple_group').options[document.getElementById('watcher_multiple_group').selectedIndex].value.split(',');
    boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++){
        for (j = 0; j < selected_values.length; j++){
            if(boxes[i].value == selected_values[j]) boxes[i].checked = true ;
        }
        }
    return false;
}

function uncheckSome(name)
{
    var selected_values=document.getElementById('watcher_multiple_group').options[document.getElementById('watcher_multiple_group').selectedIndex].value.split(',');
    boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++){
        for (j = 0; j < selected_values.length; j++){
            if(boxes[i].value == selected_values[j]) boxes[i].checked = false ;
        }
        }
    return false;
}