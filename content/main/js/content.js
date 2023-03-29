document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const switchAuthBtn = document.getElementById("switch-auth");
    const googleLoginBtn = document.getElementById("google-login");
    let isLoginForm = true;
  
    const switchAuthForm = () => {
      isLoginForm = !isLoginForm;
      switchAuthBtn.textContent = isLoginForm ? "Switch to Register" : "Switch to Login";
      const formTitle = loginForm.previousElementSibling;
      formTitle.textContent = isLoginForm ? "Login" : "Register";
    };
  
    const loginUser = async (username, password) => {
      try {
        const response = await fetch("http://localhost/api/user/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
  

        
        const data = await response.json();
        if (response.ok) {
          console.log("Logged in successfully", data);
          // Store the token or user data as needed
        } else {
          console.error("Error logging in:", data);
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };
  
    const registerUser = async (username, password) => {
      try {
        const response = await fetch("http://localhost/api/user/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Registered successfully", data);
        // Log in the user or navigate to the login page
      } else {
        console.error("Error registering:", data);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log("Google login clicked");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isLoginForm) {
      loginUser(username, password);
    } else {
      registerUser(username, password);
    }
  };

  switchAuthBtn.addEventListener("click", switchAuthForm);
  googleLoginBtn.addEventListener("click", handleGoogleLogin);
  loginForm.addEventListener("submit", handleFormSubmit);
});