let headerTemplate = () => {
    let headerTemplateString = `
             <img src="assests/images/logo.png" id="logo" style="height: 60px; width: 60px;" alt="logo"> 
             <a href="login.html" id="login" >Login</a>
             <button id="login-btn" type="button" class="btn btn-light" data-toggle="modal" data-target="#loginModal">LOGIN</button>
             onclick="headerLogin(event)">LOGIN</button>
             <div
             class="modal"
             id="loginModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
           >
             <div class="modal-dialog" role="document">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                   <button
                     type="button"
                     class="close"
                     data-dismiss="modal"
                     aria-label="Close"
                   >
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div class="modal-body">
                   <form id="modal-form" action="index.html" method="get">
                     <div class="input-container">
                       <label for="username">Username:</label>
                       <input type="text" name="username" id="username" placeholder="Enter Username" required/>
                     </div>
                     <div class="input-container">
                       <label for="password">Password:</label>
                       <input type="password" name="password" id="password" placeholder="Enter Password" required/>
                     </div>
                   </form>
                 </div>
                 <div class="modal-footer">
                   <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
                 </div>
               </div>
             </div>
           </div>`;
           document.getElementById("header").innerHTML += headerTemplateString;
};

let footerTemplate = () => {
    let footerTemplateString = ` <button id="contact-btn" type="button" class="btn btn-info" data-toggle="modal" data-target="#contactModal">Contact Us</button>
    <div
    class="modal"
    id="contactModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Thank you for reaching out!!!</p>
          <p>Please enter your email and we will get back to you.</p>
          <form action="index.html" method="get">
            <div>
              <label for="useremail">Email:</label>
              <input type="email" name="useremail" id="useremail" placeholder="Enter your email id" required/>
            </div>
          </form>
        </div>
        <div id="modal-footer-2" class="modal-footer">
          <input type="submit" class="btn btn-primary" value="Submit" />
        </div>
      </div>
    </div>
  </div>
</div>
<section id="copyright">&copy; 2020 ROOM SEARCH PVT. LTD.</section>
<section id="social-media-container">
  <a href="https:/www.facebook.com" target="_blank"
    ><img
      src="assests/images/facebook.png"
      class="social-media"
      alt="Facebook"
  /></a>
  <a href="https:/www.instagram.com" target="_blank"
    ><img
      src="assests/images/instagram.png"
      class="social-media"
      alt="Instagram"
  /></a>
  <a href="https:/www.twitter.com" target="_blank"
    ><img
      src="assests/images/twitter.png"
      class="social-media"
      alt="Twitter"
  /></a>
</section>`;
   document.getElementById("footer").innerHTML += footerTemplateString;
};

  headerTemplate();
  footerTemplate();
  
  let login = (event) => {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");
    localStorage.setItem("isUserLoggedIn", "false");
    event.preventDefault();

    
    let userElement = document.getElementById("username");
    let passwordElement = document.getElementById("password");
  
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (  userElement.value === storedUsername && passwordElement.value === storedPassword ) {
        localStorage.setItem("isUserLoggedIn", "true");
        alert("Successfully Logged In!");
        document.getElementById("login").innerText = "LOGOUT";
        location.reload();
      } else {
        alert("Invalid Credentials!, Login Failed!");
      }
      userElement.value = "";
      passwordElement.value = "";
    };
    let verifyLogin = () => {
        let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        let loginBtn = document.getElementById("login");
        if (!isUserLoggedIn || isUserLoggedIn === "false") {
          localStorage.clear();
          loginBtn.innerText = "LOGIN";
          loginBtn.dataset.target = "#loginModal";
        } else if (isUserLoggedIn === "true") {
          loginBtn.dataset.target = "";
          loginBtn.innerText = "LOGOUT";
        }
      };
      
      verifyLogin();
      
      let headerLogin = () => {
        if (localStorage.getItem("isUserLoggedIn") === "true") {
          localStorage.setItem("isUserLoggedIn", "false");
          alert("Logged out successfuly, Please visit again!");
          location.reload();
        }
      };