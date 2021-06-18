import Input from '../Input';
import Typography from '../Typography'
import './style.css'

const LabelledInput = ({ label, ...props }) => {
    return (
        <div className='labeled-ip__container'>
            <Typography variant="label">
                {label}
            </Typography>
            <Input {...props} />
        </div >
    )
}

export default LabelledInput
