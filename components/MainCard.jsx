import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-4 py-2 mx-0 text-center'>
            <div className='mx-2'>
                <img className='mx-auto h-24 w-24' src={src} alt={alt} />
                <p className='text-dgray text-center text-base uppercase font-semibold mt-2 mx-'>{title}</p>
            </div>
        </div>
    )
}

export default MainCard
