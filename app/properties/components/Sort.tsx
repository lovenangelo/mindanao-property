"use client"

import { Settings2 } from "lucide-react"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Sort = () => {

    const [buttonValue, setButtonValue] = useState('');

    // Event handler for the button click
    const handleClick = (value: string) => {
        setButtonValue(value);
    };

    return (
        <div className="lg:flex justify-between">
            <h1 className="text-2xl font-bold sm:mb-2 xs:mb-2">All Properties <span>(183)</span></h1>
            <div className="flex items-center min-w-[200px] justify-end">
                <span className="pr-2">Sort By:</span>
                <span className="pr-2">{buttonValue}</span>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="w-10 rounded-full p-0">
                        <Settings2 className="h-4 w-4" />
                        <span className="sr-only">Open popover</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 left=-32">
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <h4 className="font-bold leading-none">Sort Properties</h4>
                            </div>
                            <div className="grid gap-2">

                                <button className="hover:text-gray-500 "  
                                    name="price" onClick={() => handleClick('Featured')}>
                                        Featured
                                </button>

                                <button className="hover:text-gray-500 "  
                                    name="price" onClick={() => handleClick('Newest')}>
                                        Newest
                                </button>
                                <button className="hover:text-gray-500 "  
                                    name="price" onClick={() => handleClick('Price: High - Low')}>
                                        Price: High - Low
                                </button>

                                <button className="hover:text-gray-500 "  
                                    name="price" onClick={() => handleClick('Price: Low - High')}>
                                        Price: Low - High
                                </button>
                                <button className="hover:text-gray-500 "  
                                    name="type" onClick={() => handleClick('Buy')}>
                                        Buy
                                </button>
                                <button className="hover:text-gray-500 "  
                                    name="type" onClick={() => handleClick('Rent')}>
                                        Rent
                                </button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default Sort;