import React from 'react'
import styled from 'styled-components'

import { BaseText } from '../../components'
import { addPrefix } from '../../utils/addPrefix'
import { FunctionUpgradeItem } from './function-upgrad-item'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    @media(max-width: 768px) {
        & > div:nth-child(2) {
            display: none;
        }
    }
`

const Label = styled.div<{bgColor: string, textColor: string}>`
    box-sizing: border-box;
    padding: 6px 22px 8px;
    border-radius: 9px;
    
    font-size: 18px;

    background-color: ${({bgColor}) => bgColor};
    color: ${({textColor}) => textColor};

    @media(max-width: 768px) {
        display: none;
    }
`

const IMAGE = styled.img`
    width: 42px;
    height: 42px;

    @media(min-width: 769px) {
        display: none;
    }
    
    @media(min-width:480px) and (max-width: 768px) {
        width: 36px;
        height: 36px;
    }

    @media (max-width: 479px) {
        width: 16px;
        height: 16px;
    }
`

const LABEL_COLOR = {
    STARTER: {
        bgColor: '#fff3e5',
        textColor: '#db7520'
    },
    EXPERT: {
        bgColor: '#ecf8ec',
        textColor: '#16ac3e'
    },
    LEADER: {
        bgColor: '#edf7ff',
        textColor: '#0940b1'
    },
}

const ResponsiveText = styled(BaseText)`
    @media(min-width:480px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 479px) {
        font-size: 12px;
    }
`

const IMAGES = {
    STARTER: addPrefix("/images/check-starter.png"),
    EXPERT: addPrefix("/images/check-expert.png"),
    LEADER: addPrefix("/images/check-leader.png"),
}

export function FunctionLabel({type, description, warning } : {type: 'NOT_SUPPORTED' | 'UPGRADE' |'STARTER' | 'EXPERT' | 'LEADER', description: string, warning?: boolean}) {
    return (
        <Container>
            {type==='NOT_SUPPORTED' ? 
                <ResponsiveText fontSize={18} color="#888">미지원</ResponsiveText> 
                : type==='UPGRADE' ?
                <FunctionUpgradeItem/> 
                :
                <>
                     <Label bgColor={LABEL_COLOR[type].bgColor} textColor={LABEL_COLOR[type].textColor}>
                        제공
                    </Label>
                    {description ? <BaseText margin="4px 0 0 0" fontSize={14} color={warning ? "#e32604":"#888"}>{description}</BaseText>: null}
                    <IMAGE src={IMAGES[type]} />
                </>
            }
            
        </Container>
    )
}

