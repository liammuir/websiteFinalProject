import react, {useState} from 'react';
import {Button} from 'antd'
import {get_quote} from './utils/QuoteManager'

const RefreshQuoteButton = ({setQuote}) => {
    return (
        <>
            <div style={{position: "absolute", bottom:20, right:20, zIndex: 1000}}>
                <Button type="primary" onClick={()=>get_quote(setQuote)}>Refresh</Button>
            </div>
        </>
    )
}

export default RefreshQuoteButton