"use client"
import React, { useState } from 'react'
import TransportationData from '@/utility/types/transportationData'
import data from '@/utility/data'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

type Props = { data: TransportationData }

const chart = (props: Props) => {

    return (
        <>
            <div className='h-screen'>

                <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                    <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                </LineChart>

                {/* use react charts https://react-charts.tanstack.com/docs/installation */}
            </div>
        </>
    )
}

export default chart;