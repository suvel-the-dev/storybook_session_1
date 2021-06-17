import Pill from '.';

export default {
    title: 'Components/Pill',
    component: Pill,
}

const Template = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Category',
};

export const Category = Template.bind({});
Category.args = {
    children: '🥕 Carrot',
    color: '#f7630c'
};