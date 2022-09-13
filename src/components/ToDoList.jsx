import React from 'react';
import './css/ToDoList.css'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ToDoList = ({ todoItems, deleteItem, updateItem }) => {

    const onDeleteItem = id => deleteItem(id)
    const onUpdateItem = itm => updateItem(itm)

    return (
        <ul className='todo-list'>
            {
                todoItems?.map(item => (
                    <article className='todo-item-list' key={item?.id}>
                        <ul>
                            <li>
                                <h4>ID</h4>
                                <span>{item?.id}</span>
                            </li>
                            <li>
                                <h4>NAME</h4>
                                <span>{item?.name}</span>
                            </li>
                            <li>
                                <h4>CATEGORY</h4>
                                <span>{item?.category}</span>
                            </li>
                            <li>
                                <h4>PRICE</h4>
                                <span>{item?.price}</span>
                            </li>
                            <li>
                                <h4>IS AVAILABLE</h4>
                                <span>{item?.isAvailable?'Available':'Not available'}</span>
                            </li>
                        </ul>
                        <div className='todo-item__actions'>
                            <Button variant='contained' onClick={()=>onDeleteItem(item?.id)}>
                                <DeleteIcon />
                            </Button>
                            <Button variant='contained' onClick={()=>onUpdateItem(item)}>
                                <EditIcon />
                            </Button>
                        </div>
                    </article>
                ))
            }
        </ul>
    );
};

export default ToDoList;