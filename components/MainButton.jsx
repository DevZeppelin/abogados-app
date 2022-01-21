import React from 'react'

const MainButton = ({text, src}) => {
    return (
        <div className={`flex p-1 mx-8 mt-4 border-4 text-dgray border-lgray ${(text=="Chatea con nosotros") ? 'bg-blue' : "bg-lbrown" } rounded-2xl`}>
            <div className="w-1/4">
              <img src={src} alt="botón funcional main" className='m-2 h-12 w-12'/>  
            </div> 
            <div className="w-3/4 my-0 flex ml-4">
              <button className="font-bold">
                {text}
              </button>
            </div>
          </div>
    )
}

export default MainButton
