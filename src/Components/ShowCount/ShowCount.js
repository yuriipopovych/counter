import React from 'react';
import './ShowCount.css';


export default function ShowCount({count}) {
    return (
        <div className='showCount'>
            <p className='countText'>Count:{count}</p>
        </div>
    )
}
