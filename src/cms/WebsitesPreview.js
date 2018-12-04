import React from 'react'
import { WebsiteTemplate } from '../templates/website'

const WebsitePreview = ({ entry, widgetFor }) => (
  <WebsiteTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
)

export default WebsitePreview
