import React from 'react';
import Title from './Title.js';

export default function Editor({setState, state}) {
    return (
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mt-4 mb-0 p-0 shadow shadow-utility border-utility">
            <Title text={'Editor'}/>
            <textarea 
                className="col-12 text-box mb-0" 
                name="editor" 
                id="editor"
                value = {state}
                onChange={(e) => {setState(e.target.value)}}>
            </textarea>
        </div>
    )
}
