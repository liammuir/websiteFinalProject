import react from 'react'
import {Layout, Space, List} from 'antd'

const {Header} = Layout

const QuoteList = ({signedIn,quotes}) => {
    let holder = [{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244},{text: 'blah blah blah blah blah', author: 'liam', quoteId: 3242},{text: 'bsesfaijndloiuqwjhfq', author: 'rhys', quoteId: 3243},{text: 'do the dishes lmao', author: 'leanne', quoteId: 3244}]
    return (
        <List 
            style={{marginTop: 100, marginLeft:100,zIndex:0}}
            itemLayout="horizontal"
            dataSource={quotes}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p>{item.text}</p>}
                        description={<p>-{item.author}</p>}
                    />
                </List.Item>
            )}
        />
    )
}

export default QuoteList