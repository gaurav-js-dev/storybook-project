import { Button } from '@chakra-ui/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "red",
  children: "Chakra Danger",
};
export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Chakra Danger",
};
export const Blue = Template.bind({});
Blue.args = {
  colorScheme: "blue",
  children: "Chakra Blue",
  onClick: () => console.log("Button Blue Clicked"),
};

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

// export const Success = () => (
//   <Button colorScheme="green">Chakra Success</Button>
// );
// export const Danger = () => <Button colorScheme="red"> Chakra Danger</Button>;
// export const Blue = () => <Button colorScheme="Blue"> Chakra Danger</Button>;
