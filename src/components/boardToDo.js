import React , { useState } from "react";
import ToDoItem from './toDoItem';

function BoardToDo() {
    const [list, setList] = useState([{'id':1,'title': 'Título 1', 'description': 'Algo 1', 'status': 1},
    {'id':2,'title': 'Título 2', 'description': 'Algo 2', 'status': 1},
    {'id':3,'title': 'Título 3', 'description': 'Algo 3', 'status': 1}]);

    const checkItem = (id) => {
        let newArray = list;
        const index = list.findIndex(element => {
            return element.id === id
        });
        list[index].status = 2;
        setList([...newArray]);
    }

    const deleteItem = (id) => {
        let newArray = list;
        const index = list.findIndex(element => {
            return element.id === id
        });
        newArray.splice(index,1);
        setList([...newArray]);
    }

    return (
      <div className="container">
          <div className="row">
              { list.map(element =>(
                  <div key={element.id}> 
                    <ToDoItem 
                    id={element.id} 
                    title={element.title} 
                    description={element.description} 
                    status={element.status} 
                    functionCheck={checkItem}
                    functionDelete={deleteItem}/>
                  </div>
              ))}
          </div>
      </div>
    );
  }
  
  export default BoardToDo;