import { Link } from 'react-router-dom';

import { Layout, Menu, } from 'antd';
import { SettingOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export default function Sidebar() {

    return (
        <Sider width={300} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ width: '300px', minHeight: '100vh', height: '100%', borderRight: 0, padding: '20px', position: 'fixed' }}
            >
                <Menu.Item key="1" icon={<SettingOutlined />}><Link to={`/empresa/ativos`}>Ativos </Link></Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />}><Link to={`/empresa/unidades`}>Unidades</Link></Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}><Link to={`/empresa/usuarios`}>Usuarios</Link></Menu.Item>

            </Menu>
        </Sider >
    )
}