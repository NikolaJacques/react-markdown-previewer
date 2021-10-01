import React from 'react';
import Title from './Title.js';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

export default function Preview({state}) {
    return (
        <div className="col-12 col-md-10 col-lg-8 m-auto mt-5 p-0 shadow shadow-utility border-utility">
            <Title text={'Previewer'}/>
            <div 
                className="text-box" 
                id="preview">
                    {ReactHtmlParser(marked(state, {
                        gfm:true,
                        breaks:true
                    }))}
            </div>
        </div>
    )
}
