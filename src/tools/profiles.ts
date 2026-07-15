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

const optionalProfileIdSchema = zod
  .string()
  .optional()
  .describe('Stable profile identifier returned by get_profiles.');

const objectPayloadSchema = zod.record(zod.string(), zod.unknown());

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

export const deleteProfile = definePageTool({
  name: 'delete_profile',
  description:
    'Deletes a Chrome profile by stable profile identifier. The default profile cannot be deleted.',
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
    const result = await session.send('Browser.deleteProfileById', {
      profileId: request.params.profileId,
    });

    appendJsonResponse(response, result);
  },
});

export const getFingerprintSetting = definePageTool({
  name: 'get_fingerprint_setting',
  description:
    'Gets one fingerprint masking setting for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: true,
  },
  schema: {
    profileId: optionalProfileIdSchema,
    name: zod
      .string()
      .describe('Masking preference name, for example "screen_resolution".'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.getFingerprintSetting',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const getFingerprintSettings = definePageTool({
  name: 'get_fingerprint_settings',
  description:
    'Gets all supported fingerprint masking settings for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: true,
  },
  schema: {
    profileId: optionalProfileIdSchema,
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.getFingerprintSettings',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const setFingerprintSetting = definePageTool({
  name: 'set_fingerprint_setting',
  description:
    'Sets one fingerprint masking setting for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
    name: zod
      .string()
      .describe('Masking preference name, for example "screen_resolution".'),
    value: zod
      .any()
      .describe('New setting value. Expected type depends on the preference.'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.setFingerprintSetting', {
      profileId: request.params.profileId,
      name: request.params.name,
      value: request.params.value,
    });

    appendJsonResponse(response, result);
  },
});

export const generateFingerprint = definePageTool({
  name: 'generate_fingerprint',
  description:
    'Starts fetching a new fingerprint for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.generateFingerprint',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const getProxySettings = definePageTool({
  name: 'get_proxy_settings',
  description:
    'Gets proxy settings for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: true,
  },
  schema: {
    profileId: optionalProfileIdSchema,
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.getProxySettings',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const setProxySettings = definePageTool({
  name: 'set_proxy_settings',
  description:
    'Sets all proxy settings for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
    type: zod
      .string()
      .describe('Proxy type display slug, for example "User proxy".'),
    settings: objectPayloadSchema.describe(
      'Proxy values: {user, free, tor, datacenter, mobile, resident}.',
    ),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.setProxySettings',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const setProxyType = definePageTool({
  name: 'set_proxy_type',
  description:
    'Changes only the active proxy type for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
    type: zod
      .string()
      .describe('Proxy type display slug, for example "User proxy".'),
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send('Browser.setProxyType', request.params);

    appendJsonResponse(response, result);
  },
});

export const checkProxyConnection = definePageTool({
  name: 'check_proxy_connection',
  description:
    'Starts proxy health verification for a Chrome profile in the connected browser.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.checkProxyConnection',
      request.params,
    );

    appendJsonResponse(response, result);
  },
});

export const requestNewProxy = definePageTool({
  name: 'request_new_proxy',
  description:
    'Requests a new catalog proxy for the current paid proxy type and country.',
  annotations: {
    category: ToolCategory.DEBUGGING,
    readOnlyHint: false,
  },
  schema: {
    profileId: optionalProfileIdSchema,
  },
  blockedByDialog: false,
  verifyFilesSchema: [],
  handler: async (request, response) => {
    const session = await request.page.pptrPage.createCDPSession();
    const result = await session.send(
      'Browser.requestNewProxy',
      request.params,
    );

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
  description:
    'Opens the One Browser web login page in the connected browser. Use this first in a new 1Browser session so the user can authorize 1Browser and unlock the full browser feature set.',
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
