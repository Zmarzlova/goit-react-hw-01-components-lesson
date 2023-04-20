import { RecipeDifficulty } from "constants";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`
export const Image = styled.img`
 display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
`

export const Meta = styled.div`
display: flex;
  flex-direction: column;
  padding: 12px;
  flex-grow: 1;
`

export const Actions = styled.div`
position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`

export const RecipeInfo = styled.div`
display: flex;
 justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`
export const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;

:hover {
    color: orange;
}
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

background-color: ${p => {
    if (!p.active) {
        return p.theme.colors.white
    }
    switch (p.type) {
        case RecipeDifficulty.easy:
            return 'green';
        case RecipeDifficulty.medium:
            return 'orange';
        case RecipeDifficulty.hard:
            return 'red';
        // це пішемо для подстраховкі, якщо з бекенда прийде щось інше/
        default:
            throw new Error(`Unknow badg type ${p.type}`); 
    }
}};

color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black
}}
`
