import React, { useEffect, useState } from 'react';
import './css/ToDoContainer.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import CardActions from '@mui/material/CardActions'

const ToDoContainer = ({ setter, updatetable, setterForm }) => {
    const [txtId, setTxtId] = useState("")
    const [txtName, setTxtName] = useState("")
    const [txtCategory, setTxtCategory] = useState("")
    const [txtPrice, setTxtPrice] = useState("")
    const [isAvailable, setIsAvailable] = useState(false)



    const saveData = () => {
        if (txtId != "")
            setter({
                id: txtId,
                name: txtName,
                category: txtCategory,
                price: txtPrice,
                isAvailable: isAvailable
            })
        else
            setter({
                name: txtName,
                category: txtCategory,
                price: txtPrice,
                isAvailable: isAvailable
            })
        setTxtId("")
        setTxtName("")
        setTxtCategory("")
        setTxtPrice("")
        setIsAvailable("")
       
        setterForm(false)

    }

    useEffect(() => {
        if (Object.keys(updatetable).length > 0) {
            setTxtId(updatetable.id)
            setTxtName(updatetable.name)
            setTxtCategory(updatetable.category)
            setTxtPrice(updatetable.price)
            setIsAvailable(updatetable.isAvailable)
        }
    }, [updatetable])


    return (
        <div className='modal-form'>
            <Card
                component="form"
                sx={{ maxWidth: '20rem' }}>
                <CardHeader
                    title="Product CRUD"
                />


                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <input id="id"
                        type="hidden"
                        value={txtId} />
                    <TextField id="name"
                        onChange={e => setTxtName(e.target.value)}
                        value={txtName}
                        label="Name"
                        variant="outlined"
                        type="text" />
                    <TextField id="category"
                        onChange={e => setTxtCategory(e.target.value)}
                        value={txtCategory}
                        label="Category"
                        variant="outlined"
                        type="text" />
                    <TextField id="price"
                        onChange={e => setTxtPrice(e.target.value)}
                        value={txtPrice}
                        label="Price"
                        variant="outlined"
                        type='number' />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox id="isavailable"
                            onChange={e => setIsAvailable(e.target.checked)}
                            checked={isAvailable} />}
                        label="Is available: "
                        labelPlacement="start"
                    />
                </Box>
                <CardActions disableSpacing>
                    <Button
                        onClick={saveData}
                        variant="contained" >
                        <SendIcon />
                    </Button>
                </CardActions>

            </Card>
        </div>
    );
};

export default ToDoContainer;