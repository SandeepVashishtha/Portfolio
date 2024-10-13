import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

type Props = {
    message: string,
    status: boolean
}

const Toast = ({ message, status}: Props) => {
  return (
    <div className={`w-[90%] md:w-full p-4 flex flex-col gap-3 mt-4 ${status ? ' border-l-4 border-l-green-400 bg-green-100' : 'border-l-4 border-l-red-400 bg-red-100'}`}>
        {status ? <CheckCircleIcon className='text-green-400 h-8 w-8'/> : <XCircleIcon className='text-red-400 h-8 w-8'/>}
        <p className='text-black'>{message}</p>
    </div>
  )
}

export default Toast;