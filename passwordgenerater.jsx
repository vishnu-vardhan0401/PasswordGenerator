import React, { useState ,useCallback,useEffect, useRef} from 'react'

function Passwordgen() {
  const[len,setlen]=useState(8)
  const[numallowed,setnum]=useState(false)
  const[schar,setschar]=useState(false)
  const[Password,setpassword]=useState("")
  const passwordgenerater=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed){str+="0123456789"}
    if(schar)str+="!@#$%^&*()"
    for(let i=1;i<len;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=pass+str.charAt(char)
    }
    setpassword(pass)
  },[len,numallowed,schar,setpassword])
  useEffect(()=>{
  passwordgenerater()
  },[len,numallowed,schar,setpassword])
  let pass1=useRef(null)
  const handlecopy=useCallback(()=>{
    pass1.current.select();
   window.navigator.clipboard.writeText(Password)
  },[Password])
  return (
    
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
      <div className='fles shadow rounded-lg overflow-hidden mb-4'>
      <h1 className='text-3xl text-center n text-white'>Password Generator</h1>
      <input ref={pass1} type="text" value={Password} className='outline-none w-full py-1 px-3' />
      <button onClick={handlecopy} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div  className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-5'>
        <input className='cursor-pointer' onChange={(e)=>{
        setlen(e.target.value)
      }} type="range" min={8} max={99} value={len} />
      <label>length:{len}</label>
        </div>
      
      <div  className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={schar} onChange={() => setnum( (prev)=>!prev)} id="check1"/>
      <label htmlFor="numbers">Numbers </label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numallowed} id='numberinput' onChange={()=>{setschar((prev)=>!prev)}} />
      <label htmlFor="char">SpecialCharacters </label>
      </div>
      
      
      </div>
    
    </div>
    
  )
}

export default Passwordgen