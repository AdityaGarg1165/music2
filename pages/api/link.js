
// const Youtube = require('youtube-node')
import * as fs from 'fs'
const ytdl = require('ytdl-core')
import { YouTube } from 'nodetube'
const { youtube } = require("ytdownloader-fts");
// const youtubedl = require('youtube-dl-exec')
const youtubedl = require('@distube/youtube-dl')

export default async function handler(req, res) {
    const body = JSON.parse(req.body)

    youtubedl(body.val, {
  dumpSingleJson: true,
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  preferFreeFormats: true,
  youtubeSkipDashManifest: true,
//   referer: 'https://example.com'
})
  .then(output => res.status(200).json({url:output['requested_formats'][1]['url']}))


    



    // })

    // const srch = await yt.search('no reason')


}
  