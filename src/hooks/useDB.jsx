import React, {useState, useEffect} from 'react';

const useDB = () => {
    const [localDB, setLocalDB] = useState([])

    
    const fetchLocalData = ()=>{
        const str_db = window.localStorage.getItem('db')
        if(str_db) setLocalDB([...JSON.parse(str_db)])
    }
    const saveLocaly = (item)=>{
        fetchLocalData()
        if(Object.keys(item).includes('id')){
            const list_updated = localDB.map(itm=>{
                if(item.id === itm.id){
                    return {
                        id:item.id,
                        name: item.name,
                        category: item.category,
                        price: item.price,
                        isAvailable: item.isAvailable
                    }
                }else{
                    return itm
                }
            })
            window.localStorage.setItem('db',JSON.stringify([...list_updated]))
        }else{
            window.localStorage.setItem('db',JSON.stringify([...localDB, {
                id: Date.now(),
                name: item.name,
                category: item.category,
                price: item.price,
                isAvailable: item.isAvailable
            }]))
        }
        fetchLocalData()
    }
    const deleteLocaly = id=>{
        fetchLocalData()
        if(localDB.length>0){
            const left_list = localDB.filter(itm => itm.id!=id)
            window.localStorage.setItem('db',JSON.stringify([...left_list]))
        }
        fetchLocalData()
    }

    useEffect(()=>fetchLocalData(),[])

    return {localDB, saveLocaly, deleteLocaly}
};

export default useDB;