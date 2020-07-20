/*--1--*/
function hello(){
    document.getElementById("hello").innerHTML = "Hello World!";
}

/*--2--*/
function enterName(){
    let x = document.getElementById('name').value;
    document.getElementById("first").innerHTML = "Hello" + " "+x;
}

/*--3--*/
function enName(){
    let x = document.getElementById('name1').value;
    if( x === 'Alice' || x === 'Bob'){
       document.getElementById('second').innerHTML = "Hello" + " "+x;
       }else
           document.getElementById("second").innerHTML = "";
}

/*--4--*/
function sum(){
    let x = document.getElementById('number').value;
    let s = 0;
    for(let i = 0; i<=x; i++){
        s += i;
    }
    document.getElementById('third').innerHTML = "Total Sum is" + " "+ s;
}

/*--5--*/
function sum1(){
    let x = document.getElementById('number1').value;
    let s = 0;
    for(let i=0; i<=x; i++){
        if(i%3 == 0 || i%5 == 0){
           s += i;
        }
    }
    document.getElementById('four').innerHTML = "Total Sum is" + " "+ s;  
}

/*--6--*/
function sum2(){
    let x = document.getElementById('number2').value;
    let s = 0;
    
    for(let i = 0; i<=x; i++){
        s += i;
    }
    document.getElementById('five').innerHTML = "Total Sum is" + " "+ s;
}
function prod(){
    let p = 1;
    let x = document.getElementById('number2').value;
    for(let j=1; j<=x; j++){
        p *= j;
    }
    document.getElementById('five').innerHTML = "Total Product is" + " "+ p;
}

/*--7--*/
function mult(){
    let p;
    let m = "";
    let x = document.getElementById('number3').value;
    for(let j=1; j<=10; j++){
        p = x*j;
        m += x + "*" + j+":" + p + "<br/>";
    }
    document.getElementById('six').innerHTML = m;
}

/*--8--*/
function prime(){
    let k, n = 0;
    let p = '';
    
    let x = document.getElementById('number4').value;
    if(x<=0){
        document.getElementById('seven').innerHTML = 'Input Number is not valid..!';
    }else{
        for(let i=0; i<=x; i++){
            let c = 0;
            for(let n = i; n>=1; n--){
                if(i%n == 0){
                    c++;
                }
            }
            if(c == 2){
                p += i + ", ";
            }
        }
        
        document.getElementById('seven').innerHTML = p;
    }
    
}

/*--10--*/
function leap(){
    let x = document.getElementById('number5').value;
    let c =0;
    let y = '';
    while(c!=20){
        
        if((x%4 == 0 && x%100 != 0) || x%400 == 0){
            y += x + ", ";
            c++;
        }
        x++;
    }
    document.getElementById('eight').innerHTML = y;
}

/*--11--*/
console.log('Ex-11:');
function largestElement(l){
    
    max = Math.max(...l);
    return max;
}
let m = [1,3,25,11,8];
console.log(m);
console.log(largestElement(m) + ' largest element in list');

/*--12--*/
console.log('Ex-12:');
function reverseList(l){
    l.reverse();
    return l;
}
console.log(reverseList(m) + ' Reversing of a list');

/*--13--*/
console.log('Ex-13:');
function findElement(n){
    let i = m.includes(n);
    return i;
}
console.log(findElement(11) + ' : It is present in list');

/*--14--*/
console.log('Ex-14:');
function oddElement(l){
    let k = [];
    for(let i=0; i<l.length; i++){
        if(i%2==0){
            k.push(l[i]);
        }
    }
    return k;
}
console.log(oddElement(m) + ' Odd Element list');

/*--15--*/
console.log('Ex-15:');

function running(l){
    let t = [];
    l.reduce((a,c,i) => t[i]=a+c, 0);
    return t;
}

console.log(running(m) + ' : total of list');

/*--16--*/
console.log('Ex-16:');
function palindrome(str){
    let revstr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase()===revstr;
}
console.log(palindrome('Naman') + ' : This is palindrome');

/*--17--*/
console.log('Ex-17:');

function sumUsingFor(l){
    let s = 0;
    for(let i=0; i<l.length; i++){
        s += l[i];
    }
    return s;
}
function sumUsingWhile(l){
    let s = 0;
    let i = 0;
    while(l[i]){
        s += l[i];
        i++;
    }
    return s;
}
function sumUsingRecursion(l){
    return l.pop() + sumUsingRecursion(l);
}
console.log(sumUsingWhile(m) + " : Sum using Recursion");
console.log(sumUsingWhile(m) + " : Sum using While Loop");
console.log(sumUsingFor(m) + " : Sum using For Loop");

/*--18--*/

function perfectSquare(){
    let a = '';
    let s = document.getElementById('number6').value;
    let e = document.getElementById('number7').value;
    for(let i = s; i<=e; i++){
        let n = Math.sqrt(i);
        if((n-Math.floor(n)) === 0){
            a += i + ' '; 
        }
    }
    document.getElementById('nine').innerHTML = a;
}
/*--19--*/
console.log('Ex-19:');
function concateLists(l1,l2){
    return l1.concat(l2);
}
n = ['a','b','c'];
console.log(concateLists(m,n) + ' Merging of lists');

/*--20--*/
console.log('Ex-20:');
function concateAlter(l1,l2){
    l = Math.min(l1.length, l2.length);
    let l3 = [];
    for(let i=0;i<l;i++){
        l3.push(l1[i],l2[i]);
    }
    l3.push(...l1.slice(l), ...l2.slice(l));
    return l3;
}
console.log(concateAlter(m,n) + ' Alternate Merging of List');

/*--21--*/
console.log('Ex-21:');
function sortList(l1,l2){
    let l3 = l1.sort().concat(l2.sort());
    l3.sort(function(a,b){return a-b});
    return l3;
}
m1 = [4,9,6,70];
console.log(sortList(m,m1) + ' Sorted List');

/*--22--*/
console.log('Ex-22:');
function rotateElements(l,r){
    let s = [];
    for(let i=r; i<l.length; i++){
        s.push(l[i]);
    }
    for(let i=0; i<r; i++){
        s.push(l[i]);
    }
    return s;
}
console.log(rotateElements(n,2));

/*--23--*/
function fibonacci(){
    let num = document.getElementById('number8').value;
    let l = '';
    let n1 = 1,n2 = 1,n3;
    l = n1 + ' ' + n2;
    for(let i=2; i<num; i++){
        n3 = n1 + n2;
        l += ' ' + n3;
        n1 = n2;
        n2 = n3;
    }
    document.getElementById('ten').innerHTML = l;
}

/*--30--*/
function conversion(){
    let str = document.getElementById('text4').value;
    let l1 = str.split(' ');
    for(let i=0; i<l1.length; i++){
        let c = l1[i].charAt(0);
        l1[i] = l1[i].slice(1) + c + 'ay';
    }
    document.getElementById('eleven').innerHTML = l1.join(" ");
}