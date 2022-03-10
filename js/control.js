const toggle =document.querySelector('.toggle'),
      input = document.querySelector('input');
      
      toggle.addEventListener("click",() =>{
          if(input.type === 'password'){
              input.type ='text';
              toggle.classList.replace("bxs-low-vision","bxs-vision");
          }else{
              input.type = 'password';
              toggle.classList.replace("bxs-vision","bxs-low-vision");
          }
      })