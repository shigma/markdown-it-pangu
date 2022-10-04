import { spacing } from 'pangu'
import MarkdownIt from 'markdown-it'
import { escapeHtml, isWhiteSpace } from 'markdown-it/lib/common/utils'
import Token from 'markdown-it/lib/token'
function getPrevChar(tokens: Token[], index: number) {
  let prevChar = ''
  for (let i = index - 1; i >= 0; i -= 1) {
    const { content, type } = tokens[i]
    if (type === 'html_inline') { break }
    if (content && content.length) {
      prevChar = content.slice(-1)
      break
    }
  }
  return prevChar
}

export default (md: MarkdownIt, options: any = {}) => {
  const { additionalRules = ['code_inline'] } = options

  md.renderer.rules.text = (tokens, index, options, env, self) => {
    const prevChar = getPrevChar(tokens, index)
    return escapeHtml(spacing(prevChar + tokens[index].content).slice(prevChar.length))
  }

  (additionalRules as string[]).forEach((type) => {
    const rule = md.renderer.rules[type]
    if (!rule) { return }

    md.renderer.rules[type] = (tokens, index, options, env, self) => {
      let output = rule(tokens, index, options, env, self)
      if (output.length) {
        if (index > 0 && !isWhiteSpace(output.charCodeAt(0))) { output = ' ' + output }
        if (index < tokens.length - 1 && !isWhiteSpace(output.charCodeAt(output.length - 1))) {
          output += ' '
        }
      }
      return output
    }
  })
}
