import estimator from './estimator';

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

describe('covid-19 estimator app', () => {
  describe('Check output object', () => {
    const output = estimator(input);

    test('Should return data object', () => {
      expect(output.data).toEqual(input);
    });
  });
});
