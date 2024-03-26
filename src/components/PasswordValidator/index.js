// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MiniContainer,
  Head,
  Para,
  Input,
  Para2,
} from './styledComponents'

const PasswordValidator = () => {
  const [value, setFunction] = useState('')

  const onChangeValue = event => {
    setFunction(event.target.value)
  }

  // const good = value.length > 8
  const para1 =
    value.length > 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <MainContainer>
      <MiniContainer>
        <Head>Password Validator</Head>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={onChangeValue} />
        <Para2>{para1}</Para2>
      </MiniContainer>
    </MainContainer>
  )
}
export default PasswordValidator
