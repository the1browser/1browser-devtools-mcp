/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import 'devtools-protocol/types/protocol-mapping.js';

interface OneBrowserProfileInfo {
  id: string;
  name: string;
  localName: string;
  path: string;
  omitted: boolean;
  signinRequired: boolean;
  ephemeral: boolean;
}

interface OneBrowserAuthResponse {
  success: boolean;
  responseCode: number;
  body?: string;
}

interface OneBrowserWindowTargetResponse {
  windowId: number;
  targetId: string;
}

declare module 'devtools-protocol/types/protocol-mapping.js' {
  namespace ProtocolMapping {
    interface Commands {
      'Browser.getProfiles': {
        paramsType: [];
        returnType: {profiles: OneBrowserProfileInfo[]};
      };
      'Browser.createProfile': {
        paramsType: [{name?: string; hidden?: boolean}];
        returnType: {profile: OneBrowserProfileInfo};
      };
      'Browser.createWindowForProfile': {
        paramsType: [{profileId: string}];
        returnType: OneBrowserWindowTargetResponse;
      };
      'Browser.signup': {
        paramsType: [{email: string; password: string}];
        returnType: OneBrowserAuthResponse;
      };
      'Browser.login': {
        paramsType: [];
        returnType: OneBrowserWindowTargetResponse;
      };
      'Browser.signin': {
        paramsType: [{email: string; password: string}];
        returnType: OneBrowserAuthResponse;
      };
      'Browser.verify': {
        paramsType: [];
        returnType: OneBrowserAuthResponse;
      };
      'Browser.logout': {
        paramsType: [];
        returnType: OneBrowserAuthResponse;
      };
    }
  }
}
