import './Styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Ativos from './Components/Ativos';
import AtivoDetail from './Components/AtivoDetail';
import Unidades from './Components/Unidades';
import Usuarios from './Components/Usuarios';

import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >

              <Routes >
                <Route path="/empresa">
                  <Route path="usuarios" element={<Usuarios />} />
                  <Route path="unidades" element={<Unidades />} />
                  <Route path="ativos" element={<Ativos />} />
                  <Route path="ativos/:id" element={<AtivoDetail />} />
                </Route>
                <Route exact path="/" element={<Inicio />} />
              </Routes >

            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  )
}

export default App;
