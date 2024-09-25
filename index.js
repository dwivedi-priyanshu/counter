const count= document.getElementById("counter");
function increase(){
    
    let value=parseInt(count.textContent);
    value=value+1;
    count.textContent=value;
}

function decrease(){
    
    let value=parseInt(count.textContent);
    value=value-1;
    count.textContent=value;
}