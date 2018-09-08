import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: './dist/apron.js',
        format: 'es'
    },
    plugins: [
        typescript()
    ]
};
