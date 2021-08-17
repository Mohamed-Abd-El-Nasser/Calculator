const inputs = document.getElementById('inputs');
const clear = document.getElementById('clear');
const delet = document.getElementById('delet');
const div = document.getElementById('div');
const mul = document.getElementById('mul');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const equal = document.getElementById('equal');
const cal = document.getElementById('cal');
const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');


n0.addEventListener('click',function(){

    
    if(inputs.value =='0'){
        inputs.innerHTML = n0.value
    }else{
    inputs.innerHTML= inputs.textContent + n0.value;
    inputs.value = inputs.innerHTML;
}
})
n1.addEventListener('click',function(){

    if(inputs.value =="0"){
        inputs.textContent=' ';
        inputs.innerHTML = n1.value;
    }else{
    inputs.innerHTML= inputs.textContent +  n1.value};
     inputs.value = inputs.innerHTML;
})
n2.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n2.value
    }else{
    inputs.innerHTML= inputs.textContent + n2.value;}
    inputs.value = inputs.innerHTML;
})
n3.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n3.value
    }else{
    inputs.innerHTML= inputs.textContent + n3.value;}
    inputs.value = inputs.innerHTML;
})
n4.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n4.value
    }else{
    inputs.innerHTML= inputs.textContent + n4.value;}
    inputs.value = inputs.innerHTML;
})
n5.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n5.value
    }else{
        
    inputs.innerHTML= inputs.textContent + n5.value;}
    inputs.value = inputs.innerHTML;
})
n6.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n6.value
    }else{
    inputs.innerHTML= inputs.textContent + n6.value;}
    inputs.value = inputs.innerHTML;
})
n7.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n7.value
    }else{
    inputs.innerHTML= inputs.textContent + n7.value;}
    inputs.value = inputs.innerHTML;
})
n8.addEventListener('click',function(){

    if(inputs.value =='0'){
        inputs.innerHTML = n8.value
    }else{
    inputs.innerHTML= inputs.textContent + n8.value;}
    inputs.value = inputs.innerHTML;
})
n9.addEventListener('click',function(){

    if(inputs.value ==="0"){
        inputs.innerHTML = n9.value
    }else{
    inputs.innerHTML= inputs.textContent + n9.value;}
    inputs.value = inputs.innerHTML;
})
clear.addEventListener('click',function(){

    inputs.innerHTML=  '0';
    inputs.value='0';
})
var x;
var y;
var r;
div.addEventListener('click',function(){

    x= inputs.textContent;
    inputs.innerHTML = '0';
    inputs.value ='0';
    cal.value = '/';
    
})
mul.addEventListener('click',function(){

    x= parseInt(inputs.textContent);
    inputs.innerHTML = '0';
    inputs.value='0'
    cal.value = '*';
})
sub.addEventListener('click',function(){

    x= parseInt(inputs.textContent);
    inputs.innerHTML = '0';
    inputs.value='0';
    cal.value = '-';
})
add.addEventListener('click',function(){

    x= parseInt(inputs.textContent);
    inputs.innerHTML = '0';
    inputs.value='0';
    cal.value = '+';
})
equal.addEventListener('click',function(){

   y = parseInt(inputs.textContent);
   var l = 1;
   if(cal.value=='/'){
        r = x/y;
        inputs.innerHTML = r.toString();
   }
   if(cal.value=='*'){
    r = x*y;
    inputs.innerHTML = r;
    
 }
 if(cal.value=='-'){
    r = x-y;
    inputs.innerHTML = r;
 }
 if(cal.value=='+'){
    r = x+y;
    inputs.innerHTML = r.toString();
    
 }
 
})
if(inputs.value.length <=1){
    inputs.innerHTML='0';
}
// var e = [];
// for(var i = 0 ; i<=inputs.value.length-1;i++){
//     e[i]=inputs.value.charAt(i);
// }
delet.addEventListener('click',function(){
    
    if(inputs.value != '0' && inputs.value.length >= 1){
        
        inputs.value = inputs.textContent.slice(0,inputs.textContent.length-1);

        inputs.innerHTML = inputs.value;
        
    } if(inputs.value.length ==0){
        inputs.innerHTML='0';
        inputs.value='0';
    }
})

 console.log(inputs.value.length);
