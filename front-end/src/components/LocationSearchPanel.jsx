import React from 'react'

const LocationSearchPanel = (props) => {

    // sample array for location suggestions
    const locations = [
        "Evara Rooftop Cafe, Phase 2, Modipuram, Meerut, Uttar Pradesh",
        "DMA , Modipuram Bypaas,NH-58 Highway, Meerut, Uttar Pradesh",
        "Biggies Cafe, Kanker Khera ,NH-58 Highway, Meerut, Uttar Pradesh",
        "Sardar Vallabhbhai Patel University, Modipuram, Meerut, Uttar Pradesh",
        "Modipuram RRTS Station, Modipuram, Meerut, Uttar Pradesh"
    ]    
    return (
        <div>
            {/* this is just a sample data */}

            {
                locations.map( function(elem, index){
                    return (
                        <div 
                            onClick={()=> {
                                props.setVehiclePanel(true);
                                props.setPanelOpen(false);
                            }}
                            key={index}
                            className='flex gap-2 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'
                        >
                            <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full' >
                                <i className='ri-map-pin-fill'></i>
                            </h2>
                            <h4 className='font-medium'>{elem}</h4>
                        </div>
                  )
                })
            }

      
        </div>
    )
}

export default LocationSearchPanel
