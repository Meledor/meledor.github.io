//Page load with ajax
function loadContent(param) {
    $.get(param, function (data) {
        $('#ajax-content').html(data);
    });
}

//Document validation
function validateForm(form) {
    var inputs = form.getElementsByTagName('*');
    var success = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required')) {
            if (inputs[i].value == '') {
                inputs[i].style.borderColor = "red";
                success = false;
            } else {
                inputs[i].style.borderColor = "";
            }
        }
    }
    return success;
}

