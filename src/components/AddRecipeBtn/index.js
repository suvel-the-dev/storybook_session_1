import { useState } from 'react'
import ThemedButton from '../Button/ThemedButton'
import AddRecipeModal from '../AddRecipeModal'
import ModalBackground from '../ModalBackground'

const AddRecipeBtn = ({ handelAddRecipe }) => {

    const [showAddRecipe, setShowAddRecipe] = useState(false);

    const handelAddYourRecipe = () => {
        setShowAddRecipe(true)
    }

    return (
        <>
            <ThemedButton variant='SECONDARY' onClick={handelAddYourRecipe}>
                ADD YOUR RECIPE
            </ThemedButton>
            {showAddRecipe &&
                <ModalBackground >
                    <AddRecipeModal
                        toggleModal={setShowAddRecipe}
                        addRecipe={handelAddRecipe}
                    />
                </ModalBackground >
            }
        </>
    )
}

export default AddRecipeBtn
