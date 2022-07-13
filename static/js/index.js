$("form[name=signup_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();


    $.ajax({
        url: "/user/signup",
        type: "POST",
        data : data,
        dataType: "json",
        success: function(resp){
            confirm("Registration Success !!");
            window.location.href = "/dashboard/";
        },
        error: function(resp){
            console.log(resp);
            $error.text(resp.responseJSON.error).removeClass("error-hidden");
        }
    })

    e.preventDefault();

})

$("form[name=login_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();


    $.ajax({
        url: "/user/login",
        type: "POST",
        data : data,
        dataType: "json",
        success: function(resp){
            confirm("Login Success !!");
            window.location.href = "/dashboard/";
        },
        error: function(resp){
            console.log(resp);
            $error.text(resp.responseJSON.error).removeClass("error-hidden");
        }
    })

    e.preventDefault();

})

$("form[name=addequipment_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();


    $.ajax({
        url: "/user/addequipment",
        type: "POST",
        data : data,
        dataType: "json",
        success: function(resp){
            // console.log(resp);
            confirm("Equipment Succesfully added !!");
            window.location.href = "/dashboard/";
        },
        error: function(resp){
            console.log(resp);
            $error.text(resp.responseJSON.error).removeClass("error-hidden");
        }
    })

    e.preventDefault();

})