import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 40%;
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-align: center;
background: #FFF;
padding: 8px;
`

const Image = styled.img`
width: 80%;
margin-bottom: 10px;
`

const Name = styled.p`
font-weight: 700;
`

const Price = styled.p``

const TextWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`

const Description = styled.p`
text-align: left;
font-weight: 200;
`

export const Product = () => {
    return (
        <Wrapper>
            <Image src="https://res.cloudinary.com/norgesgruppen/image/upload/c_pad,b_white,f_auto,h_840,w_840,q_auto:eco/v1534761968/Product/7611612221771.jpg"></Image>
            <TextWrapper>
            <Name>Tittel</Name>
            <Price>Pris</Price>
            </TextWrapper>
            <Description>Beskrivelse</Description>
        </Wrapper>
    )
}
