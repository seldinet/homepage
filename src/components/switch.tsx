import styled from 'styled-components'

const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 24px;
    padding: 2px 8px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.16);
`

const SwitchItem = styled.div`
    padding: 2px 6px;
    border-radius: 6px;
    background-color: #1461ff;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.16);
`

export default function BaseSwitch() {
    return (
        <SwitchContainer></SwitchContainer>   
    )
}