import BrandLogo from '.';

export default {
    title: 'Components/Logo',
    component: BrandLogo,
}

const Template = (args) => <BrandLogo {...args} />;

export const Default = Template.bind({});
