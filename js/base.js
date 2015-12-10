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