import react from 'react'
import {Layout, Space, List} from 'antd'

const {Header} = Layout

const QuoteList = ({signedIn,quote}) => {
    console.log(quote)
    return (
        <Space direction='vertical' align='left'>
            <h2>{quote ? quote.text : <></>}</h2>
            <p>-{quote ? quote.author : <></>}</p>
        </Space>
    )
}

export default QuoteList