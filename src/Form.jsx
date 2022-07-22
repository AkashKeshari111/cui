import React, { useState } from 'react'
import { Button, FormControl, FormLabel, HStack, Input, Menu, MenuButton, MenuItem, MenuList, PinInput, PinInputField, Select, Text, useUpdateEffect } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi';
const Form = () => {
    const [text,setText]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [bag,setbag]=useState([])
   
    
useUpdateEffect(()=>{

   setbag(bag+text)
},[text])


const handleSubmit=(e)=>{
e.preventDefault()
alert("Form submited")
}
  return (
<FormControl onSubmit={handleSubmit}>
  <FormLabel>Email address</FormLabel>
  <Input type='email' onChange={(e)=>(setEmail(e.target.value))}/>
  <FormLabel>Password</FormLabel>
  <Input type='password'  onChange={(e)=>(setPassword(e.target.value))} /><br/><br/>


  <HStack marginLeft={600}>
  <PinInput >
    <PinInputField onChange={(e)=>(setText(e.target.value))} w="20px" />
    <PinInputField  onChange={(e)=>(setText(e.target.value))} w="20px"/>
    <PinInputField  onChange={(e)=>(setText(e.target.value))} w="20px"/>
    <PinInputField onChange={(e)=>(setText(e.target.value))} w="20px"/>
  </PinInput>
</HStack>





<Text>{bag}</Text>

<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>

<Menu>
  <MenuButton as={Button} rightIcon={<BiChevronDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
<br/>

<Button colorScheme='blue' type="submit">Button</Button>

</FormControl>
  )
}

export default Form