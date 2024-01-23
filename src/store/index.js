import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            word: 'Hello'
        },
        mutations: {},
        // Strict shouldnot be used in production code. It is used as a learning tool.
        strict: true
    })
}