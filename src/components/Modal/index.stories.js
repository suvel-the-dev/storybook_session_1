import Modal from '.';
import Typography from '../Typography'
export default {
    title: 'Components/Modal',
    component: Modal,
}

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <div style={{ width: '300px', height: '200px' }}>hi👋</div>,
};

export const WelcomeModal = Template.bind({});
WelcomeModal.args = {
    children: (
        <div style={{
            width: '300px',
            height: '200px',
            display: 'grid',
            placeContent: 'center'
        }}>
            <Typography variant='medium-header' >
                Welcome 😇!
            </Typography>
            <Typography variant='paragraph' textAlign='justify'>
                {`Welcome to our Britain shop where you'll find everything you want!
            Your presence is our motivation to do better! Our heartiest welcome
            goes to you. Thanks for being a proud customer of our unique and 
            ever-expanding line of products! We're honored to have you with us 
            always!`}
            </Typography>
        </div>
    ),
};