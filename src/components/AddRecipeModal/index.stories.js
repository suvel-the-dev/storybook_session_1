import AddRecipeModal from '.';

export default {
    title: 'Template/Add Recipe',
    component: AddRecipeModal,
}

const Template = (args) => <AddRecipeModal {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/9AgfYxNiTtPaAwwCmDNuUd/Storybook-Session?node-id=48%3A5',
    },
}