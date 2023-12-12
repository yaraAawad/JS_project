window.onload = function clearF() {
    document.getElementById('display').value = '';
    }
function display(a) {
    let x=document.getElementById('display')
    x.value=x.value+a
}
function LB() {
    let x=document.getElementById('display')
    x.value=x.value+'('
}
function RB() {
    let x=document.getElementById('display')
    x.value=x.value+')'
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
function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
