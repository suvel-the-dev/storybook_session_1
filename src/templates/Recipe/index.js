import React from 'react'
import Modal from '../../components/Modal'
import Typography from '../../components/Typography'
import Pill from '../../components/Pill'
import './style.css'

const Recipe = ({
    title,
    category,
    categoryColor = '#ffffff',
    procedure
}) => {
    return (
        <Modal color={'#fff33e'}>
            <div className='recipe'>
                <Typography variant={'medium-header'}>
                    {title}
                </Typography>
                <Pill color={categoryColor}>{category}</Pill>
                <Typography variant={'paragraph'}>
                    {procedure}
                </Typography>
            </div>
        </Modal>
    )
}

export default Recipe
