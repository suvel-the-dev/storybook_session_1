import Typography from '.'

export default {
    title: 'Components/Typography',
    component: Typography,
    argTypes: {
        variant: {
            options: [
                'big-header',
                'medium-header',
                'small-header',
                'label',
                'paragraph',
            ],
            control: { type: 'select' }
        },
    },
}

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Big Header",
    variant: 'paragraph',
};

export const Title = Template.bind({});
Title.args = {
    ...Default.args,
    children: "The Maggie Experiment",
    variant: 'medium-header',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    ...Default.args,
    children: `
    It is a long established fact that a reader will
     be distracted by the readable content of a page when looking
      at its layout. The point of using Lorem Ipsum is that it has
       a more-or-less normal distribution of letters, as opposed
        to using 'Content here, content here', making it look like
         readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    Various versions have evolved over the years, sometimes by accident,
     sometimes on purpose (injected humour and the like).`,
    variant: 'paragraph',
};

export const Label = Template.bind({});
Label.args = {
    ...Default.args,
    children: "Hello!",
    variant: 'label',
};