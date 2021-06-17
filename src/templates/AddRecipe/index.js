import React from 'react'
import Modal from '../../components/Modal'
import Typography from '../../components/Typography'
import PositiveButton from '../../components/Button/PositiveButton'
import NegativeButton from '../../components/Button/NegativeButton'
import './style.css'

const AddRecipe = ({ }) => {
    return (
        <Modal color={'#fff33e'}>
            <div className='add-recipe'>
                <Typography variant={'medium-header'}>
                    Add Recipe
                </Typography>
                <div className='add-recipe__input'>
                    <Typography variant={'label'}>
                        Name
                    </Typography>
                    <input />
                </div>
                <div className='add-recipe__input'>
                    <Typography variant={'label'}>
                        Procedure
                    </Typography>
                    <textarea />
                </div>
                <div className='add-recipe__action'>
                    <PositiveButton>
                        Add
                    </PositiveButton>
                    <NegativeButton>
                        Cancel
                    </NegativeButton>
                </div>
            </div>
        </Modal>
    )
}

export default AddRecipe
