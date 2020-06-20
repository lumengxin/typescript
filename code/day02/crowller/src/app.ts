// ts 引用 js， 通过.d.ts翻译 npm install @types/superagent -D
import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
import BaiduAnalytics from './analyzer/baiduAnalyzer'

class Crowller {
  private url = `http://www.baidu.com/`
  private filePath = path.resolve(__dirname, '../data/course.json')

  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.baiduAnalyzer.analyzer(html, this.filePath)
    this.writeFile(fileContent)
  }

  constructor(private baiduAnalyzer: any) {
    this.initSpiderProcess()
  }
}

const baiduAnalyzer = new BaiduAnalytics()
const crowller = new Crowller(baiduAnalyzer)