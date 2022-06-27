import { getEnvVarsFromString, replaceVars } from './helpers/replace.helpers';
import { ReplaceOptions } from './interfaces/replace.interface';

/**
 * Replace env variable in YAML file by his equivalent value present in .env
 * @param {string} text yaml variable
 * @param {ReplaceOptions} options an optional array of options
 * @returns a string with content replaced
 *
 * @example
 * ```ts
 * const textInYaml = 'www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}'; //your text from yaml variable
 * const replaced = envInYaml(textInYaml, { startDelimiter: '${ENV:', endDelimiter: '}' });
 * // output: 'www.google-VALUE_FOR_S3.comAsdsad&DHJHADSASD&Y'
 * ```
 */
export const envInYaml = (text: string, options?: ReplaceOptions): string => {
  const envVars = getEnvVarsFromString(text, options);

  if (Array.isArray(envVars)) {
    return replaceVars(envVars, text);
  }

  return text;
};
