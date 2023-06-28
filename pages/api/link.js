
// const Youtube = require('youtube-node')
import * as fs from 'fs'

const ytdl = require('ytdl-core')


export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const info = await ytdl.getInfo(body.val)
    // const vid = await ytdl.chooseFormat(info.formats,{quality:"highestaudio"})
    const vid = info.formats.filter(x => x.quality == "tiny")[4]
    console.log(info.formats)

  res.status(200).json({url:vid.url})
// })

}
  