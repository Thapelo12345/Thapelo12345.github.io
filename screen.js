const w = window.matchMedia('(max-width: 768px)');
const h = window.matchMedia('(min-height: 768px)');

var clicked = false;

const body = document.querySelector('body');

const screen = document.createElement('div');
const label = document.createElement('h3');
const back = document.createElement('button')

screen.style.backgroundColor = 'rgba(75,100, 220, 0.5)';
screen.style.position = 'absolute';
screen.style.borderRadius = '6%';
screen.style.transition = '2s';
screen.style.zIndex = '1';
screen.style.boxShadow = '-4px 10px 25px white';
screen.style.width = '0';
screen.style.height = '0';
screen.style.overflowY = 'auto';

label.innerText = 'Label';
label.fontFamily = 'myfont';
label.style.position = 'relative';
label.style.top = '0';
label.style.bottom = '3%';
label.style.marginTop = '0';
label.style.padding = '5px';
label.style.borderRadius = '6%';
label.style.color = 'red';
label.style.textAlign = 'center';
label.style.backgroundImage = 'linear-gradient(to bottom, white, aqua, rgba(0,0,0,0.1))';

screen.append(label);


back.style.backgroundImage = 'linear-gradient(0deg, rgba(0,0,0,0.1), aqua, white)';
back.innerText = 'Back';
back.style.width = 'auto';
back.style.marginLeft = '50%';
back.style.marginTop = '3%';
back.style.marginBottom = '2%';


if(h.matches){
    
    back.style.width = '17%';
    back.style.height = '12%';
}//end of if

else{
back.style.width = '15%';
back.style.height = '10%';
}//end of else 

back.style.border = 'none';
back.style.borderRadius = '6%';

if(h.matches){
    back.style.fontSize = '2.5em';
}//end of if

else{
    
    back.style.fontSize = '1em';
    
}//end of else

back.onclick = () =>{
    
        while(screen.childNodes.length != 1){
        screen.removeChild(screen.childNodes[1]);
    }//end of while loop
    
    screen.style.width = '0';
    screen.style.height = '0';
    
        let pause1 = setTimeout(()=>{
    
        screen.remove();
        clearTimeout(pause1);
            clicked = false;
    
    }, 1000);
    
    
}//end back function

//start Service funct

const service = () =>{
    
    if(!clicked){
        
        clicked = true;
        
        label.innerText = 'Services'
        
        let arr = ['Design responsive web pages using HTML, CSS and JAVASCRIPT.', 'Build a database using POSTGRES or SQL','Use REACT ,REDUX and REACT-DOM to build UI applications.','Build frame work applications using C-SHARP (c#)',
        'use jquery', 'use node js to build web server applications.']
        
    let pause = setTimeout(() => { 
        
        if(w.matches){
            
            screen.style.width = '75%'
        screen.style.height = '47%';
            
        }//end of if
        
        else if(h.matches){
            
            screen.style.width = '65%';
            screen.style.height = '33%';
            
        }// end of if else
        
        else{
            
        screen.style.width = '45%'
        screen.style.height = '85%';
            
        }//end of else
        
        clearTimeout(pause);
        
    }, 250);
        
        
        //add services to screen
        
        screen.style.top = '5%';
        screen.style.left = '5%';
        
        let list = document.createElement('ul');
        
        for(let i = 0; i < arr.length; i++){
            let head = document.createElement('li');
            
            head.innerText = arr[i];
            head.style.paddingLeft = '15px';
            head.style.color = 'white';
            head.style.backgroundSize = '1em';
            head.style.margin = '3%';
            head.style.textShadow = '1px 1px 0px black';
            head.style.position = 'relative';
            
            if(h.matches){
                head.style.fontSize = '2em';
            }//end of if
            
            list.append(head);
            
        }//end of 4 loop
        
        screen.append(list);
        screen.append(back);
        body.append(screen);
        
    }//end if
}// end of services function

 
const contacts = () =>{
    
    if(!clicked){
        
        clicked = true;
       // screen.append(label);
        
        label.innerText = 'Contacts';
        
       let arr = ['Email Address : pmanskhosana@gmail.com', 'Cellphone Number : 063 893 7422', 'Other Cellphone Number : 067 087 1575'];
        
        if(w.matches){
            
            screen.style.top = '3%';
        screen.style.left = '18%';
        }//end of if
        
        else{
        screen.style.top = '5%';
        screen.style.left = '28%';
        }//end of else
        
        let pause = setTimeout(() => { 
        
            if(w.matches){
                
                screen.style.width = '71%'
        screen.style.height = '34%';
                
            }//end of if
            
            else if(h.matches){
                
                
                screen.style.width = '61%';
                screen.style.height = '24%';
                
            }// end of if else
            
            else{
        screen.style.width = '45%'
        screen.style.height = '64%';
                
            }//end of else
            
            clearTimeout(pause);
        
    }, 250) ;
        
        for(let i = 0; i < arr.length; i++){
            
            let  head = document.createElement('h5');
            head.innerText = arr[i];
            head.style.color = 'white';
            head.style.textShadow = '1px 1px 0px black';
            
            if(h.matches){
                
                head.style.fontSize = '2em';
            }//end of if
            
            else{
            head.style.fontSize = '1em';
            }//end of else
            head.style.marginLeft = '5px';
            
            screen.append(head);
            
        }//end of 4 loop
        
        screen.append(back);
        body.append(screen);
        
    }//end of if
}// end of contacts function


const about = ()=>{
    
    if(!clicked){
        
        clicked = true;
        //screen.append(label);
        
        label.innerText = 'About';
        
        if(w.matches){
            
                    screen.style.top = '3%';
        screen.style.left = '5%';
        }//end of if
        
        else if(h.matches){
            
            screen.style.top = '2%';
            screen.style.left = '2%';
            
        }// end of if else
        
        else{
        screen.style.top = '5%';
        screen.style.left = '15%';
            
        }//end of else
        
        let pause = setTimeout(() => { 
        
            if(w.matches){
                
                screen.style.width = '90%';
                screen.style.height = '65%';
                
            }//end of if
            
            else if(h.matches){
                
                screen.style.width = '87%';
                screen.style.height = '47%';
                
            }// end of if else
            
            else{
        screen.style.width = '65%'
        screen.style.height = '75%';
                
            }//end of else
            
            clearTimeout(pause);
        
    }, 250) ;
        
        
        const arr = ['My name is Thapelo Petrick Sikhosana born In 1990 June 7.One thing I love to Do is to write code, play around With different, and Try out New libraries that come out.I am still New to programming and still have along way to go, but i dont mind doing the hard work.',
'I have been doing some few courses online, and tearching my self some New languages. Freecodecamp is one of the website that real helped me alot.It gave me a starting ground or a flour to starnd on.',
'I was introducing to programming in the year 2014 when I was doing my learnership programme, And I kind of fell in love with. At first we were introduce to java langauge, But never got the certificate for it. So I started doing some research on programming found that the are more programming langauges out the.',
'When I was doing my research online, I found c-sharp langauge which was similar to java. And found a college that offered the certificat for introduction to c# programmong langauge, which did and completed with flying colours.'];

        for(let i = 0; i < arr.length; i++){
            
            let para = document.createElement('p');
            para.innerText = arr[i];
            para.style.color = 'white';
            para.style.textShadow = '1px 1px 0px black';
            para.style.margin = '5px';
            
            if(h.matches){
                
                para.style.fontSize = '2em';
                
            }//end of if	
            screen.append(para);
        }//end of 4 loop
        
        screen.append(back);
        body.append(screen);
        
    }//end of if
    
}//end of about function

const bio =() =>{
    
    if(!clicked){
        
        clicked = true;
        
       // screen.append(label);
        label.innerText = 'BIO';
        
        let pause = setTimeout(() => { 
            
            if(w.matches){
                
                screen.style.width = '89%';
        screen.style.height = '55%';
                
            }//end of if
            
            else if(h.matches){
                
                screen.style.width = '79%';
                screen.style.height = '35%';
                
            }// end of if else
            
            else{
                screen.style.width = '45%';
        screen.style.height = '85%';
                
            }//end of else
        
            clearTimeout(pause);
            
    }, 250) ;
        
        screen.style.top = '10%';
        screen.style.left = '7%';
        
        let labels = ['Name', 'Surname', 'Age', 'Race','Nationality', 'Criminal Record', 'Marital status', 'Kids']
        let answers = [' : Thapelo    Petrick', ' : Sikhosana', ' : 33', ' : Black', ' : South African', ' : None', ' : Single', ' : None']

        let table = document.createElement('table');
        table.style.marginLeft = '20%';
        table.style.borderCollapse = 'separate';
        table.style.borderSpacing = '15px';
        
        for(let i = 0; i < labels.length; i++){
            let row = document.createElement('tr');
            row.style.margin = '5%';
            
            let cell1 = document.createElement('td');
            cell1.style.color = 'white';
            cell1.style.textShadow = '1px 1px 0px black';
            
            cell1.style.boxShadow = '-2px 1px 31x white';
            cell1.style.height = '15%';
            
            let cell2 = document.createElement('td');
            cell2.style.color = 'white';
            cell2.style.textShadow = '1px 1px 0px black';
            
            cell2.style.boxShadow = '-2px 1px 0px white'
            cell2.style.height = '15%';
            
            if(h.matches){
                
                cell1.style.fontSize = '2em';
                cell2.style.fontSize = '2em';
                
            }//end of if
            
            else{
                
                cell1.style.fontSize = '1em';
                cell2.style.fontSize = '1em';
                
            }//end of else
            
            cell1.innerText = labels[i];
            cell2.innerText = answers[i];
            
            row.append(cell1, cell2);
            table.append(row);
        }//end of 4 loop
        
        screen.append(table);
        screen.append(back);
        
        body.append(screen);
    }//end of if
    
}//end of bio function

