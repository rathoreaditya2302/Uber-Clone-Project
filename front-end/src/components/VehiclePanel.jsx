import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 
            className='p-1 text-center w-[93%] absolute top-0' 
            onClick={()=>{
                props.setVehiclePanel(false);
            }}
        >
            <i className= 'text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
        </h5>

        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div 
            onClick = {() => {
                props.setConfirmRidePanel(true);
            }} 
            tabIndex={0} className='flex border-3 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between cursor-pointer'>
            <img className='-ml-1 h-10' src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-11dd1be/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="" />
            <div className=' -ml-2 w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600 '>Affordable, compact rides </p>
            </div>
            <h2 className='text-xl font-semibold'>₹200</h2>
        </div>

        <div 
            onClick = {() => {
                props.setConfirmRidePanel(true);
            }} 
            className='flex border-3 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'></i>1</span></h4>
                <h5 className='font-medium text-sm'>3 mins away</h5>
                <p className='font-normal text-xs text-gray-600 '>Affordable motorcycle ride </p>
            </div>
            <h2 className='text-xl font-semibold'>₹50</h2>
        </div>

        <div 
            onClick = {() => {
                props.setConfirmRidePanel(true);
            }} 
            className='flex border-3 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Uber Auto<span><i className='ri-user-3-fill'></i>3</span></h4>
                <h5 className='font-medium text-sm'>5 mins away</h5>
                <p className='font-normal text-xs text-gray-600 '>Affordable Auto ride </p>
            </div>
            <h2 className='text-xl font-semibold'>₹150</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
