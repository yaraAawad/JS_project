window.onload = function clearF() {
    document.getElementById('display').value = '';
    }
function display(a) {
    let x=document.getElementById('display')
    x.value=x.value+a
}
function displayDot() {
    let x=document.getElementById('display')
    if(x.value[x.value.length-1] !='.'){
        x.value=x.value+'.'
    }
}
function LB() {
    let x=document.getElementById('display')
    x.value=x.value+'('
}
function RB() {
    let x=document.getElementById('display')
    x.value=x.value+')'
}
function power(a){
    let x=document.getElementById('display')
    x.value = Math.pow(x.value, 2);

}
function buttonClear() {
    let x=    document.getElementById('display')
    x.value=''
}
function butttonDel() {
    let x=    document.getElementById('display')
    x.value= x.value.slice(0,-1)
}
function equal(){
    let x=    document.getElementById('display')
    x.value=eval(x.value)

}
function sin(){
    let x=document.getElementById('display')
    x.value=Math.sin(x.value)
}
function cos(){
    let x=document.getElementById('display')
    x.value=Math.cos(x.value)
}
function tan(){
    let x=document.getElementById('display')
    x.value=Math.tan(x.value)
}
