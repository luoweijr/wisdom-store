//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    novel:[
      {
        name: "苍井空 Sola Aoi",
        comment: "著名的日本成人模特、AV女优、电视演员。因为其“童颜巨乳”的特色，获得极大的回响与超高人气，并连续在2003年及2004年蝉连日本《VideoBoy》杂志年度AV女优第一名，在东亚甚至欧美都有知名度。",
        imagePath: "../../images/teacher-1.jpg"
      },
      {
        name: "松岛枫 Kaede Matsushima",
        comment: "2002年出道，隶属于宇宙企划，实际入行动机据本人访谈中说就是想要车想出国，男友则是她第一部戏的导演。担任男友执导的AV女主角。松岛枫在用“行动”支持男朋友，推出许多AV片。在加入宇宙企划出了4部片，之后在hmp/MissChristine拍了两部片子，后来便于2003年转到了AliceJapan成了专属女优，历经五年AV生涯拍片上百部。",
        imagePath: "../../images/teacher-2.jpg"
      },
      {
        name: "小泽玛丽亚 Maria Ozawa",
        comment: "小泽玛利亚在高中毕业后，开始打工。在听说了朋友的朋友在做AV女优的事情之后，她也决定去做AV女优。2005年10月，出演了S1レーベル公司发行的AV作品后，作为AV女优正式出道。2006年8月26日，出演《チャンス!3海の家の宴》，这是她第一次在演唱会中亮相。",
        imagePath: "../../images/teacher-3.jpg"
      },
      {
        name: "神谷姬 Hime Kamiya",
        comment: "神谷姬原本是Million公司旗下艺人，隶属于REALWORKS公司。2005年一月出道的神谷姬，是MILLION相当看好的未来之星。2005年日本dvd冠军，走的是娇小清纯路线。由于她气质出众并且与女主播内田恭子神情相似，因此有“日本2005AV界头号一线新人”之称，在日本被誉为“美神”。",
        imagePath: "../../images/teacher-4.jpg"
      },      
    ],
    imageUrls: ['../../images/pic-1.jpg', '../../images/pic-2.jpg', '../../images/pic-3.jpg'],
    teachNav: [
      {images: '../../images/icon-1.png', text:'亚洲'},
      {images: '../../images/icon-2.png', text:'日本'},
      {images: '../../images/icon-3.png', text:'韩国'},
      {images: '../../images/icon-4.png', text:'欧美'},
      {images: '../../images/icon-5.png', text:'非洲'},
      {images: '../../images/icon-6.png', text:'德国'},
      {images: '../../images/icon-6.png', text:'朝鲜'},
      {images: '../../images/icon-5.png', text:'印度'},
      {images: '../../images/icon-4.png', text:'越南'},
      {images: '../../images/icon-3.png', text:'美国'},
      {images: '../../images/icon-2.png', text:'英国'},
      {images: '../../images/icon-1.png', text:'罗斯'}
    ]
  },
  
})
