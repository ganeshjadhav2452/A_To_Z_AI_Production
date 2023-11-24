import React from "react";


import { features } from '../constants/index'
import FeatureCard from "../components/FeatureCard";
const Homepage = () => {
    console.log(features)
    // {featureHeading , featureSubHeading, featureDescription}

    return (
        <div className="container-fluid p-3  ">
            <div className="row  d-flex flex-row  ">

                {
                    features.map((feature) => {
                        return <FeatureCard key={feature.id} featureHeading={feature.featureHeading} featureSubHeading={feature.featureSubHeading} featureDescription={feature.featureDescription} path={feature.path} icon={feature.icon} />
                    })
                }
            </div>
        </div>
    );
};

export default Homepage;