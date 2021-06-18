import AddRecipeBtn from '.';

export default {
    title: 'Template/Add Recipe Button',
    component: AddRecipeBtn,
}

const Template = (args) => <AddRecipeBtn {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/9AgfYxNiTtPaAwwCmDNuUd/Storybook-Session?node-id=79%3A22',
    },
}