const edu = ()=>{
    
    if(!clicked){
        
        clicked = true;
        
        label.innerText = 'Education';
        
        let arr = ['Matric Certificate', 'Information Technology Certificate +A and +N','C# programming Certificate','Internship Programme Certificate (Technical support +A)','FreeCodeCamp Certificates']

        screen.style.top = '17%';
        screen.style.left = '5%';
        
        let pause = setTimeout(()=>{
            
            if(w.matches){
                
                screen.style.width = '85%';
                screen.style.height = '46%'
                
            }//end of if
            
            else if(h.matches){
                
                screen.style.width = '85%';
                screen.style.height = '32%'
                
            }// end of if else
            
            else{
            screen.style.width = '45%';
            screen.style.height = '75%';
                
            }//end else 
            
            clearTimeout(pause);
            
        }, 250);
        
        for(let i = 0; i < arr.length; i++){
            
            let head = document.createElement('h5')
            head.innerText = arr[i];
            
            if(h.matches){
                
                head.style.fontSize = '2em';
                
            }//end of if
            
            else{
                
            head.style.fontSize = '1em';
                
            }//end of else
            
            head.style.color = 'white';
            head.style.textShadow = '1px 1px 0px black';
            head.style.marginLeft = '8px';
            
            screen.append(head);
            
        }//end of 4 loop
        
        screen.append(back);
        body.append(screen);
        
    }//end of if
    
}//end of education function

const project = ()=> {
    if(!clicked)
    {
        
        clicked = true;
        label.innerText = 'projects links';
        
        let arr = ['concert','login-panel']
        let link = ['Concet/Concert.html','login/login.html']
        
        if(w.matches){
            
          screen.style.left = '20%';
            screen.style.top ='28%';
            
        }//end of if
        
        else if(h.matches){
            
            screen.style.left = '10%';
            screen.style.top = '25%';
            
        }// end of if else
        
        else{
        screen.style.left = '40%';
        screen.style.top = '33%';
        }//end of else
        
        let pause = setTimeout(()=>{
            
            if(w.matches){
            
            screen.style.width = '65%';
            screen.style.height = '27%';
                
            }//end of if
            
            else if(h.matches){
                
                screen.style.width = '58%';
                screen.style.height = '17%';
                
            }// end of if else
            
            else{
            screen.style.width = '27%';
            screen.style.height = '46%';
                
            }//end of else
            
            clearTimeout(pause);
            
        }, 250);
        
        for(let i = 0; i < arr.length; i++){
            let page = document.createElement('a');
     																	let btn = document.createElement('button');
            
            page.setAttribute('href',link[i]);
            page.style.color = 'white';
            page.style.textDecoration = 'none';
            
            if(h.matches){
                
                page.style.fontSize = '2.8em';
                
            }//end of if
            
            else{
            page.style.fontSize = '1.7em';
                
            }//end of else
            
            page.style.textShadow = '1px 1px 0px black'
            page.target = "_blank";
            page.innerText = arr[i];
            
            
            btn.style.width = 'max-content';
            btn.style.paddingRight = '30px';
            btn.style.margin = '7px';
            btn.style.backgroundColor = 'rgba(1, 60, 207, 0.1)';
            btn.style.border = '2px solid rgba(250, 250, 250, 0.3)';
            btn.style.borderRadius = '6%';
            btn.style.boxShadow = '1px 4px 5px aqua';
            btn.style.width = '59%';
            btn.append(page);
            
            screen.append(btn);
        }//end 4 loop
        
        screen.append(back);
        body.append(screen);
    }//end clicked if else
    
}//end of projects function