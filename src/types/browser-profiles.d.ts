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

interface OneBrowserProfileSuccessResponse {
  success: boolean;
}

interface OneBrowserStartedResponse {
  started: boolean;
}

type OneBrowserJsonObject = Record<string, unknown>;

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
      'Browser.deleteProfileById': {
        paramsType: [{profileId: string}];
        returnType: OneBrowserProfileSuccessResponse;
      };
      'Browser.getFingerprintSetting': {
        paramsType: [{profileId?: string; name: string}];
        returnType: {setting: OneBrowserJsonObject};
      };
      'Browser.getFingerprintSettings': {
        paramsType: [{profileId?: string}?];
        returnType: {settings: OneBrowserJsonObject};
      };
      'Browser.setFingerprintSetting': {
        paramsType: [{profileId?: string; name: string; value: unknown}];
        returnType: {setting: OneBrowserJsonObject};
      };
      'Browser.generateFingerprint': {
        paramsType: [{profileId?: string}?];
        returnType: OneBrowserStartedResponse;
      };
      'Browser.getProxySettings': {
        paramsType: [{profileId?: string}?];
        returnType: {settings: OneBrowserJsonObject};
      };
      'Browser.setProxySettings': {
        paramsType: [
          {profileId?: string; type: string; settings: OneBrowserJsonObject},
        ];
        returnType: {settings: OneBrowserJsonObject};
      };
      'Browser.setProxyType': {
        paramsType: [{profileId?: string; type: string}];
        returnType: {settings: OneBrowserJsonObject};
      };
      'Browser.checkProxyConnection': {
        paramsType: [{profileId?: string}?];
        returnType: OneBrowserStartedResponse;
      };
      'Browser.requestNewProxy': {
        paramsType: [{profileId?: string}?];
        returnType: OneBrowserStartedResponse;
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
