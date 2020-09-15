import remark from 'remark'
import remarkHTML from 'remark-html'

export const toHTML = (value) =>
  !!value ? remark().use(remarkHTML).processSync(value).toString() : ''

export const findImgPath = (data) => {
  if (!data || !data.path) {
    return
  }
  return data.path.split('static')[1]
}
