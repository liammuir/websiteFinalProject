import './App.css';
import {Layout, Space} from 'antd';
import Navbar from './components/Navbar'
import QuoteList from './components/QuoteList'
import Footer from './components/Footer'

const {Header, Content} = Layout
function App() {
  return (
    <>
      
      <Layout>
        <Header style={{position: 'fixed', top:0, width: '100%', zIndex: 1000}}>
          <Navbar signedIn={false} style={{position: 'fixed', top: 0}}/>
        </Header>
        <Content>
          <QuoteList />
        </Content>
      </Layout>
    </>
  );
}

export default App;
