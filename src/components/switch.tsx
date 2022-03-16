import styled, { css } from 'styled-components'

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

const SwitchItem = styled.div<{ selected?: boolean }>`
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 1.67;
    cursor: pointer;

    ${({ selected }) => selected ? css`
        background-color: #1461ff;
        color: white;

    `: css`
        background-color: inherit;
        color: #b0b7c3;
    `}
    
   
`

interface SwitchProps {
    defaultValue?: {
        key: string,
        title: string
    },
    values: {
        key: string
        title: string
    }[]
    selectedValue?: {
        key: string
        title: string
    }
    onChange?: (plan: {key: string, title: string}) => void
}

export function BaseSwitch({defaultValue, values, selectedValue, onChange}: SwitchProps) {
    return (
        <SwitchContainer>
            {values.map((value) => {
                const selected = selectedValue?.key === value.key || defaultValue?.key === value.key
                return (
                    <SwitchItem key={value.key}  selected={selected} onClick={() => onChange && onChange({key: value.key, title: value.title})}>{value.title}</SwitchItem>
                )
            })}
        </SwitchContainer>   
    )
}