import React, { PropsWithChildren } from 'react';
import styled from 'styled-components'

import { BaseText } from '../../components'
const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

        & > ul {
            display: flex;
            flex-direction: column;

            width: 100%;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;

            & > li:not(:last-child) {
                border-bottom: 1px solid #ddd;
            }
    }

    & > span {
        font-size: 14px;
        color: #888;
        margin-top: 12px;
    }

    @media(max-width: 768px) {
        & > span:last-child {
            font-size:12px;
        }
    }

    
`


const Title = styled(BaseText)<{isDescription?: boolean}>`
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
    }

    & > span:first-child {
        flex-shrink: 0;

        @media(max-width: 768px) {
            text-align: left;
            margin-bottom: ${({isDescription}) => isDescription ? '10px': 0};
        }
    }

    & > span:last-child {
        font-size: 14px;
        color: #888;
        margin-left: 8px;
        font-weight: 400;

        @media(max-width: 768px) {
            margin-left: 0;
            font-size: 12px;
        }
    }
`

export function FunctionContainer({ children, text, description, extraInfo } : PropsWithChildren<{ text: string, description?: string, extraInfo?: string }>) {
    return (
        <Container>
            <Title isDescription={!!description} textAlign='left' fontSize={20} fontWeight="bold" lineHeight={1.45} color="#333d4b" margin="0 0 18px">
                <span>{text}</span>
                <span>{description}</span>
            </Title>
            <ul>
                {children}
            </ul>
            {extraInfo ? <span>{extraInfo}</span> : null}
        </Container>
    )
}