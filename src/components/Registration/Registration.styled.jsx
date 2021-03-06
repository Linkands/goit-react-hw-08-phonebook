import styled from '@emotion/styled'

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`
export const Header = styled.h2`
  color: #4b3b40;
`
export const InputName = styled.p`
  color: #82735c;
  margin: 0;
`

export const InputWrapper = styled.div`
  .wrapper {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 1px 0px #ddd;
    box-sizing: border-box;
    height: 300px;
    left: 50%;
    margin: -150px 0 0 -150px;
    position: absolute;
    top: 50%;
    width: 300px;
  }
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #777777;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  padding: 5px 0px;
  width: 200px;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`
