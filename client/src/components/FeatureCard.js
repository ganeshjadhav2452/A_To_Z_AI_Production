import React from 'react'
import { useNavigate } from 'react-router-dom'




const FeatureCard = ({ featureHeading, featureSubHeading, featureDescription, path, icon }) => {
    const navigate = useNavigate()
    const IconComponent = icon;



    return (
        <>
            <div className={'p-2 col-lg-3 col-md-4 col-sm-6'}>
                <h4 className="mb-2 fw-bold" >
                    {featureHeading}
                </h4>
                <div
                    role="button"
                    onClick={() => navigate(`${path}`)}
                    className=" card shadow-lg shadow-sm shadow-lg productCard rounded rounded-2 "

                >
                    {<IconComponent
                        sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                    />}
                    <div className="p-3 pt-0" >
                        <h5 className="fw-bold" >
                            {featureSubHeading}
                        </h5>
                        <h6 >
                            {featureDescription}
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard