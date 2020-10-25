var ul = document.querySelector('#wrap ul');
var lis = document.querySelectorAll('li');
var btn = document.querySelectorAll('#wrap .cloase');
var last = null;
setTimeout(function(){
    ul.className='';
},200)

lis.forEach(function(ele,index){
    ele.onclick = function(){
        ul.setAttribute('id','activeWrap');
        last && (last.className = '');
        this.className = 'active';
        last = this;
    }
    btn[index].onclick = function(ev){
        ul.removeAttribute('id');
        lis[index].className = "";
        last = null;
        ev.cancelBubble = true;
    }
})