import PropTypes from 'prop-types'
import { AiOutlineClockCircle, AiOutlinePieChart, AiOutlineBarChart } from "react-icons/ai";
import { Badg, BadgList, InfoBlock, Name, RecipeInfo } from './RecipeCard.styled';


export const RecipeCard = ({ item: { image, name, time, servings, calories, difficulty }, }) => {
    return ( <div>
        <img src={image} alt={name} width="240" />
        <Name>{name}</Name>

        <RecipeInfo>
            <InfoBlock>
                <AiOutlineClockCircle size="24" />
                <span>{time} min</span>
            </InfoBlock>
             <InfoBlock>
                <AiOutlinePieChart size="24" />
                <span>{servings} servings</span>
            </InfoBlock>
             <InfoBlock>
                <AiOutlineBarChart size="24"/>
                <span>{calories} calories</span>
            </InfoBlock>  
        </RecipeInfo>

        <div>
            <h3>Difficulty</h3>
            <BadgList >
                <Badg>Easy</Badg>
                <Badg>Medium</Badg>
                 <Badg>Hard</Badg>
            </BadgList>
        </div>
    </div>
    )
}

RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired, name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired, servings: PropTypes.number.isRequired, calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
}