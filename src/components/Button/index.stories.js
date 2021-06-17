import Button from './';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        borderRadius: {
            control: { type: 'range', min: 0, max: 30 }
        },
    },
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    children: 'Button Name',
    rounded: true,
    borderRadius: 10,
};

export const PositiveAction = Template.bind({});
PositiveAction.args = {
    ...Default.args,
    background: "#FFED00",
    width: '150px',
    height: '40px',
    rounded: true,
    borderRadius: 10,
    children: '👼 Angle'
};

export const NegativeAction = Template.bind({});
NegativeAction.args = {
    ...PositiveAction.args,
    background: "#ED232A",
    children: '😈 Devil'
};