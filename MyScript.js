const h = window.matchMedia('(min-height: 768px)');
const w = window.matchMedia('(max-width: 768px)');

const paragraphs = ['My name is Thapelo Petrick Sikhosana born In 1990 June 7.One thing I love to Do is to write code, play around With different, and Try out New libraries that come out.I am still New to programming and still have along way to go, but i dont mind doing the hard work.',
'I have been doing some few courses online, and tearching my self some New languages. Freecodecamp is one of the website that real helped me alot.It gave me a starting ground or a flour to starnd on.',
'I was introducing to programming in the year 2014 when I was doing my learnership programme, And I kind of fell in love with. At first we were introduce to java langauge, But never got the certificate for it. So I started doing some research on programming found that the are more programming langauges out the.',
'When I was doing my research online, I found c-sharp langauge which was similar to java. And found a college that offered the certificat for introduction to c# programmong langauge, which did and completed with flying colours.'];

let body = document.querySelector('body')
const screen = document.querySelector('#screen');

const close = document.createElement('button');
close.setAttribute('id', 'back')
close.innerText = 'Back';

const main = document.querySelector('#main-display');
const mainButtons = document.querySelectorAll(".display-button");

const On = () =>{
    main.style.boxShadow = '-3px 2px 0px aqua';
    main.style.transitionDuration = '1s';
    mainButtons.forEach((item) =>{
        item.style.boxShadow = '-1px 1px 0px aqua';
        item.style.transitionDution = '1s';
        
    })//end of each loop
    
}//end of on funct

const Off = () =>{
    
    main.style.boxShadow = 'none';
    main.style.transitionDuration = '1s' 
    
    mainButtons.forEach((item) =>{
        item.style.boxShadow = 'none';
        item.style.transitionDution = '1s';
})//end of each loop
}//end of off funct
    
    main.addEventListener('mouseover',On);
    main.addEventListener('mouseout', Off);
    
    mainButtons.forEach((item) =>{
        item.addEventListener('mouseover', On);
        item.addEventListener('mouseout', Off);
    })//end of each loop
    
var clicked = false;
const labels = ['Name', 'Surname', 'Age', 'Race','Nationality', 'Criminal Record', 'Marital status', 'Kids']
const answers = ['Thapelo Petrick', 'Sikhosana', '33', 'Black', 'South African', 'None', 'Single', 'None']

//starting display function
const display = () =>{
    screen.style.visibility = 'visible'
}//end of display method

//starting screen closing function
close.onclick = () =>{
    
    
    close.style.transitionDuration = '0s';
    close.style.visibility = 'hidden';
    screen.style.visibility = 'hidden';
    clicked = false;
    
    //screen.removeChild(screen.childNodes[j]);
    
    while(screen.childNodes.length != 0){
        screen.removeChild(screen.childNodes[0]);
    }//end of while loop
    
}//end of screen closing function


const services = () =>{
    
    if(!clicked){
        display()
        
        clicked = true;
        
        if(h.matches){
            
            screen.style.width = '40%';
            screen.style.height = '52%';
            
        }//end of hieght if statement
        
        else if(w.matches){
            
          screen.style.height = '70%';
            screen.style.width = '65%'
        }//end of else if statement
        
        else{
        screen.style.width = '40%';
        screen.style.height = '53%'
        }//end of else 
        
        screen.style.top = '5px';
        screen.style.left = '2%';
        
        let list = document.createElement('ol');
        list.style.color = 'white';
        screen.append(list);
        
        let arr = ['Design responsive web pages using HTML, CSS and JAVASCRIPT.', 'Build a database using POSTGRES or SQL','Use REACT ,REDUX and REACT-DOM to build UI applications.','Build frame work applications using C-SHARP (c#)',
        'Use jquery', 'use node js to build web server applications.']
        let i = 0;
        
        let item = document.createElement('li');
                item.style.marginBottom = '20px';
                item.innerText = arr[i]
                i++;
                list.append(item);
        
        let myPlay = setInterval(() =>{
            if(i < arr.length){
                
                let item = document.createElement('li');
                item.style.marginBottom = '20px';
                item.innerText = arr[i]
                i++;
                list.append(item);
                list.style.transitionDuration = '2s'
                
            }//end of if statement
            
            else{
                close.style.marginLeft = '43%';
                screen.append(close);
                close.style.visibility = 'visible';
                clearInterval(myPlay);
            }//end of else statement
            
        }, 957)
        
       //screen.append(document.querySelector('#back')) 
    }//end if clicked
    
}//end service function


const contactInfor = () =>{
    var lab = ['Email Address : pmanskhosana@gmail.com', 'Cellphone Number : 063 893 7422', 'Other Cellphone Number : 067 087 1575'];
    
    if(!clicked)
    {
        clicked = true;
        display();
        
     							if(w.matches){
     							    
     							    screen.style.left = '10%';
        screen.style.top = '12px';
     							    
     							screen.style.height = '56%';
        screen.style.width = '76%';    
     							    
     							}//end of if   
        else{
            
            screen.style.left = '30%';
        screen.style.top = '12px';
            
            screen.style.height = '43%';
        screen.style.width = '40%';
            
        }//end of else statement
        
        for(let i = 0; i < lab.length; i++){
            
           let text = document.createElement('h3')
            text.innerText = lab[i];
            text.style.color = 'white';
            text.style.marginLeft = '3%';
            screen.append(text);
            
        }//end of 4 loop
        
        close.style.visibility = 'visible';
        close.style.marginLeft = '40%';
        screen.append(close);
        
    }//end of if statement
    
}//end of contact infor function

