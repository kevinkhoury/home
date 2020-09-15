import { toHTML, findImgPath } from '../utils'

describe('toHMTL', () => {
  it('takes a markdown string and creates html', () => {
    expect(toHTML('## foobar')).toBe('<h2>foobar</h2>\n')
  })
})

describe('findImgPath', () => {
  it('removes the `static` folder from the image path', () => {
    const data = {
      path: '/static/img/asdjfkasdfjklsd/foobar.jpg',
    }
    expect(findImgPath(data)).toBe('/img/asdjfkasdfjklsd/foobar.jpg')
  })
  it('returns empty if malformed', () => {
    expect(findImgPath()).toBeFalsy()
    expect(findImgPath({ mung: 'bean' })).toBeFalsy()
  })
})
