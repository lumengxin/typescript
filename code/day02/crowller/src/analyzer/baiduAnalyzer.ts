import cheerio from 'cheerio'
import fs from 'fs'

interface Course {
  rank: number
  title: string
}
interface CourseResult {
  time: number
  data: Course[]
}
interface Content {
  [propName: number]: Course[]
}

export default class BaiduAnalyzer {

  private getCourseInfo(html: string) {
    const $ = cheerio.load(html)
    const bookBox = $('.hotsearch-item')

    const courseInfo: Course[] = []

    bookBox.map((index, element) => {
      const descs = $(element).find('span')
      const rank = parseInt(descs.eq(0).text(), 10)
      const title = descs.eq(1).text()
      courseInfo.push({rank, title})
    })
  
    return {
      time: new Date().getTime(),
      data: courseInfo
    }
  }

  generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }

  public analyzer(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo, filePath)
    return JSON.stringify(fileContent)
  }
}