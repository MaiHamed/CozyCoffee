if(document.readyState == 'loading'){
  document.addEventListener( 'DOMContentLoaded' ,ready)
}
else{
  ready()
}

function ready() {
  function submit() {
    alert("Logged In Successfully");
  }
  
  
  const form = document.querySelector('.fs');
  
  
  function validateForm(event) {
    
    event.preventDefault();
  
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
   
    const usernameRegex = /^[a-zA-Z\s]+$/;
    // Password validation (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  
   
    if (!usernameRegex.test(username)) {
      alert('Please enter a valid username');
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert('Please enter a valid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)');
      return;
    }
  

    console.log('Form submitted successfully');
    submit(); 

 
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
  }
  

  form.addEventListener('submit', validateForm);
}



