import { useEffect, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import style from './style.module.scss';

export default function AtivoDetail() {
    const { id } = useParams();

    const [ativo, setAtivo] = useState([]);
    const [ativoHealthscore, setAtivoHealthscore] = useState([]);
    const [ativoLastUptimeAt, setLastUptimeAt] = useState([]);
    const [ativoMetrics, setAtivoMetrics] = useState({});
    const [ativoSpecifications, setAtivoSpecifications] = useState({});

    useEffect(() => {
        async function getAtivo() {
            const ativo = await api.get(`/assets/${id}`);
            const allHealthscore = [];
            const allDates = [];
            allHealthscore.push(ativo.data.healthscore);
            allDates.push(ativo.data.metrics.lastUptimeAt);
            setAtivo(ativo.data)
            setAtivoSpecifications({
                "power": ativo.data.specifications.power,
                "maxTemp": ativo.data.specifications.maxTemp,
                "rpm": ativo.data.specifications.rpm
            })
            setAtivoMetrics({
                "totalCollectsUptime": ativo.data.metrics.totalCollectsUptime,
                "totalUptime": ativo.data.metrics.totalUptime.toFixed()
            })
            setAtivoHealthscore(allHealthscore);
            setLastUptimeAt(allDates);

        }
        getAtivo()
    }, [id])

    const options = {
        title: {
            text: 'Healthscore'
        },
        yAxis: {
            title: {
                text: 'Saúde em %'
            },
        },
        xAxis: {
            title: {
                text: 'Data de coleta'
            },
            categories: ativoLastUptimeAt,
        },
        series: [{
            name: 'Healthscore',
            data: ativoHealthscore
        }]
    }


    return (
        <div className={style.container}>
            <div className={style.ativoInfo}>
                <div className={style.ativoInfoImage}>
                    <img src={ativo.image} alt={ativo.name} />
                    <h2>{ativo.name}</h2>
                </div>
                <div className={style.ativoInfoContent}>
                    <div>
                        <h5>Sensor:</h5>
                        <span>{ativo.sensors}</span>
                    </div>
                    <div>
                        <h5>Rotação:</h5>
                        <span>{ativoSpecifications.rpm ? ativoSpecifications.rpm : "-"} RPM</span>
                    </div>
                    <div>
                        <h5>Potência:</h5>
                        <span>{ativoSpecifications.power ? ativoSpecifications.power : "-"} KWh</span>
                    </div>
                    <div>
                        <h5>Temperatura Máxima:</h5>
                        <span>{ativoSpecifications.maxTemp ? ativoSpecifications.maxTemp : "-"}°C</span>
                    </div>
                </div>
            </div>
            <div className={style.charts}>
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
                <div className={style.doubleChart}>
                    <div>
                        <h5>Total de Coletas Uptime(Ligada)</h5>
                        <span>{ativoMetrics.totalCollectsUptime}</span>
                    </div>
                    <div>
                        <h5>Total de Horas de Coletas Uptime(Ligada)</h5>
                        <span>{ativoMetrics.totalUptime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}