const about = () =>{
    if (!clicked)
    {
        display();
        clicked = true;
        
        if(w.matches){
            
            screen.style.height = '97%'
            screen.style.width = '80%'
            
        }//end if 
        
        else{
        screen.style.width = '64%'
        screen.style.height = '52%';
        }//end of else
        
        screen.style.top = '2%';
        screen.style.left = '10%';
        
            for	(let i = 0; i < paragraphs.length; i++){
                
             let para = document.createElement('p');
                para.setAttribute('id', 'about')
                para.innerText = paragraphs[i];
                screen.append(para);
            }//end of 4 loop
        
        close.style.visibility = 'visible';
        close.style.marginLeft = '40%';
        screen.append(close);
    }
}//end about function

const bioInfor = () => {
    if(!clicked)
    {
        clicked = true;
    display()
        
        if(w.matches){
            screen.style.width = '56vw'
        screen.style.height = '120%'
        }
        
        else if(h.matches){
            
            screen.style.width = '56vw'
        screen.style.height = '75%'
            
        }//end of if else
        else{
            screen.style.width = '36vw'
        screen.style.height = '70%'
            
            screen.style.top = '25%';
            screen.style.left = '2%'  
        }

        
    for(let i = 0; i < labels.length; i++){
        
        let holder = document.createElement('div');
        holder.setAttribute('class', 'variable-value');
        holder.style.width = '82%'
        
        const label = document.createElement('h4');
        
        const answerLabel = document.createElement('h4');
        label.innerText = labels[i] + '   :    ';
        answerLabel.innerText = answers[i];
        holder.append(label, answerLabel);
        
        //holder.append(answerLabel);
        
        
        screen.append(holder);
        
    }//end of 4 loop
        
        close.style.visibility = 'visible';
        close.style.marginLeft = '40%'
        screen.append(close);
    }
}

//start of edu function
const edu = () =>{
if(!clicked)
    {
        display()
        clicked = true;
        
        
        if(w.matches){
            
            screen.style.width ='76%'
            screen.style.height = '82%'
            
            screen.style.top = '13px';
        screen.style.left = '15%';
        }
        else{
        screen.style.height = '53%';
        screen.style.width = '48%';
            
         screen.style.top = '180px';
        screen.style.left = '15%';
            
        }
        
        let qaulifications = ['Matric Certificate', 'Information Technology Certificate +A and +N','C# programming Certificate','Internship Programme Certificate (Technical support +A)','FreeCodeCamp Certificates']
        
    for(let i = 0; i < qaulifications.length; i++){
        
        let holder = document.createElement('div');
        holder.setAttribute('class', 'variable-value');
        
        let header = document.createElement('h4');
        header.setAttribute('class', 'education');
        
        header.innerText = qaulifications[i];
        holder.append(header);
        screen.append(holder);
        
    }//end of 4 loop	
        
        close.style.visibility = 'visible'
        close.style.marginLeft = '40%';
        screen.append(close);
        
    }// of if statement
}//end of edu function

//starting projects function
const projects = () => {
    if(!clicked)
    {
        display();
        clicked = true;
        
        let arr = ['concert','login-panel']
        let link = ['Concet/Concert.html','login/login.html']
        
        if(w.matches){
            
            screen.style.width = '58%'
            screen.style.height = '50%'
            
        screen.style.left = '10%'    
        screen.style.top = '31%';
        }
        
        else{
            
            screen.style.width = '35%';
            screen.style.height = '30%';
            
        screen.style.left = '40%';
        screen.style.top = '33%';
        }
        
        
        
        for(let i = 0; i < arr.length; i++){
            let page = document.createElement('a')
     																	let btn = document.createElement('button');
            
            page.setAttribute('class','projects-link')
            page.setAttribute('href',link[i]);
            page.style.color = 'cyan';
            page.target = "_blank";
            page.innerText = arr[i];
            
            btn.style.width = 'max-content';
            btn.style.paddingRight = '30px';
            btn.style.margin = '7px';
            btn.style.backgroundColor = 'rgb(19, 60, 67)';
            btn.append(page);
            
            screen.append(btn);
        }//end 4 loop
        
        close.style.visibility = 'visible'
        close.style.marginLeft = '40%';
        screen.append(close);
        
    }//end clicked if else
}//end of projects function

//starting 

const navBar = document.querySelector('#link-nav')

let facebook = document.querySelector('#facebook')
    let linkedin = document.querySelector('#linkedin')
    let github = document.querySelector('#github')
    
//nav or link declarition

navBar.addEventListener('mouseover', () => {
    
    facebook.style.top = '0px';
    facebook.style.transitionDelay = '1s';
    
    linkedin.style.top = '0px';
    linkedin.style.transitionDelay = '3s';
    
    
    github.style.top = '0px';
    github.style.transitionDelay = '5s';
})

navBar.addEventListener('mouseout', () => {
    
    github.style.transitionDelay = '1s';
    github.style.top = '50px';
    
    linkedin.style.transitionDelay = '3s';
    linkedin.style.top = '110px';
    
    facebook.style.transitionDelay = '5s';
    facebook.style.top = '170px';
})