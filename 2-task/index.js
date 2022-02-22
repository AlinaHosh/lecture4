export const merge = async() => {

  try{
    const responseUsers=await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers=await responseUsers.json();

    const responseTodos=await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonTodos=await responseTodos.json();

    const completedTodos=jsonTodos.filter(todo=>todo.completed);
  
    const merged= jsonUsers.map(user=>{
     
      return Object.assign({},user,{todo:completedTodos.filter(task=>task.userId===user.id)});
    });

    return merged;

  }catch(error){
    
    return error;
  }
};

