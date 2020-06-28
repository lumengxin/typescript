import { Header, Content, Footer } from './components'

/* 打包后的amd规范不能直接在浏览器端运行 */
export default class Page {
  constructor() {
    new Header()
    new Content()
    new Footer()
  }
}
