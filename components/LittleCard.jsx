import React from 'react'

const LittleCard = ({src, alt, title}) => {
    return (
        <div className='m-1 py-4 mx-0 text-center'>
            <div className='mx-4'>
                <img className='mx-auto h-20 w-20' src={src} alt={alt} />
                <p className='text-dgray text-center text-base font-semibold mt-2 mx-'>{title}</p>
            </div>
        </div>
    )
}

export default LittleCard
