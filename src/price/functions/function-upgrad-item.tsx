import styled from 'styled-components'

import { BaseText } from '../../components'
import { addPrefix } from '../../utils/addPrefix'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 768px) {
        & > img {
            display: none;
        }
    }
`

const ResponsiveText = styled(BaseText)`
    @media(min-width:480px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 479px) {
        font-size: 12px;
        font-weight: 400;
    }
`


export function FunctionUpgradeItem() {
    return (
        <Container>
            <ResponsiveText fontSize={18} fontWeight={600} color="#888" margin="0 0 4px">
                UPGRADE
            </ResponsiveText>
            <img width={28} height={28} alt="upgrade_img" src={addPrefix("/images/upgrade-icon-image.png")}/>
        </Container>
    )
}