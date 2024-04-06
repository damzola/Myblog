class Myheader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
            <div class="container-fluid">
              <a class="navbar-brand" id="logo" href="/view/Index.html">MyBlog</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"  id="staypage" >
                  <li class="nav-item">
                    <a class="nav-link"  id="landpage" href="/view/Index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  "  id="nav-join" href="/view/Project.html">Project</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " id="nav-join" href="/view/Skills.html">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="nav-join" href="/view/About.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="nav-join" href="/view/Signup.html">Register</a>
                  </li>
                 
                </ul>
                
              </div>
            </div>
          </nav>

        `
    }
}
    customElements.define('my-header', Myheader)

    class Myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="fot-wrap">
            
            <div class="fot-unwrap"></div>
           </div> 
        <div class="card">
           
            <div class="card-body">
                
            <footer class="footer"> &copy; Damilola 2024 </footer>
            
            <span class="icon">
            <p class="p-p">You can also fellow us on social media</p>
                
                <a href="https://www.Facebook.com" target="_blank"> <i title="Facebook" class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com" target="_blank" ><i title="Instagram" class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.linkedin.com/in/adeoye-damilola-840ab9275" target="_blank"><i title="Linkedin" class="fa-brands fa-linkedin"></i> </a>
                <a href="https://www.twitter.com" target="_blank"><i title="X or Twitter" class="fa-brands fa-twitter"></i> </a>
                <a href="https://github.com/damzola/Damzproject" target="_blank"><i title="Github" class="fa-brands fa-github"></i> </a>
                <a href="https://t.me/Damz_ade" target="_blank"><i title="Telegram" class="fa-brands fa-telegram"></i></a>
                
                

            </span>
              
            </div>
          </div>
        
        `
    }
}
 

customElements.define('my-footer', Myfooter)

class Mynav extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
        <nav>
        <h5 class="h-h5">Select your Tutoria</h5>
                    <ol class="linked">
                        <li><a href="/view/Skills.html" id="landhome">Skills</a></li>
                        <li><a href="/view/HtmlClass.html">Html</a></li>
                        <li><a href="/view/CssClass.html">Css</a></li>
                        <li><a href="/view/BootstrapClass.html">Bootstrap</a></li>
                        <li><a href="/view/Javascript.html">Javascript</a></li>
                       
                    </ol>
                </nav
        `
    }
}

customElements.define('my-nav', Mynav)





    // PAGE HIGHLIGHT SCRIPT 
    window.onload = function () {
        var patharray = location.pathname.split("./Index.html") ;
        var foldername = patharray[0];
        if(foldername == "" || foldername == "Index.html"){
            document.getElementById("landpage").className = "currentpage";
        } else {
            var nav = document.getElementById("staypage");
            var link = nav.getElementsByTagName("a");
            // alert(link.length);
            for(i = 1; i < link.length; i++){
             if(link[i].getAttribute("href").indexOf     (foldername) > -1){
             link[i].className = "currentpage";
                 }
             }
        }
    }
        
    