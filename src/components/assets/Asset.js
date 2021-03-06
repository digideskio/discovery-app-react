import React from 'react'
import CSSModules from 'react-css-modules'
import prettyBytes from 'pretty-bytes'
import formatDate from '../../utils/format-date'
import styles from './Asset.css'
import Thumbnail from './Thumbnail'

function Asset ({asset}) {
  return <div styleName='asset-container'>
    <div styleName='preview'>
      <a href={`${asset.fields.file.url}`} target='_blank'>
        <Thumbnail url={asset.fields.file.url} fileName={asset.fields.file.fileName} size='500' />
      </a>
    </div>
    <div styleName='metadata'>
      <section styleName='left'>
        <div>
          <h3>Title</h3>
          <h2>{asset.fields.title}</h2>
        </div>
        <div>
          <h3>Description</h3>
          <p>{asset.fields.description || 'No description provided.'}</p>
        </div>
        <div>
          <h3>Creation Date</h3>
          <p>{formatDate(asset.sys.createdAt)}</p>
        </div>
      </section>
      <section>
        <div>
          <h3>File Name</h3>
          <p>{asset.fields.file.fileName}</p>
        </div>
        <div>
          <h3>URL</h3>
          <p><a href={`${asset.fields.file.url}`} target='_blank'>https:{asset.fields.file.url}</a></p>
        </div>
        <div>
          <h3>MIME Type</h3>
          <p>{asset.fields.file.contentType}</p>
        </div>
        <div>
          <h3>Size</h3>
          <p>{prettyBytes(asset.fields.file.details.size)}</p>
        </div>
      </section>
    </div>
  </div>
}

export default CSSModules(Asset, styles)
