import { Button } from '@chakra-ui/react';
import React from 'react';

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <Button colorScheme="green">Chakra Success</Button>
);
export const Danger = () => <Button colorScheme="red"> Chakra Danger</Button>;
export const Blue = () => <Button colorScheme="Blue"> Chakra Danger</Button>;
