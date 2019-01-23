	var regx_email =/^([a-zA-Z0-9]{4,10})\@(gmail)\.(com)$/;
					var regx_pass =/^([A-Za-z0-9@]{4,20})$/;
					var regx_phone =/^([0-9]{10,11})$/;
					var regx_name =/^([A-Za-z]{4,9})$/;
					Login.onclick = function(){
						if(!regx_email.test(_email.value)){
							_email.setAttribute("style","border-bottom:solid 3px red");
							$("#alert_error_email").html("You can enter your email !!!")
						}
						else{
							_email.setAttribute("style","border-bottom:solid 3px white");
							$("#alert_error_email").html("");
						}
						 if(!regx_pass.test(_pasw.value)){
							_pasw.setAttribute("style","border-bottom:solid 3px red");
							$("#alert_error_pass").html("Password must least 4 characters !!!");
						}
						else{
							_pasw.setAttribute("style","border-bottom:solid 3px white");
							$("#alert_error_pass").html("");
						}
						if(!regx_phone.test(phone.value)){
							phone.setAttribute("style","border-bottom:solid 3px red");
							$("#phone_Er").html("Wrong !!!");
						}
						else{
							phone.setAttribute("style","border-bottom:solid 3px white");
							$("#phone_Er").html("");
						}

						if(_paswagain.value != _pasw.value){
							phone.setAttribute("style","border-bottom:solid 3px red");
							$("#pass_Again_Er").html("Wrong !!!");
						}
						else{
							phone.setAttribute("style","border-bottom:solid 3px white");
							$("#pass_Again_Er").html("");
						}
						if(!regx_pass.test(fname.value)){
							fname.setAttribute("style","border-bottom:solid 3px red");
							$("#fname_Again_Er").html("Wrong !!!");
						}
						else{
							fname.setAttribute("style","border-bottom:solid 3px white");
							$("#fname_Again_Er").html("");
						}
						if(!regx_pass.test(lname.value)){
							lname.setAttribute("style","border-bottom:solid 3px red");
							$("#lname_Again_Er").html("Wrong !!!");
						}
						else{
							lname.setAttribute("style","border-bottom:solid 3px white");
							$("#lname_Again_Er").html("");
						}






					 	if(regx_email.test(_email.value) && regx_pass.test(_pasw.value)  &&regx_phone.test(phone.value)  && _paswagain.value == _pasw.value  && regx_pass.test(fname.value && lname.value)  ){
							alert("Sucessful Login !! welcome to word of super car !");
							window.location.href="trangchu.html";
						}
						
					}
					