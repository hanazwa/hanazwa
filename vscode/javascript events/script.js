 const p3 = dpcument.querySelector('.p3');

 function ubahWarna(){
    p3.style.backgroundColor = 'lightvlue';
 }


 const p2 = document.querySelector('.p2');
 p2.onclick = ubahWarna;




 const p4 = document.querySelector('section#b p');
 p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})
