"use client";

import React from "react";
import CountUp from 'react-countup';


interface AnimatedCounterProps {
    amount: number;
}

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
    return (
        <div className='w-full'>
            <CountUp
                decimals={2}
                decimal=','
                prefix='$'
                end={amount}
                duration={1.5}
            />
        </div>
    )
}

export default AnimatedCounter