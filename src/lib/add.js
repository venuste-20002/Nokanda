import { dev } from '$app/environment';

export function add(a, b) {
  if (dev) {
    console.warn(`Adding ${a} and ${b}`);
  }

  return a + b;
}
