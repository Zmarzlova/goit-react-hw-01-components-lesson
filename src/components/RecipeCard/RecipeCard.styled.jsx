import styled from "styled-components";

export const RecipeInfo = styled.div`
display: flex;
gap: 4px;
`
export const Name = styled.h2`
margin-top: 8px;
margin-bottom: 12px;
`

export const InfoBlock = styled.p`
display: flex;
align-items: center;
gap: 4px;
svg {
    color: red;
}
`
export const BadgList = styled.div`
display: flex;
gap: 8px;
`
export const Badg = styled.span`
padding: 8px 12px;
border-radius: ${p => p.theme.radii.small};
border: 1px solid ${p => p.theme.colors.black};
background-color: ${props => {
    return props.active ? props.theme.colors.accent : props.theme.colors.white;
}}
`
