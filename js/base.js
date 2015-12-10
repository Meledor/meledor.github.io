//Page load with ajax
function loadContent(param) {
    $.get(param, function (data) {
        $('#ajax-content').html(data);
    });
}

//Valdiation of Contact Form
function validateForm(form) {
    var name = form.getElementsByTagName('name');
    var email = form.getElementsByTagName('name');
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(email)) {
        email.style.borderColor = "red";
        success = false;
    } 
    return success;
}

$(document).ready(function() { 
function changeStyles(optValue){ 
var property = optValue.split("-")[0]; 
removeOldClass(property); 
$("body").addClass(optValue); 
$.cookie('bodyClassList', $("body").attr('class')); 
}	         
function removeOldClass(property){ 
var classList = $("body").attr('class').split(/\s+/); 
$.each(classList, function(index, item){ 
if (item.match(property)){ 
$("body").removeClass(item); 
} 
}); 
} 
$(".selector").change(function(){ 
changeStyles(this.value); 
}); 
      
$(".selector > option").each(function() { 
if($.cookie('bodyClassList') != null && $.cookie('bodyClassList').match($(this).val())){ 
$(this).attr("selected","selected");  
} 
}); 
$("#reset").click(function(){ 
$("body").removeClass(); 
$(".selector").each(function(){ 
$(this[0]).attr('selected', true); 
}) 
 $.cookie('bodyClassList', null); 
});  
if($.cookie('bodyClassList') != null) {  
$("body").removeClass(); 
$("body").addClass($.cookie('bodyClassList')); 
} 
}); 
