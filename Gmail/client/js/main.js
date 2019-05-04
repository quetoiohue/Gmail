// Variables
const arrOption = document.getElementsByClassName('item-option');
var isMore = false;

// set first state for button More option
    MoreOptions();
    activeItemOptions();
    toggleCheckbox();
    bntAllCheck();


// toggle More state
function toggle_isMore(){
    isMore = !isMore;  
    MoreOptions(isMore);    
}
// set state More
function MoreOptions(isMore){
    // status more
    if(isMore){
        arrOption[4].getElementsByTagName("a")[0].text = "ít hơn";
        arrOption[4].getElementsByClassName('item-icon')[0].style.transform = "rotate(180deg)";
        console.log(arrOption[4].getElementsByClassName('item-icon')[0].style.transform);
        
        for(let i = 0 ; i < arrOption.length; i++){
            arrOption[i].style.display = "flex";
        }
    }
    // status not more
    else {
        arrOption[4].getElementsByTagName("a")[0].text = "Danh sách mở rộng";
        arrOption[4].getElementsByClassName('item-icon')[0].style.transform = "rotate(0deg)";
        for(let i = 5 ; i < arrOption.length; i++){
            arrOption[i].style.display = "none";
        }
    }
}

function activeItemOptions(){
    var ListOptions = document.getElementById('list-option');
    var Items = ListOptions.getElementsByClassName('item-option');

    for(let i = 0 ; i < Items.length; i++){
        Items[i].addEventListener("click", function(){
            //set selected css
            var currentItem = ListOptions.getElementsByClassName('active-option');
            currentItem[0].className = currentItem[0].className.replace(' active-option', ' ');
            this.className += " active-option";
            
            //is inbox selected ?
            var Inbox_Item = Items[0].getElementsByTagName('div');
            if( i == 0){
                Inbox_Item[0].className = Inbox_Item[0].className.replace(' item-i-1', ' active-option-1');
                console.log(Inbox_Item[0].className);  
            }
            else{
               Inbox_Item[0].className = Inbox_Item[0].className.replace(' active-option-1', ' item-i-1');          
            }
            console.log(Inbox_Item[0].className);
        });
    }
}

function toggleCheckbox(){
    var ListItems = document.getElementById('list-content');
    var Items = ListItems.getElementsByClassName('item-list-content');

    for(let i = 0 ; i < Items.length; i++){
        Items[i].getElementsByTagName('div')[0].addEventListener("click", function(){

            var CboxState = this.className;
            var class_notCheck = CboxState.indexOf("check-box");

            // toggle checkbox button
            if(class_notCheck != -1){                   // is not checked
            CboxState = CboxState.replace(' check-box' ,  '');
            CboxState += ' active-cbox';
            }
            else {                                      // is checked
            CboxState = CboxState.replace(' active-cbox' ,  '');
            CboxState += ' check-box';
            }
            this.className = CboxState;
        });
    }
}

function bntAllCheck(){
     var btnAll = document.getElementById('all-btn');
     var ListItems = document.getElementById('list-content');
     var Items = ListItems.getElementsByClassName('item-list-content');

    btnAll.addEventListener("click", function(){
        var CboxState = this.className;        
        var class_notCheck = CboxState.indexOf(" all-btn");

        // toggle checkbox button
        if(class_notCheck != -1){                                // is not checked
            this.className = this.className.replace(' all-btn' ,  '');
            this.className += ' active-all-btn';
            
            for(let i = 0 ; i < Items.length; i++){        
                    var CboxStateItems = Items[i].getElementsByTagName('div')[0];
                    console.log(CboxStateItems);
                    
                                                                 //all check item 
                    CboxStateItems.className = CboxStateItems.className.replace(' check-box' ,  '');
                    CboxStateItems.className += ' active-cbox';
                    }
        }
        else {                                                   // is checked
            this.className = this.className.replace(' active-all-btn' ,  '');
            this.className += ' all-btn';

            for(let i = 0 ; i < Items.length; i++){             // all not check item
                var CboxStateItems = Items[i].getElementsByTagName('div')[0];

                CboxStateItems.className = CboxStateItems.className.replace(' active-cbox' ,  '');
                CboxStateItems.className += ' check-box';
        }
        }
    })
}