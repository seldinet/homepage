import React from 'react'
import styled from 'styled-components'

import CrmMarketing from './crm-marketing'
import CustomAnalytics from './custom-analytics'
import EnteringStoreManagement from './entering-store-management'
import MapSolution from './map-solution'
import TotalCare from './total-care'
import MatchingService from './matching-service'
import WranInformation from './warn-information'
import { FunctionCategory } from './funtion-category'

const FunctionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    
    & > div:first-child {
        width: 100%;
        max-width: 1200px;

        & > div:not(:last-child) {
            margin-bottom: 80px;
        }
    }
`



export default function Functions() {

    return (
        <FunctionsContainer>
            <div>
                <FunctionCategory />
                <CrmMarketing />
                <CustomAnalytics />
                <EnteringStoreManagement />
                <MapSolution />
                <TotalCare />
                <MatchingService />
            </div>
            <WranInformation />
        </FunctionsContainer>
    )
   
}