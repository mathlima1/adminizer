import { Card } from 'antd';


export default function CompanyCard(props) {
    return (
        <Card>
            <h2>{props.name}</h2>
        </Card>
    )
}