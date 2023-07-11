
    
      function validate() {
        var valid = true;
        valid =  checkName($("#fname"));
        valid = valid && checkEmail($("#email"));
        valid = valid && checkUser($("#userid"));
        valid = valid && checkPass($("#pass"));
        valid = valid && checkCpass($("#cpass"), $("#pass"));
        

        console.log(valid);
        $("#signup_btn").attr("disabled", true).css("border", "#FF0000 1px solid").css("background-color","red");
        if (valid) {
          console.log("valid");
          $("#signup_btn").attr("disabled", false).css("border", "#00b894 1px solid").css("background-color","#00b894");
        }
      }

      function checkEmpty(obj) {
        if ($(obj).val() == "") {
          return false;
        }
        return true;
      }

      function checkUser(obj){
        var result = true;

        result = checkEmpty(obj);

        $(obj).css("border", "");
        $("#userid_err").html("");
        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#userid_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        return true;
      }

      
      function checkName(obj) {
        var result = true;

        result = checkEmpty(obj);

        $(obj).css("border", "");
        $("#name_err").html("");
        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#name_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        return true;
      }

      

      function checkPass(obj) {
        var result = true;

        $(obj).css("border", "");
        $("#pass_err").html("");
        result = checkEmpty(obj);

        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#pass_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        var pass_regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$/;
        result = pass_regex.test($(obj).val());
        console.log("jssss");
        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#pass_err")
            .html("Must contain Uppercase,lowercase,number and of > 8 length.")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        return result;
      }

      function checkCpass(obj1, obj2) {
        var result = true;

        $("#cpass_err").html("");
        $(obj1).css("border", "");
        result = checkEmpty(obj1);

        if (!result) {
          $(obj1).css("border", "#FF0000 1px solid");
          $("#cpass_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        var cpass = $(obj1).val();
        console.log(cpass);
        var pass = $(obj2).val();
        console.log(pass);

        if (cpass.localeCompare(pass) != 0) {
          $(obj1).css("border", "#FF0000 1px solid");
          $("#cpass_err")
            .html("Password and confirm password not same!")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        return result;
      }

      function checkEmail(obj) {
        var result = true;

        $("#email_err").html("");
        $(obj).css("border", "");
        result = checkEmpty(obj);

        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#email_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
          return false;
        }

        var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
        result = email_regex.test($(obj).val());

        if (!result) {
          $(obj).css("border", "#FF0000 1px solid");
          $("#email_err")
            .html("Invalid")
            .css("color", "red", "font-size", "5px");
          return false;
        }

        return result;
      }
   