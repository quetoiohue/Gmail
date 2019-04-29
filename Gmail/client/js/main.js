// Variables
const arrOption = document.getElementsByClassName('item-option');
var isMore = false;

// set first state for button More option
    MoreOptions();

// toggle More state
function toggle_isMore(){
    isMore = !isMore;  
    MoreOptions(isMore);
}

// set state More
function MoreOptions(isMore){
    if(isMore){
        arrOption[4].getElementsByTagName("a")[0].text = "ít hơn";
        arrOption[4].getElementsByClassName('item-icon')[0].style.transform = "rotate(180deg)";
        console.log(arrOption[4].getElementsByClassName('item-icon')[0].style.transform);
        
        for(let i = 0 ; i < arrOption.length; i++){
            arrOption[i].style.display = "flex";
        }
    }
    else {
        arrOption[4].getElementsByTagName("a")[0].text = "Danh sách mở rộng";
        arrOption[4].getElementsByClassName('item-icon')[0].style.transform = "rotate(0deg)";
        for(let i = 5 ; i < arrOption.length; i++){
            arrOption[i].style.display = "none";
        }
    }
}

