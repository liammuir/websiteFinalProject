import './App.css';
import {Layout, Space,BackTop } from 'antd';
import Navbar from './components/Navbar'
import QuoteList from './components/QuoteList'
import AppFooter from './components/AppFooter'
import NewQuoteButton from './components/NewQuoteButton'

import react, {useState} from 'react';
const toTopStyle = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};


function App() {
  const [quote, setQuote] = useState({text:'test quote text', author: 'test user', quoteId:223920492})

  return (
    <div>
      <Navbar signedIn={false} style={{position: 'fixed', top:0, width: '100%', zIndex: 1000}}/>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems: 'center', height:'90vh'}}>
        <QuoteList quote={quote}/>
      </div>
      <BackTop>
        <div style={toTopStyle}>Top</div>
      </BackTop>
      <NewQuoteButton/>
    </div>
  );
}

export default App;
