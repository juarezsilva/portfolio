// Sessão Header

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


// Sessão Scroll no tela rolamento

function scrollTo(element) {
  document.querySelector(element).scrollIntoView({ behavior: "smooth"});
}

document.querySelector("#btn1").addEventListener("click", function(event) {
  event.preventDefault();

  scrollTo("#inicio")   
})

document.querySelector("#btn2").addEventListener("click", function(event) {
  event.preventDefault();

  scrollTo("#sobre-mim")   
})

document.querySelector("#btn3").addEventListener("click", function(event) {
  event.preventDefault();

  scrollTo("#projetos")   
})

document.querySelector("#btn4").addEventListener("click", function(event) {
  event.preventDefault();

  scrollTo("#habilidades")   
})

document.querySelector("#btn5").addEventListener("click", function(event) {
  event.preventDefault();

  scrollTo("#contato")   
})

// Sessão projetos

const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');


function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';             
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)     
}

/* typeWriter(fName); */
maisHabilidades(botaoVerMais);



// Sessão Habilidades

const servicosItens = document.querySelector('.itens-servicos');
const popup = document.querySelector('.popup-box');
const popupCloseIcon = popup.querySelector('.popup-close-icon');

servicosItens.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() == 'button'){
        const item = event.target.parentElement;
        const h2 = item.querySelector('h2').innerHTML;
        const maisConteudo = item.querySelector('.mais-conteudo').innerHTML;
        popup.querySelector('h2').innerHTML = h2;
        popup.querySelector('.popup-body').innerHTML = maisConteudo;
        popupBox();
    }
})

popupCloseIcon.addEventListener('click', popupBox);

popup.addEventListener('click', function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle('open');
}