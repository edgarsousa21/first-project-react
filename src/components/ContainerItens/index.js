import React, { Children } from 'react'

import { ContainerItems as Container } from './styles'
function ContainerItens({children, isBlur}){


    return<Container isBlur={isBlur}>{children}</Container>

}

export default ContainerItens

