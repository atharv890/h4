guestlist=[];
function submit(){
 var a= document.getElementById("jk").value;
 guestlist.push(a);
document.getElementById("bo").innerHTML=guestlist;
console.log(guestlist);
}
function hi(){
guestlist.sort();
document.getElementById("fg").innerHTML=guestlist;
console.log(guestlist);
}