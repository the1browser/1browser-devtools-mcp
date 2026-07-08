/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {zod} from '../third_party/index.js';

import {ToolCategory} from './categories.js';
import {
  definePageTool,
  type Response as ToolResponse,
} from './ToolDefinition.js';

function appendJsonResponse(response: ToolResponse, value: unknown) {
  response.appendResponseLine('```json');
  response.appendResponseLine(JSON.stringify(value, null, 2));
  response.appendResponseLine('```');
}

export const getProfiles = definePageTool({
  name: 'get_profiles',
  description: 'Gets the list of Chrome profiles from the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: true,
  },
  schema: {},
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.getProfiles');

    appendJsonResponse(response, result);
  },
});

export const createProfile = definePageTool({
  name: 'create_profile',
  description: 'Creates a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    name: zod.string().optional().describe('Display name for the profile.'),
    hidden: zod
      .boolean()
      .optional()
      .describe('Whether to create the profile as hidden/omitted.'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.createProfile', request.params);

    appendJsonResponse(response, result);
  },
});

export const createWindowForProfile = definePageTool({
  name: 'create_window_for_profile',
  description: 'Creates a browser window for a Chrome profile.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: zod
      .string()
      .describe('Stable profile identifier returned by get_profiles.'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.createWindowForProfile', {
      profileId: request.params.profileId,
    });

    appendJsonResponse(response, result);
  },
});

export const signup = definePageTool({
  name: 'signup',
  description: 'Registers a One Browser user account in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    email: zod.string().email().describe('User email address.'),
    password: zod.string().min(1).describe('User password.'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.signup', {
      email: request.params.email,
      password: request.params.password,
    });

    appendJsonResponse(response, result);
  },
});

export const login = definePageTool({
  name: 'login',
  description: 'Opens the One Browser web login page in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {},
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.login');

    appendJsonResponse(response, result);
  },
});

export const signin = definePageTool({
  name: 'signin',
  description: 'Signs in a One Browser user account in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    email: zod.string().email().describe('User email address.'),
    password: zod.string().min(1).describe('User password.'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.signin', {
      email: request.params.email,
      password: request.params.password,
    });

    appendJsonResponse(response, result);
  },
});

export const verify = definePageTool({
  name: 'verify',
  description:
    'Sends email verification for the current One Browser user account.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {},
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.verify');

    appendJsonResponse(response, result);
  },
});

export const logout = definePageTool({
  name: 'logout',
  description: 'Signs out the current One Browser user account.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {},
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.logout');

    appendJsonResponse(response, result);
  },
});
