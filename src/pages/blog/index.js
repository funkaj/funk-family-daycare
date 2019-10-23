import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/pexels-photo-1741230.jpeg')`,
            
          }}
        >
          <h1
            className="is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 rgb(255, 240, 102), -0.5rem 0 0 rgb(255, 240, 102)',
              backgroundColor: 'rgb(255, 240, 102)',
              color: '#9933cc',
              fontFamily:  'Permanent Marker',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
