import styled from 'styled-components'

export const BaseHR = styled.div<{margin?: string}>`
    width: 100%;
    height: 1px;

    background-color: #ddd;
    ${({ margin }) => margin? `margin: ${margin}` : null};
`