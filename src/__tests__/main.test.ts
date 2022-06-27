const { envInYaml } = require('../main');

describe('main', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  it('should be able to return replaced text if everything is correct', () => {
    process.env.S3_BUCKET = 'VALUE_FOR_S3';
    process.env.SECRET_KEY = 'VALUE_FOR_SECRET_KEY';

    const text = 'www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}';
    const expectedResult = 'www.google-VALUE_FOR_S3.comVALUE_FOR_SECRET_KEY';

    expect(envInYaml(text)).toBe(expectedResult);
  });

  it('should be able to return the same text if no env variable is found', () => {
    const text = 'www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}';
    const expectedResult = 'www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}';

    expect(envInYaml(text)).toBe(expectedResult);
  });
});
