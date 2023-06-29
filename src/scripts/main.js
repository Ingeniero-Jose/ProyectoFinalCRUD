//CREACION DE CRUD

//FUNCIONES
const crearTarea = (event) => {
  event.preventDefault();
  const tarea = document.getElementById("tarea").value;
  const descripcion = document.getElementById("descripcion").value;
  const tareasTODO = {
     tarea,
     descripcion,
  };

  if (localStorage.getItem("todoList") === null){
     //Se crea un arreglo(ARRAY)
     let todoList = [];

     //Mandar mi tarea al array
     todoList.push(tareasTODO);

     //Guardar la lista en el localStorage
     localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
     let todoList = JSON.parse(localStorage.getItem("todoList"));

     //Añadir el nuevo elemento a la lista
     todoList.push(tareasTODO);

   //Volveremos a guardar la lista en el localStorage
 localStorage.setItem("todolist", JSON.stringify(todoList));

  }

  //Aqui vamos a limpiar nuestro formulario
  document.getElementById("tarea").value = "";
  document.getElementById("descripcion").value = "";

  renderTodoList();
};

//Funcion para leer en el localStorage
const renderTodoList = () => {
  const todoList = JSON.parse(localStorage.getItem("todoList"));
  console.log(JSON.parse(localStorage.getItem("todoList")));
  todoList.forEach((task) => {
     const tarea = task.tarea;
     const descripcion = task.descripcion;

     document.getElementById("tasks").innerHTML += `
     <tr>
     <td>#</td>
     <td>${tarea}</td>
     <td>${descripcion}</td>
     <td>
     <button class ="button is-warning is-mall">Actualizar</button>
     <button class ="button is-danger is-mall">Eliminar</button>
     </td>
     </tr>
     `;
     
  });
};
renderTodoList();