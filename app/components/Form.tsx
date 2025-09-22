import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center items-center'>
        <Card className='w-[330px] h-[450px] mt-30 shadow-md shadow-gray-400 flex items-center'>
            <CardTitle className='text-2xl'>Clinic system</CardTitle>
            <CardDescription className='relative top-[-20px] font-semibold'>Monitor you health and make it a habit</CardDescription>
            <CardContent>
                <div className='flex w-full items-center flex-col'>
                    <div className='w-full'>
                        <Input type='text' placeholder='Enter FullName'/>
                    </div>
                    <div className='mt-7 w-full'>
                        <Input type='email' placeholder='Enter Email Address'/>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Form