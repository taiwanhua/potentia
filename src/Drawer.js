import { LeftDrawer, LeftBarList } from './Top';
import React from 'react';
import styled from 'styled-components'
import { mediaQuery } from './MediaQuery';


export const StyledLeftDrawer = styled(LeftDrawer).attrs((props) => ({}))`

    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    
    @media ${mediaQuery.mobileL} { 
        display: none;
    }
`

export const StyledLeftBarList = styled(LeftBarList).attrs((props) => ({}))`

    display: none;
    
    @media ${mediaQuery.mobileL} { 
        display: unset;
        position: fixed;
        height: 100%
    }
`
