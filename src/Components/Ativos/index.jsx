import style from './style.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Ativos() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function getAssets() {
            const asset = await api.get(`/assets`);
            setAssets(asset.data)
        }

        getAssets()
    }, [])


    return (
        <div className={style.container}>
            {
                assets.map((ativo) => {
                    return (
                        <div className={style.CardWrap} key={ativo.id}>
                            <div>
                                <div className={style.CardImg} style={{ backgroundImage: `url(${ativo.image})` }}></div>
                                <span className={ativo.status}>{ativo.status}</span>
                                <div className={style.CardDetails}>
                                    <h2>{ativo.name}</h2>
                                    <h4>Tipo: {ativo.model}</h4>
                                    <Link to={`/empresa/ativos/${ativo.id}`}><button>Ver detalhes </button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}