import React from 'react'
import BoardToDo from '../components/boardToDo'

const Board = () => { 
    return (
      <section className="Board">
        <h2 className="mt-5 mb-3">TO DO LIST</h2>
        <BoardToDo/>
      </section>
)}

export default Board