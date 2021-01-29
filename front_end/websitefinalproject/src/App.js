import './App.css';
import {Layout, Space,BackTop } from 'antd';
import Navbar from './components/Navbar'
import QuoteList from './components/QuoteList'
import AppFooter from './components/AppFooter'
import NewQuoteButton from './components/NewQuoteButton'
import react, {useState, useEffect} from 'react';
import {refresh} from './components/utils/UserManagement'
import { get, set } from 'js-cookie';
import {get_quote} from './components/utils/QuoteManager'
import RefreshQuoteButton from './components/RefreshQuoteButton'

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
  const [quote, setQuote] = useState({text:'No data', author: 'no data'})
  const [signedIn, setSignedIn] = useState(false)
  console.log("quote: ",quote)
  useEffect ( () => {
    refresh(setSignedIn)
    get_quote(setQuote)
  }, [])
  return (
    <div>
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} style={{position: 'fixed', top:0, width: '100%', zIndex: 1000}}/>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems: 'center', height:'90vh'}}>
        <QuoteList quote={quote}/>
      </div>
      <BackTop>
        <div style={toTopStyle}>Top</div>
      </BackTop>
      <NewQuoteButton signedIn={signedIn}/>
      <RefreshQuoteButton setQuote={setQuote}/>
    </div>
  );
}

export default App;
