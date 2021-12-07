import * as React from 'react';
/* import { Text } from 'react-native'; */
import { Home } from './components/home';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Iron() {
  return <Home />;
  /* return <Text>Hola</Text> */

}
