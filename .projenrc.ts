import { awscdk } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'emailgocdk',
  packageManager: NodePackageManager.NPM,
  projenrcTs: true,

  deps: [
    // 'aws-lambda',
    // 'constructs',
    '@aws-cdk/aws-lambda-go-alpha',
  ],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});


project.synth();
