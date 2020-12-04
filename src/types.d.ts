declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
}

declare module '*.png' {
    const value: any
    export = value;
}

declare module '*.svg' {
    const value: any
    export = value;
}
