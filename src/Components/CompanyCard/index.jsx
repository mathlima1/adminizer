import { Card } from 'antd';
import { Link } from 'react-router-dom'


export default function CompanyCard(props) {
    return (
        <Link to={`/empresa/ativos`}>
            <Card>
                <h2>{props.name}</h2>
            </Card>
        </Link>
    )
}