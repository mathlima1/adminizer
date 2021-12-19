import styles from './style.module.scss';
import api from "../../services/api";
import CompanyCard from "../../Components/CompanyCard";

import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function Inicio() {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        async function getCompanies() {
            const companies = await api.get(`/companies`);
            setCompanies(companies.data)
        }
        getCompanies()
    }, [])

    return (
        <div className={styles.container}>
            <header>
                <h2>Escolha a empresa</h2>
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}

                >
                    Adicionar outra empresa
                </Button>
            </header>
            <ul>
                {companies.map((company) => {
                    return (
                        <li key={company.id}>
                            <CompanyCard name={company.name} id={company.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}