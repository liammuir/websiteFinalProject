import react from 'react'
import {Layout, Space, List} from 'antd'

const {Header} = Layout

const QuoteList = ({signedIn,quote}) => {
    return (
        <Space direction='vertical' align='left'>
            <h2>{quote.text}</h2>
            <p>-{quote.author}</p>
        </Space>
    )
}

export default QuoteList