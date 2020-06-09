
const initialState = 0;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// reducer(0, increment()) => 1
// reducer(0, decrement()) => -1