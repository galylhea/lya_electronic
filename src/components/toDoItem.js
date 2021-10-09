import React from 'react';
function ToDoItem({id,title, description, status, functionCheck, functionDelete}) {
    return (
        <div className="card mb-3">
            <div className={`card-header ${status === 1 ? '' : 'bg-info'}`}>
            {status === 1 ? 'Pendiente' : 'Realizado'}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="content-buttons">
                <button type="button" className="btn btn-primary" onClick={() =>
                        functionCheck(id)
                    }>Marcar como realizado</button>
                {/* <button type="button" className="btn btn-success" onClick={() =>
                          editItem(id)
                        }>Editar</button> */}
                <button className="btn btn-danger" onClick={() =>
                          functionDelete(id)
                        }>Eliminar</button>
                        </div>
            </div>
        </div>
    );
  }
  
  export default ToDoItem;