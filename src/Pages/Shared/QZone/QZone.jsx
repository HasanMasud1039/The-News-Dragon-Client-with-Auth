/*eslint-disable no-unused-vars*/
import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-2 rounded'>
            <h4>QZone</h4>
            <div className='px-1'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;