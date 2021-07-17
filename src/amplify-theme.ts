/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import { StyleSheet } from 'react-native'
import { AmplifyTheme } from 'aws-amplify-react-native'

// TODO: Add more specific theme object with keys
export type AmplifyThemeType = Record<string, any>

// Colors
export const deepSquidInk = '#152939'
export const linkUnderlayColor = '#FFF'
export const textInputColor = '#000000'
export const textInputBorderColor = '#C4C4C4'
export const placeholderColor = '#C7C7CD'
export const buttonColor = '#185ADB'
export const disabledButtonColor = '#ff990080'

// Theme
export default StyleSheet.create({
  ...AmplifyTheme,
  sectionFooterLink: {
    fontSize: 14,
    color: buttonColor,
    alignItems: 'baseline',
    textAlign: 'center',
  },
  button: {
    backgroundColor: buttonColor,
    alignItems: 'center',
    padding: 16,
  },
})
