const password = document.getElementById('senha');
const icon = document.getElementById('eye-png');

        function showhide(){
            if(password.type === "password"){
                password.setAttribute('type',   'text');
                icon.classList.remove("show")
                icon.classList.add('hide')
            } else {
                password.setAttribute('type', 'password');
                icon.classList.remove("hide")
                icon.classList.add("show")

            }
        }