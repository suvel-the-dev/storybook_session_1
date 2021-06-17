import AddRecipe from '.';

export default {
    title: 'Template/Add Recipe',
    component: AddRecipe,
}

const Template = (args) => <AddRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {};