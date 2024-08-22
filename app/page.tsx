'use client'

import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

export default function Home() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)

    function calcular() {
      setResult((number1 * number2) / 1000)
    }

    useEffect(() => {
      calcular();
    }, [number1, number2])

  return (
    <main>
      <h1 className='flex py-12 text-black font-medium items-center justify-center'>Calculadora de fator</h1>
        <div className='flex gap-[75px] mb-3 items-center justify-center text-center'>
          <h1 className='text-black font-bold'>GN</h1>
          <h1 className='text-black font-bold'>Vel</h1>
        </div>
        <div className='flex gap-2 mb-6 text-center items-center justify-center '>
          <input value= {number1} onChange={(e) => setNumber1(Number(e.target.value))} className=' bg-[#1a1a1a] text-white placeholder-white w-[80px] h-[50px] rounded-[30px] text-center' type='number' placeholder="Digite o primeiro numero"/>
          <input value={number2} onChange={(e) => setNumber2(Number(e.target.value))} className=' bg-[#1a1a1a] text-white placeholder-white w-[80px] h-[50px] rounded-[30px] text-center' type='number' placeholder="Digite o segundo numero"/>
        </div>
      <div className='flex flex-col items-center justify-center'>
        {result && <h1 className='mb-4 text-black font-medium items-center justify-center'>Resultado do fator</h1>}
        {result && <button className='mb-8 bg-[#1a1a1a] w-[80px] h-[50px] rounded-[30px] text-center text-white'>{result}</button>}
      </div>
    </main>
  );
}