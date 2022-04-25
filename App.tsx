
import React,{FC,useState} from 'react'
import {ScrollView} from 'react-native'
import { Platform ,Button} from 'react-native';
import {InputBox,MyView} from './src/Stylesheet/Styles'


const App = () => {
  const [first, setfirst] = useState("")
  return (
    <MyView>
        <InputBox
         placeholder="UserName" 
         value={first} 
         onChange={(val:any)=>{setfirst(val)}} />
         <InputBox
         placeholder="Password" 
         value={first} 
         onChange={(val:any)=>{setfirst(val)}} />         
    </MyView>
    
    
  )
}

export default App