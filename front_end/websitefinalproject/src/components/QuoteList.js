import react from 'react'
import {Layout, Space, List} from 'antd'

const {Header} = Layout

const QuoteList = ({signedIn,quotes}) => {
    let holder = [{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244}]
    return (
        <List 
            style={{marginTop: 100, marginLeft:100,zIndex:0}}
            itemLayout="horizontal"
            dataSource={holder}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p>{item.text}</p>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    )
}

export default QuoteList