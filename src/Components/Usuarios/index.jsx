import style from './style.module.scss';
import { useState, useEffect } from 'react';
import CompanyCard from "../../Components/CompanyCard";
import api from '../../services/api';


export default function Ativos() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const user = await api.get(`/users`);
            setUsers(user.data)
        }

        getUsers()
    }, [])

    return (
        <div className={style.container}>

            <ul>
                {users.map((usuario) => {
                    return (
                        <li key={usuario.id}>
                            <CompanyCard name={usuario.name} id={usuario.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}