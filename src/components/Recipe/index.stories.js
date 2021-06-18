import Recipe from '.';

export default {
    title: 'Template/Recipe',
    component: Recipe,
}

const Template = (args) => <Recipe {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    category: 'Category',
    procedure: `
    Procedure 1,
    Procedure 2,
    Procedure 3,
    Procedure 4
    `
};

export const RecipeCard = Template.bind({});
RecipeCard.args = {
    title: 'Easy Peasy',
    category: '🦾 easy',
    categoryColor: '#ff7d0e',
    procedure: `
    1 PacketMAGGI 2-Minute Noodles (Masala) ,
    4 Tablespoons MAGGI Rich Tomato Ketchup ,
    1 Tablespoon Oil ,
    1 Teaspoon Cumin Seeds ,
    2 Tomato (Finely Chopped) ,
    1 Onion (Finely Chopped) ,
    1 Cup Peas ,
    1 Pinch Salt
    `
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/9AgfYxNiTtPaAwwCmDNuUd/Storybook-Session?node-id=59%3A1',
    },
}