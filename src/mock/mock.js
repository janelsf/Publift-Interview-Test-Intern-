import Mock from 'mockjs'
import { saveAs } from 'file-saver/FileSaver';
let question1 = Mock.mock('/hello', 'get', function () {
    return 'hello world'
})

let question2 = Mock.mock(/\/question2/, 'get', function (content) {
    // console.log(content)
    let url = content.url
    // let contents = url.split('=')
    // return 'hello ' + contents[1]
    return url
})


let question3 = Mock.mock('/question3', 'post', function (content) {
    let body = JSON.parse(content.body)
    let image = body.image
    let type = image.split(';')[0]
    type = type.split('/')[1]
    fetch(image).then(res => res.blob()).then(blob => saveAs(blob, 'image.' + type))
    return 'success'
})

export default {
    question1,
    question2,
    question3
}
