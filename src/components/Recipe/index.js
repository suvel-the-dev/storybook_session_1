import React from 'react'
import Modal from '../Modal'
import Pill from '../Pill'
import './style.css'

const Recipe = ({
    title,
    category,
    categoryColor,
    procedure
}) => {
    return (
        <Modal color='#ffffff'>
            <div class="recipe">
                <div class="recipe__img"></div>
                <div class="recipe__title">
                    {title}
                </div>
                <div class="recipe__catogory">
                    <Pill
                        color={categoryColor}
                        height={'30px'}
                    >{category}
                    </Pill>
                </div>
                <div class="recipe__desc">{procedure}</div>
            </div>
        </Modal>
    )
}

export default Recipe
