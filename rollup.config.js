import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import pkg from './package.json'

export default [
    // Module1 (this will build ms package into umd)
    {
        input: 'src/module1/index.js',
        output: {
            name: 'module1nameumd',
            file: './module1/index.umd.js',
            format: 'umd'
        },
        sourcemap: true,
        plugins: [
            babel({
                exclude: ['node_modules/**']
            }),
            uglify(),
            resolve(), // so Rollup can find `ms`
            commonjs() // so Rollup can convert `ms` to an ES module
        ]
    },
    {
        input: 'src/module1/index.js',
        output: { file: './module1/index.js', format: 'cjs' },

        plugins: [
            babel({
                exclude: ['node_modules/**']
            })
        ],
        external: ['ms']
    },

    // Module2 (this wont build ms package into umd)
    {
        input: 'src/module2/index.js',
        output: {
            name: 'module2nameumd',
            file: './module2/index.umd.js',
            format: 'umd'
        },
        external: ['ms'],
        sourcemap: true,
        plugins: [
            babel({
                exclude: ['node_modules/**']
            }),
            uglify()
        ]
    },
    {
        input: 'src/module2/index.js',
        output: { file: './module2/index.js', format: 'cjs' },
        external: ['ms'],
        plugins: [
            babel({
                exclude: ['node_modules/**']
            })
        ]
    },

    // Module3
    {
        input: 'src/module3/index.js',
        output: {
            name: 'module3nameumd',
            file: './module3/index.umd.js',
            format: 'umd'
        },
        sourcemap: true,
        plugins: [
            babel({
                exclude: ['node_modules/**']
            }),
            uglify()
        ]
    },
    {
        input: 'src/module3/index.js',
        output: { file: './module3/index.js', format: 'cjs' },
        plugins: [
            babel({
                exclude: ['node_modules/**']
            })
        ]
    }
]
