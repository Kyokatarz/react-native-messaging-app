import { registerRootComponent } from 'expo'
import Amplify, { Auth } from 'aws-amplify'
import awsExports from './src/aws-exports'

// Amplify.configure({
//   Analytics: { disabled: true },
//   aws_appsync_graphqlEndpoint:
//     'https://7hcvmcuifrgv3jkxeuthtycv7a.appsync-api.us-east-1.amazonaws.com/graphql',
//   aws_appsync_region: 'us-east-1',
//   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
// })

Auth.configure({ ...awsExports })

import App from './src/App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
