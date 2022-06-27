import 'dotenv/config';
import { END_DELIMITER, START_DELIMITER } from '../constants/replace.constants';
import { ReplaceOptions } from '../interfaces/replace.interface';

const envVars: string[] = [];

export const getEnvVarsFromString = (text: string, options?: ReplaceOptions) => {
  const startDelimiter = options?.startDelimiter || START_DELIMITER;
  const endDelimiter = options?.endDelimiter || END_DELIMITER;

  try {
    const middleText = text.split(startDelimiter)[1].split(endDelimiter)[0];

    if (middleText) {
      envVars.push(middleText);
      const newText = text.replace(startDelimiter + middleText + endDelimiter, 'Rand0mText');

      getEnvVarsFromString(newText);
    }
    return envVars;
  } catch (error) {
    console.log('No env variable found');
  }
};

export const replaceVars = (envVars: string[], text: string, options?: ReplaceOptions): string => {
  const startDelimiter = options?.startDelimiter || START_DELIMITER;
  const endDelimiter = options?.endDelimiter || END_DELIMITER;
  let texto = text;
  envVars.forEach((envVar) => {
    const env = process.env[envVar];
    if (env) {
      texto = texto.replace(startDelimiter + envVar + endDelimiter, env);
    }
  });

  return texto;
};
