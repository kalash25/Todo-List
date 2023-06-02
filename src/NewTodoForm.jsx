import { useState } from "react"

export function NewTodoForm({onSubmit}){

    const [newItem, setnewItem] = useState("")

    const handleSubmit = function(e){
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)
   
        //clears out the input field after new item has been added
        setnewItem("")
     }

    return (
        <>
        <form onSubmit={handleSubmit} className='new-item-form'> 
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input 
          value={newItem} 
          onChange={e => setnewItem(e.target.value)} 
          type='text' 
          id='item'/>
        </div>
        <button className='btn'>Add</button>
      </form>
        </>
    )
}