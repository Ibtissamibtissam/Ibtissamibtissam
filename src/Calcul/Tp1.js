import React, { useState } from 'react'
import './tp1.css'
export default function Tp1() {
  const [x1,setx1]=useState("");
  
 const Result=(e)=>{
  setx1(x1.concat(e.target.name));

 }
 const cler=()=>{
  setx1(x1.slice(0,x1.length-1));
}
const clear=()=>{
setx1("");
}
const calculate=()=>{
  try{
    setx1(eval(x1).toString());
  }catch{
    setx1("Error")
  }
}

  
  return (
    <div className='contaire'>
      <div id='keypade'>
      <input type="text"  value={x1} id='reslta'/><br/>
      <input type="button" value="clear"  onClick={clear} id="C"  name='clear' />
      <input type="button" value="C"  onClick={cler}  className='colon'/>
      <input type="button" value="/"  onClick={Result} className='colon' style={{backgroundColor: 'orange'}} name='/'/><br/>
      <input type="button" value="7"  onClick={Result} className='colon' name='7'/>
      <input type="button" value="8"  onClick={Result} className='colon' name='8'/>
      <input type="button" value="9"  onClick={Result} className='colon' name='9'/>
      <input type="button" value="*"  onClick={Result} className='colon' style={{backgroundColor: 'orange'}} name='*'/><br/>
      <input type="button" value="4"  onClick={Result} className='colon' name='4'/>
      <input type="button" value="5"  onClick={Result} className='colon' name='5'/>
      <input type="button" value="6"  onClick={Result} className='colon' name='6'/>
      <input type="button" value="-"  onClick={Result} className='colon' style={{backgroundColor: 'orange'}} name='-'/><br/>
      <input type="button" value="1"  onClick={Result} className='colon' name='1'/>
      <input type="button" value="2"  onClick={Result} className='colon' name='2'/>
      <input type="button" value="3"  onClick={Result} className='colon' name='3'/>
      <input type="button" value="+"  onClick={Result} className='colon' style={{backgroundColor: 'orange'}} name='+'/><br/>
      <input type="button" value="0"  onClick={Result} className='colon' name='0'/>
      <input type="button" value="."  onClick={Result} className='colon' name='.'/>
      <input type="button" value="="  onClick={calculate} className='egale' name='='/>
     
    </div>
    </div>
  )
}
