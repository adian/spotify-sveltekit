import { writable, type Writable } from 'svelte/store';

export const mainViewHeaderStyle: Writable<string> = writable('');
export const mainViewCardStyle: Writable<string> = writable('');
