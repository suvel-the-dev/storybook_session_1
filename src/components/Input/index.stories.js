import Input from '.';
import './style.css';

export default {
    title: 'Components/Input',
    component: Input,
}

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'Hello World!'
};