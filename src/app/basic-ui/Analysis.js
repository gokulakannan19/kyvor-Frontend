import React from 'react'

import { Link } from 'react-router-dom'
const Analysis = () => {
  return (
    <div>
      <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
                {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4  className="font-weight-normal mb-3 text-center"><Link to ='/analysis/projectform' style={{ color: '#9900cc',textDecoration:'none' }}>TO Pipeline </Link></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
               <h4 className="font-weight-normal mb-3 text-center">TN Pipeline </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}> 
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4 className="font-weight-normal mb-3 text-center">VCF Pipeline </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
                {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4  className="font-weight-normal mb-3 text-center">DSP Curation </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
               <h4 className="font-weight-normal mb-3 text-center">DE Curation </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black"  style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4 className="font-weight-normal mb-3 text-center">DGP Curation </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
                {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4  className="font-weight-normal mb-3 text-center"><Link to ='/basic-ui/Reports1' style={{ color: '#9900cc',textDecoration:'none' }}>Annovar</Link> </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
               <h4 className="font-weight-normal mb-3 text-center">AnnotSV </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
              <div className="card-body">
              {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4 className="font-weight-normal mb-3 text-center">MSI Sensor </h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analysis
