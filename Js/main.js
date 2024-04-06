const board = document.querySelector('#board');
const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
  board.append(`${key} = ${value}`);
  board.append(document.createElement("br"));
  
});


 
