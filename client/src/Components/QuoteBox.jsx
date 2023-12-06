import React from 'react';

const QuoteBox = ({quotes}) => {
    const {content, author} = quotes;
    return (
        <div className='container'>
            <p>{content}</p>
            <p>{author}</p>
        </div>
    )
}

export default QuoteBox