import LabelledInput from '.';

export default {
    title: 'Components/LabelledInput',
    component: LabelledInput,
}

const Template = (args) => <LabelledInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Enter Name'
};
