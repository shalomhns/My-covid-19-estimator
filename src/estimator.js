const covid19ImpactEstimator = (data) =>  {

let {periodType, region, reportedCases, population, totalHospitalBeds} = data;

return {
  data,
  impact: {currentlyinfected},
  severeImpact: {}
}
};

export default covid19ImpactEstimator;
