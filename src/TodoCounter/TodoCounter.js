import './TodoCounter.css'
function TodoCounter({total, completed}){
  
  return(

    total == completed ?

      <h1 id='congrats'>🎉 ¡Felicidades, completaste todos los TODOS! 🎉</h1>

      :

      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    )
  }
  
  export {TodoCounter};
