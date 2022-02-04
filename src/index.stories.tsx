import { ComponentStory, ComponentMeta } from "@storybook/react";

import IIAuth from ".";

export default {
  title: "Example/IIAuth",
  component: IIAuth,
} as ComponentMeta<typeof IIAuth>;

const Template: ComponentStory<typeof IIAuth> = (args) => <IIAuth {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
