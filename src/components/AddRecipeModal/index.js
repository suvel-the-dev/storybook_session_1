import React from 'react'
import Modal from '../Modal'
import Typography from '../Typography'
import ThemedButton from '../Button/ThemedButton'
import LabelledInput from '../LabelledInput'
import './style.css'

const AddRecipeModal = ({ toggleModal, addRecipe }) => {

    const handelCloseModal = () => {
        toggleModal && toggleModal(false)
    }

    return (
        <Modal color={'#ffffff'}>
            <div className='add-recipe'>
                <div className='add-recipe__title'>
                    <Typography variant={'label'}>
                        ADD RECIPE
                    </Typography>
                </div>
                <div className='add-recipe__form'>
                    <LabelledInput label={'Name'} />
                    <LabelledInput label={'Category'} />
                    <LabelledInput label={'Procedure'} />
                </div>
                <div className='add-recipe__action'>
                    <ThemedButton
                        rounded={false}
                        width={'100%'}
                        height={'62px'}
                        variant='TERTIARY'
                        onClick={handelCloseModal}>
                        Cancel
                    </ThemedButton>
                    <ThemedButton
                        rounded={false}
                        width={'100%'}
                        height={'62px'}
                        variant='PRIMARY'
                        onClick={() => addRecipe && addRecipe()}
                    >
                        Add
                    </ThemedButton>
                </div>
            </div>
        </Modal>
    )
}

export default AddRecipeModal
