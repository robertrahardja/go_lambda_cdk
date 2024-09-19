import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import { GoFunction } from '@aws-cdk/aws-lambda-go-alpha'

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...

    const goFunction = new GoFunction(this, 'GoFunction', {
      entry: 'lambda',
      functionName: 'GoLambda',
    })

    const functionUrl = goFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ['*'],
        allowedMethods: [lambda.HttpMethod.ALL],
        allowedHeaders: ['*'],
      }
    })

    new cdk.CfnOutput(this, 'GoFunctionUrl', {
      value: functionUrl.url,
      description: 'The URL of the Go function'
    })
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'emailgocdk-dev', { env: devEnv });
// new MyStack(app, 'emailgocdk-prod', { env: prodEnv });

app.synth();
