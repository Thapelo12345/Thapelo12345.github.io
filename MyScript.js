var windowSize = window.matchMedia("(max-width: 500px)")
const paragraphs = ['My name is Thapelo Petrick Sikhosana born In 1990 June 7.One thing I love to Do is to write code, play around With different, and Try out New libraries that come out.I am still New to programming and still have along way to go, but i dont mind doing the hard work.',
'I have been doing some few courses online, and tearching my self some New languages. Freecodecamp is one of the website that real helped me alot.It gave me a starting ground or a flour to starnd on.',
'I was introducing to programming in the year 2014 when I was doing my learnership programme, And I kind of fell in love with. At first we were introduce to java langauge, But never got the certificate for it. So I started doing some research on programming found that the are more programming langauges out the.',
'When I was doing my research online, I found c-sharp langauge which was similar to java. And found a college that offered the certificat for introduction to c# programmong langauge, which did and completed with flying colours.'];

let body = document.querySelector('body')

let screen2 = document.createElement('div');
screen2.setAttribute('id','contact-screen');
    

var clicked = false;
const labels = ['Name', 'Surname', 'Age', 'Race','Nationality', 'Criminal Record', 'Marital status', 'Kids']
const answers = ['Thapelo Petrick', 'Sikhosana', '33', 'Black', 'South African', 'None', 'Single', 'None']

const screen = document.querySelector('#screen');

const display = () => {
    screen.style.visibility = 'visible'
}//end of display method


const back = () => {
    
    screen.style.visibility = 'hidden';
    screen2.style.visibility = 'hidden';
    
    clicked = false;
    
    for(let j = screen.childNodes.length - 1; j > 1; j--)
    {
        screen.removeChild(screen.childNodes[j]);
    }//end of first 4 loop
    
    for(let j = screen2.childNodes.length - 1; j > 1; j--)
    {
        screen.removeChild(screen2.childNodes[j]);
    }//end of second 4 loop
    
    
}//end of back function

const bioInfor = () => {
    if(!clicked)
    {
        clicked = true;
    display()
         
    for(let i = 0; i < labels.length; i++){
        
        let holder = document.createElement('div');
        holder.setAttribute('class', 'variable-value');
        holder.style.width = '85%'
        screen.style.width = '55vw'
     
        const label = document.createElement('h4');
        const answerLabel = document.createElement('h4');
        label.innerText = labels[i] + '   :    ';
        answerLabel.innerText = answers[i];
        holder.append(label, answerLabel);
        //holder.append(answerLabel);
        
        
        screen.append(holder)
    }
    }
}

const contactInfor = () => {
    var lab = ['Email Address : pmanskhosana@gmail.com', 'Cellphone Number : 063 893 7422', 'Other Cellphone Number : 067 087 1575'];
    
    
    if(!clicked)
    {
        clicked = true;
        screen2.style.visibility = 'visible';
        
        for(let i = 0; i < lab.length; i++){
            let text = document.createElement('h3');
            //text.setAttribute('class','variable-value')
            
            text.innerText = lab[i];
            screen2.append(text);
        }//end of 4 loop
        
        let close = document.createElement('button');
        close.setAttribute('id', 'close-back');
        close.innerText = 'Back';
        close.onclick = () => {
            
            screen2.style.visibility = 'hidden';
            clicked = false;
            
            while(screen2.firstChild){
                screen2.removeChild(screen2.firstChild)
            }//end of while loop
        }//end of inline function
        
        screen2.append(close)
        body.append(screen2);
        
    }
}//end of contact infor function



const about = () => {
    if (!clicked)
    {
        display();
        clicked = true;
        
            for	(let i = 0; i < paragraphs.length; i++){
                
                
             let para = document.createElement('p');
                para.setAttribute('id', 'about')
                let liner = document.createElement('br');
                para.innerText = paragraphs[i];
                screen.append(para);
                screen.append(liner);
                
            }
    }
}//end about function

const service = () => {
    if(!clicked){
        display()
        
        clicked = true;
        
        let arr = ['Design responsive web pages using HTML, CSS and JAVASCRIPT.', 'Build a database using BASH SHELL and POSTGRES','Use REACT and REDUX to build working applications.','Build frame work applications using C-SHARP (c#)']
        
        for(let i = 0; i < arr.length; i++){
            
            let holder = document.createElement('div');
        holder.setAttribute('class', 'variable-value');
   
            
            let Text = document.createElement('h4');
            Text.innerText = arr[i];
            
            holder.append(Text);
            screen.append(holder);
        }//end of 4 loop
        
    }//end if clicked
}//end service line function

//start of edu function
const edu = () => {
    if(!clicked)
    {
        display()
        clicked = true;
        
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
    }// of if statement
}//end of edu function

//starting projects function
const projects = () => {
    if(!clicked)
    {
        display();
        clicked = true;
        
        let arr = ['concert']
        let link = ['Concet/Concert.html']
        
        if(windowSize.matches)
        screen.style.width = '50%'
        
        else
        screen.style.width = '20%';
        
        for(let i = 0; i < arr.length; i++){
            let page = document.createElement('a')
    
            page.setAttribute('class','projects-link')
            page.setAttribute('href',link[i]);
            page.target = "_blank";
            page.innerText = arr[i];
            
            screen.append(page);
        }//end 4 loop
        
    }//end clicked if else
}//end of projects function

//starting 

const navBar = document.querySelector('nav')

let facebook = document.querySelector('#facebook')
    let linkedin = document.querySelector('#linkedin')
    let github = document.querySelector('#github')
    
//nav or link declarition

navBar.addEventListener('mouseover', () => {
    
    facebook.style.top = '0px';
    facebook.style.transitionDelay = '0s';
    
    linkedin.style.top = '0px';
    linkedin.style.transitionDelay = '2s';
    
    
    github.style.top = '0px';
    github.style.transitionDelay = '4s';
})

navBar.addEventListener('mouseout', () => {
    
    github.style.transitionDelay = '0s'
    github.style.top = '50px';
    
    linkedin.style.transitionDelay = '2s';
    linkedin.style.top = '110px'
    
    facebook.style.transitionDelay = '4s';
    facebook.style.top = '170px';
});
