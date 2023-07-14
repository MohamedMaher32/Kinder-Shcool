import React from 'react'
import blog1 from '../../Image/single_blog_1.png'
import blog2 from '../../Image/single_blog_2.png'
import blog3 from '../../Image/single_blog_4.png'
export default function Blog() {
  return (
    <div className="blog">
      <div className="landing">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="lessons">
        <div className="container d-flex justify-content-center align-items-center flex-column g-4">
          <div className="card w-75 border-0 shadow">
            <img src={blog1} className="card-img-top" alt="..." />
            <div className="card-body p-5">
              <h5 className="card-title">Google inks pact for new 35-storey office.</h5>
              <p className="card-text text-muted my-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <div>
                <i className="fa-solid fa-user fs-6 text-muted me-2"></i> 
                <span className='text-muted'>Lifestyle</span> | 
                <i className="fa-solid fa-comment fs-6 text-muted mx-2"></i>
                <span className='text-muted'>03 Comments</span>
              </div>
            </div>

          </div>
          <div className="card w-75 border-0 shadow my-4">
            <img src={blog2} className="card-img-top" alt="..." />
            <div className="card-body p-5">
              <h5 className="card-title">Google inks pact for new 35-storey office.</h5>
              <p className="card-text text-muted my-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <div>
                <i className="fa-solid fa-user fs-6 text-muted me-2"></i> 
                <span className='text-muted'>Lifestyle</span> | 
                <i className="fa-solid fa-comment fs-6 text-muted mx-2"></i>
                <span className='text-muted'>03 Comments</span>
              </div>
            </div>

          </div>
          <div className="card w-75 border-0 shadow">
            <img src={blog3} className="card-img-top" alt="..." />
            <div className="card-body p-5">
              <h5 className="card-title">Google inks pact for new 35-storey office.</h5>
              <p className="card-text text-muted my-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <div>
                <i className="fa-solid fa-user fs-6 text-muted me-2"></i> 
                <span className='text-muted'>Admin</span> | 
                <i className="fa-solid fa-comment fs-6 text-muted mx-2"></i>
                <span className='text-muted'>03 Comments</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
