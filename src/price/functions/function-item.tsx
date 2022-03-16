import styled from 'styled-components'

import { FunctionLabel } from './function-label'
import { BaseText } from '../../components'

const Container = styled.li`
    display: flex;
    align-items: center;
    box-sizing: border-box;

    padding: 20px 16px;

    & > div:first-child {
        display: flex;
        flex-direction: column;

        width: 380px;
        flex-shrink: 0;

        @media(max-width: 768px) {
            width: 120px;
        }

        @media(max-width: 768px) {
            & > div:last-child {
                display: none;
             }
        }
    }

    & > div:not(:first-child) {
        max-width: 275px;
        width: 100%;
        flex-grow: 0;
        flex-shrink: 1;
    }
`

const ResponsiveText = styled(BaseText)`
    @media(min-width:480px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 479px) {
        font-size: 12px;
    }
`

interface ItemProps {
    title: string
    description: string
    starter: {
        type: 'NOT_SUPPORTED' |'STARTER' | 'EXPERT' | 'LEADER'
        description: string
        warning?: boolean
    }
    expert: {
        type: 'NOT_SUPPORTED' |'STARTER' | 'EXPERT' | 'LEADER'
        description: string
        warning?: boolean
    }
    leader: {
        type: 'NOT_SUPPORTED' |'STARTER' | 'EXPERT' | 'LEADER'
        description: string
        warning?: boolean
    }
}


export function FunctionItem({title, description, starter, expert, leader} : ItemProps) {
    return (
        <Container>
            <div>
                <ResponsiveText fontSize={18} color="#333d4b" textAlign="left" margin="0 0 4px">
                    {title}
                </ResponsiveText>
                <BaseText fontSize={14} color="#e32604" textAlign="left">
                    {description}
                </BaseText>
            </div>
            <FunctionLabel warning={starter.warning} type={starter.type} description={starter.description} />
            <FunctionLabel warning={expert.warning} type={expert.type} description={expert.description} />
            <FunctionLabel warning={leader.warning} type={leader.type} description={leader.description} />
        </Container>
    )
}