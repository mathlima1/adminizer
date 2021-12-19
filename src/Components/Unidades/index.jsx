import style from './style.module.scss';
import { useState, useEffect } from 'react';
import CompanyCard from "../../Components/CompanyCard";
import api from '../../services/api';


export default function Ativos() {

    const [units, setUnits] = useState([]);

    useEffect(() => {
        async function getUnits() {
            const unit = await api.get(`/units`);
            setUnits(unit.data)
        }

        getUnits()
    }, [])


    return (
        <div className={style.container}>

            <ul>
                {units.map((unidade) => {
                    return (
                        <li key={unidade.id}>
                            <CompanyCard name={unidade.name} id={unidade.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}