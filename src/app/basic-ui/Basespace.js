import React from 'react'
import { Link } from 'react-router-dom'
const Basespace = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                            <h4  className="font-weight-normal mb-3 text-center"><Link to ='/basic-ui/Basespace1' style={{ color: '#9900cc',textDecoration:'none' }}>Projects</Link> </h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                        <h4 className="font-weight-normal mb-3 text-center">WhoAmI</h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card  card-img-holder text-black"  style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                            <h4 className="font-weight-normal mb-3 text-center">Biosamples</h4>
                        </div>
                        </div>
                    </div>
            </div>
            <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
                    <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                            <h4  className="font-weight-normal mb-3 text-center">Analysis </h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card  card-img-holder text-black" style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                        <h4 className="font-weight-normal mb-3 text-center">Applications</h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card  card-img-holder text-black"  style={{backgroundColor: '#fec107'}}>
                        <div className="card-body">
                        
                            <h4 className="font-weight-normal mb-3 text-center">Credits Remaining</h4>
                        </div>
                        </div>
                    </div>
          </div>
        
      
         
        </div>
    )
}

export default Basespace
