const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const trashicon=document.querySelector('.delete');
const searchform=document.querySelector('.search');

//resusable code ko function banao for future
const generateTemplate=todo=>{
  
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
     </li>
    `;

    list.innerHTML+=html;
};

//instead hr ele ko bnate time add event listener on it
//add on full list, more efficient 
//jab bhi kuch click then check kya wo trash can tha kya
list.addEventListener('click',(e)=>{
 if(e.target.classList.contains('delete'))//apna ele hi hai pta krne ka ek rasta 
 {
  e.target.parentElement.remove();
 }
});

//enter marne pr bhi kaam krega
addForm.addEventListener('submit',e=>{

    e.preventDefault();
    const todo=addForm.add.value.trim();

    if(todo.length>0)
    {
        generateTemplate(todo);//string dunga toh html ele bnakr add krega
        addForm.reset();//ye saari input fiels ko reset krdeta hai
    }

});

// //alteratne function
// const filterTodos = (term) => {
//    //textcontent jo bhi text ho ignoring html tags woh dega ,unlike innerHTML
//     Array.from(list.children)//html collection ko array bnakr use kro
//         .filter(todo => !todo.textContent.includes(term))
//         .forEach(todo => {
//             todo.classList.add('filtered');
//             todo.classList.remove("d-flex")
//             });
 
//     Array.from(list.children)
//     .filter(todo => todo.textContent.includes(term))
//     .forEach(todo => {
//         todo.classList.remove('filtered');
//         todo.classList.add("d-flex")
//         });
// }

searchform.addEventListener('keyup',(e)=>{
   const textinside=searchform.search.value.trim().toLowerCase();
//    filterTodos(textinside);
   let arr=list.children;
   arr=Array.from(arr);//whenever a html collection traverse by converting to array or for loop
    arr.forEach((ar)=>{
        if(ar.textContent.includes(textinside))
        {
         ar.classList.add('d-flex');
         ar.classList.remove('d-none');
        }else{
         ar.classList.remove('d-flex');
         ar.classList.add('d-none');
        }
    });
});

