import Button from './';
import ThemedButton from './ThemedButton'

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

export const PrimaryButton = () => {
    return <>
        <ThemedButton variant='PRIMARY'>Primary Button</ThemedButton>
    </>
}

export const SecondaryButton = () => {
    return <ThemedButton variant='SECONDARY'>Secondary Button</ThemedButton>
}

export const TertiaryButton = () => {
    return <ThemedButton variant='TERTIARY'>Tertiary Button</ThemedButton>
}