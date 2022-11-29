let listItem=document.querySelector('ul');

listItem.addEventListener('click',(e)=>{

    if(e.target.style.background== "red"){

        e.target.style.background="white"

    }else{

        e.target.style.background="red"

    }

})
