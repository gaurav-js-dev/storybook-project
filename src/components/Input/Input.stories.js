import React from 'react';

import Input from './Input';

export default {
  title: "Form/Input",
  component: Input,
};

export const Sm = () => <Input size="sm" placeholder="Small" />;
export const Md = () => <Input size="md" placeholder="Medium" />;
export const Lg = () => <Input size="lg" placeholder="Large" />;

Sm.storyName = "Small";
Md.storyName = "Medium";
Lg.storyName = "Large";
