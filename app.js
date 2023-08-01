/* Ex1 */
function pair(){
let p=prompt('Donner un nombre');
if (p%2==0)
{ console.log(p,'est un nombre pair');}
else
{ console.log(p,'est un nombre impair'); }
}

/* Ex2*/
function positive(){
let p=prompt('Donner un nombre');
if (p>=0)
{ console.log('True');}
else
{ console.log("False"); }
}
/* Ex3*/
function max(){
    let nb1=prompt('Donner un nombre');
    let nb2=prompt('Donner un autre nombre');
    if (nb1>nb2)
    { console.log(nb1,'est le max');}
    else
    { console.log(nb2,"est  le max"); }
    }
/* Ex4*/
function moy(){
 let nb1=prompt('Donner un nombre');
 let nb2=prompt('Donner un autre nombre');
 let nb3=prompt('Donner un 3eme nombre');
 let m=(nb1+nb2+nb3)/3
 console.log(m,"est  le moyenne du 3 nombres");
    
    }
/* Ex5*/
function c2f(){
 let x=prompt('Donner un nombre');
 let c=(9/5)*x+32;
    console.log(c,"est c2f");
}
/* Ex6*/
function areaRect(){
    let w=prompt('entre width');
    let L=prompt('entre height ')
    let a=w*L;
       console.log(a,"est la surface de rectangle ");
   }
/* Ex6*/
function fact(){
let nb=prompt('Donner un nombre');
let f=1;
for (let i=1; i<=nb;i++)
{
  f=f+1;  
}
       console.log(f,"est le nombre fact de ",nb);
   }

   pair();
   positive();
   max();
   moy();
   c2f();
   areaRect();
   fact();