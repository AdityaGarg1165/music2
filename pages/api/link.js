
// const Youtube = require('youtube-node')
import * as fs from 'fs'
const ytdl = require('ytdl-core')
import { YouTube } from 'nodetube'
const { youtube } = require("ytdownloader-fts");

const youtubedl = require('youtube-dl-exec')
export default async function handler(req, res) {
    const body = JSON.parse(req.body)

youtubedl(body.val, {
  dumpSingleJson: true,
  noCheckCertificates: true,
  audioFormat:'mp3',
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: [
    'referer:youtube.com',
    'user-agent:googlebot'
  ]

}).then(output => {
    console.clear()
    // console.log(output['requested_formats'][1])
    res.status(200).json({url:output['requested_formats'][1]['url']})


})


    
    // const resu = await youtube("https://www.youtube.com/watch?v=UFzpAh-x_IY&ab_channel=Discoverychannel")
    // console.log(body.val);

    // })

    // const srch = await yt.search('no reason')


}
  