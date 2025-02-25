import React from 'react'
const allCategories = [
    {
        id: 1,
        name: 'Sistemas',
        icon: 'LaptopComputer',
        color: '#f59e0b',
        imgUrl: 'digital-marketing.jpg'
    },
    {
        id: 2,
        name: 'Cómputo',
        icon: 'Shirt',
        color: '#f59e0b',
        imgUrl: 'compu.jpg'
    },
    {
        id: 3,
        name: 'Mantenimiento',
        icon: 'Watch',
        color: '#f59e0b',
        imgUrl: 'pc-repair.jpg'
    },
    {
        id: 4,
        name: 'XXXXXX',
        icon: 'House',
        color: '#f59e0b',
        imgUrl: 'myimage.png'
    },
    {
        id: 5,
        name: 'Mobiliario',
        icon: 'Beaker',
        color: '#f59e0b',
        imgUrl: 'vitrinas.jpg'
    },
]

const Categories = () => {
  return (
    <div className='py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
        <h3 className='text-gray-900 mb-7 text-center text-4xl font-medium'>Nuestras Categorias</h3>
        <div className='flex flex-wrap gap-4 justify-center'>
            {allCategories.map(({imgUrl, name, id}) => (
                <div className='m-5' key={id}>
                    <div className={`flex items-center w-60 h-60 bg-white rounded-full shadow-lg  transition-all duration-300  bg-center bg-cover`} style={{backgroundImage: `url(/${imgUrl})`}}>
                       
                    </div>
                    <h3 className="text-2xl text-center font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors mt-4">
                        {name}
                    </h3>
                    
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Categories