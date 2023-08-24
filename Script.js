
const TextImage = document.querySelector('#header-image');
const pic = document.querySelector('img');
const chContainer = document.querySelector('#ch-container');
const chList = document.querySelectorAll('.ch');

TextImage.addEventListener("mouseover", ()=> {
    
    if(pic.style.transform === 'rotateY(0deg)'){
        pic.style.transform = "rotateY(90deg)";
        chContainer.style.transform = "rotateY(0deg)";
        
                for(let  i = 0; i < chList.length; i++){
            chList[i].style.transform = "rotateY(-80deg)";
        }//end 4 loop
        
      let pause = setInterval(()=> {
        for(let  i = 0; i < chList.length; i++){
            chList[i].style.transform = "rotateY(0deg)";
        }//end 4 loop
      }, 2500)
        
    }//end of if
    
    else{
        
        for(let i = 0; i < chList.length; i++){
            chList[i].style.transform = "rotateY(-85deg)";
        }//end of 4 loop
        
        let pause = setTimeout(()=>{
            
            pic.style.transform = "rotateY(0deg)";
        chContainer.style.transform = "rotateY(-90deg)";
            
        }, 3000);
    }//end of else

})


//setting up link nav
var i = 0;
const mainNav = document.querySelector('#main-nav');
const links = document.querySelectorAll('.link-buttons');

mainNav.addEventListener("mouseover", ()=>{
    
    let pause = setInterval(()=>{
        
     if(i < links.length){
        links[i].style.top = "0";
        i++;
    }
    
    else{
        clearInterval(pause)
    }
    }, 500);
})//ending mouse over function

mainNav.addEventListener("mouseout", ()=>{
    
    i--;
  let pause = setInterval(()=>{
      if(i !== -1){
          links[i].style.top = "98%";
          i--;
      }//end if
      else{
          i = 0;
          clearInterval(pause);
      }//ens else
  }, 2000)
    
});//end of mousecout function

pic.addEventListener('mouseover', (e)=>{
    let posx = e.clientX;
    
    pic.style.transition = '2s';
    
    if(posx <= 490){
        
        pic.style.transform = 'perspective(2500px) rotateY(-75deg)';
        
    }//end of if 
    
    else{
        
        pic.style.transform = 'perspective(2500px) rotateY(75deg)';
        
    }//end of if else
    
});

pic.addEventListener('mouseout', ()=>{
    
    pic.style.transition = '2s';
    pic.style.transform = 'perspective(2500px) rotateY(0deg)';
    
})
