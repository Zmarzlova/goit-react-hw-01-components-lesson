import { RecipeDifficulty } from 'constants';
import PropTypes from 'prop-types'
import { Component } from 'react';
import { AiOutlineClockCircle, AiOutlinePieChart, AiOutlineBarChart } from "react-icons/ai";
import { HiTrash, HiZoomIn} from "react-icons/hi";
import { Actions, Badg, BadgList, Container, Image, InfoBlock, Meta, Name, RecipeInfo } from './RecipeCard.styled';
import { ImageModal } from 'components/imageModal/imageModal';



export class RecipeCard extends Component {
    static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape({
        image: PropTypes.string.isRequired, name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired, servings: PropTypes.number.isRequired, calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
}
    state = {
        selectedImg: null,
    }

    setSelectedImg = () => {
        this.setState({ selectedImg: this.props.item.image})
    }

    closeModal = () => {
        this.setState({ selectedImg: null}) 
    }
    render() {
        const { selectedImg } = this.state
        const { item: { id, image, name, time, servings, calories, difficulty }, onDelete,} = this.props
        return (
        <Container>
            <Image src={image} alt={name} width="240" />
    <Meta>
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

        <BadgList >
                <Badg active={difficulty === RecipeDifficulty.easy} type={RecipeDifficulty.easy}>Easy</Badg>
                <Badg active={difficulty === RecipeDifficulty.medium} type={RecipeDifficulty.medium}>Medium</Badg>
                <Badg active={difficulty === RecipeDifficulty.hard} type={RecipeDifficulty.hard}>Hard</Badg>
        </BadgList>
                
        <Actions>
        <button aria-label='Delete' onClick={() => onDelete(id)}><HiTrash />
        </button>
        <button aria-label='Zoom' onClick={this.setSelectedImg}><HiZoomIn />
        </button>
        </Actions>
    </Meta>
                <ImageModal isOpen={selectedImg !== null} onClose={ this.closeModal} image={selectedImg} />
    </Container>
    )
    }
} 