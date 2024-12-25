import React, { useEffect } from 'react'
import "./Students.css"

//USESTATE
import { useState } from 'react'

//AXIOS
import axios from "axios"



const Students = () => {

    const [user, setUsers] = useState([]);

    const [editId, setEditId] = useState(null)
    const [newName, setNewName] = useState("")


    //CURRENT NAME 
    const handleEdit = (id, currentName) => {
        
        setEditId(id);
        setNewName(currentName)

    }

    //GET ALL FUNCTION

    const handleReload = async () => {

        console.log("Lista de Alunos atualizada")

        try {
            const response = await axios.get(`http://localhost:5000/api/users/getall`);
            setUsers(response.data);

        } catch (error) {
            console.log("Erro em " + error)
        }


    }


    // DELETE FUNCTION

    const handleDelete = async (id) => {
        console.log("Usuário deletado")

        try {
            await axios.delete(`http://localhost:5000/api/users/destroy/${id}`)
            setUsers(user.filter((user) => user._id !== id))

        } catch (error) {
            console.log(error)
        }

    }


    


    //Update Function
    const handleUpdate = async (e) => {

        try {
            e.preventDefault()
            await axios.put(`http://localhost:5000/api/users/update/${editId}`, {
                name: newName,
            });

            setUsers(user.map((u) => (u._id === editId ? { ...u, name: newName } : u)))

            setEditId(null);
            setNewName("");

            console.log("Usuario atualizado com sucesso")

        } catch (error) {
            console.error("Erro ao atualizar o usuário", error);
        }
    };

    // useEfect
    useEffect(() => {
        handleReload();
    }, []);


    return (

        <form className="formContainer">
            <h1>Lista de Nomes</h1>
            <br />
            <ul>
                {user.map((user) => (
                    <li key={user._id}>{user.name}

                        {editId === user._id ? (
                            <>
                                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}
                                />
                                <button onClick={handleUpdate}>Salvar</button>
                                <button onClick={() => setEditId(null)}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {user.name}
                                <button className='btn-edit' onClick={(e) => {e.preventDefault(); handleEdit(user._id, user.name)}}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-delete'
                                    onClick={async () => await handleDelete(user._id)}
                                >X</button>
                            </>

                        )}

                    </li>
                ))}
            </ul>
            <br />
            <button className="btn" type="submit" onClick={(e) => { handleReload(e) }}>Reload</button>
        </form>
    )
}

export default Students