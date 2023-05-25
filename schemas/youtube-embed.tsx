import React from 'react'
import getYouTubeId from 'get-youtube-id'
import {defineField, defineType} from 'sanity'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const id = getYouTubeId(url)
  return (
    <div className="custom-youtube-video-embed">
      {renderDefault({...props, title: 'YouTube Embed'})}
      <LiteYouTubeEmbed id={id} />
    </div>
  )
}

export default defineType({
  name: 'YoutubeEmbed',
  title: 'Insertar Youtube',
  type: 'object',
  preview: {
    select: {
      url: 'url',
      title: 'title'
    },
  },
  components: {
    preview: Preview,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Ttulo',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
})
