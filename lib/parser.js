const marked = require('marked')
const _ = require('lodash')
const fs = require('fs')

FILES = [
    '../examples/federated-learning/',
    '../examples/simple-average/',
    '../examples/mnist/',
]

class Parser {
    parse () {
        return _.map(FILES, (f) => {
            let file = f + 'README.md'
            let fileString = fs.readFileSync(f + 'README.md').toString()
            let lex = marked.lexer(fileString)

            if (lex[0].type !== 'heading') {
                throw new Error('Invalid markdown format in ' + file + ', expected heading but got ' + lex[0].type)
            }

            if (lex[1].type !== 'paragraph') {
                throw new Error('Invalid markdown format in ' + file + ', expected paragraph but got ' + lex[1].type)
            }

            return {
                title: lex[0].text,
                text: lex[1].text
            }
        })
    }
}

export default Parser

