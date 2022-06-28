# env-in-yaml

Simplest way to use environment variables in your .yml/.yaml files


### Instalation

```
# with npm
npm install env-in-yaml

# or with Yarn
yarn add env-in-yaml

```

### Usage and Example
First, you need to configure the .env file with the necessary variables, like the example below:

```
# .env
S3_BUCKET=myBucket
SECRET_KEY=ASBNAAYSTBAHAGSJA
```
Then configure and get the desired variable in your.yml/.yaml file. There are several ways and tools to do this, and I won't go into those details. Let's just assume that after setting up the .yaml file, you stored the `url` variable in the `url` constant

```yaml
# .yaml
URL="www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}"

```
Note that the variable to be substituted is between the delimiters "${ENV:" and "}" .
You can override this setting by passing an `options` argument in the `envInYaml` function.

Once you get the variable you want in your .YML/.YAML file, just call the `envInYaml` function.

```ts
import { envInYaml } from 'env-in-yaml'

const url = 'www.google-${ENV:S3_BUCKET}.com${ENV:SECRET_KEY}'
const replaced = envInYaml(myVarFromYaml)
// output: www.google-myBucket.comASBNAAYSTBAHAGSJA

```

### Release History
- 1.0.0
  - Initial release
  
### Contributing
Any help is extremely welcome and I would love it! Feel free to submit your PR!
  
### Meta
Lucas Torres [@olucasdev](https://twitter.com/olucasdev)  
Follow me on Github and Twitter and get in touch !!  
I will love to talk about tech 😄!  
https://github.com/torreslucas13  


  

