"use client"

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'


const Form = () => {
    const [chosenNumber, setNumber] = useState("");
    const [userInput, setInput] = useState("");
  return (
    <div className='flex justify-center items-center'>
        <Card className='w-auto h-[450px] mt-30 shadow-md shadow-gray-400 flex items-center'>
            <CardTitle className='text-2xl underline text-red-500'>Clinic system</CardTitle>
            <CardDescription className='relative top-[-20px] font-semibold'>Monitor you health and make it a habit</CardDescription>
            <CardContent>
                <div className='flex w-full items-center flex-col'>
                    <div className='w-full flex flex-row gap-[1rem]'>
                        <Input type='text' placeholder='Enter FullName'/> 
                          <Input type='email' placeholder='Enter Email Address'/>
                    </div>
                        <datalist id="dataList" onChange={(e:any) => setNumber(e.target.value)}>
                            
                            <option value="+63">+63</option>

                        </datalist>
                      <div className='mt-7  w-full'>
                        <Input list="dataList" value={userInput}  onChange={(e:any) => setInput(e.target.value)} type='number' placeholder='Phone number'/>
                    </div>
                     <div className='w-30 mt-7  flex  relative left-[-141px] flex-row gap-[1rem]'>
                        <Input type='number' placeholder='age'/> 
                    </div>
                </div>
            </CardContent>
        </Card> 
    </div>
  )
}

export default Form