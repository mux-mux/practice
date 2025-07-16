import { useReducer } from 'react';

export function useToggle(initialValue: boolean) {
    return useReducer((state) => !state, initialValue || false);
}
