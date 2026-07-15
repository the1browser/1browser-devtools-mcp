<!-- AUTO GENERATED DO NOT EDIT - run 'npm run gen' to update-->

# 1Browser MCP Tool Reference

The tools in this reference are backed by 1Browser-specific DevTools Protocol methods typed in [`src/types/browser-profiles.d.ts`](../src/types/browser-profiles.d.ts) and implemented in [`src/tools/profiles.ts`](../src/tools/profiles.ts).

For a first-time 1Browser session, call [`login`](#login) first. It launches the browser login page so the user can authorize 1Browser and then use the full browser feature set.

## Protocol methods

| Tool                                                      | DevTools Protocol method         | Return type                           |
| --------------------------------------------------------- | -------------------------------- | ------------------------------------- |
| [`check_proxy_connection`](#check_proxy_connection)       | `Browser.checkProxyConnection`   | `OneBrowserStartedResponse`           |
| [`create_profile`](#create_profile)                       | `Browser.createProfile`          | `{profile: OneBrowserProfileInfo}`    |
| [`create_window_for_profile`](#create_window_for_profile) | `Browser.createWindowForProfile` | `OneBrowserWindowTargetResponse`      |
| [`delete_profile`](#delete_profile)                       | `Browser.deleteProfileById`      | `OneBrowserProfileSuccessResponse`    |
| [`generate_fingerprint`](#generate_fingerprint)           | `Browser.generateFingerprint`    | `OneBrowserStartedResponse`           |
| [`get_fingerprint_setting`](#get_fingerprint_setting)     | `Browser.getFingerprintSetting`  | `{setting: OneBrowserJsonObject}`     |
| [`get_fingerprint_settings`](#get_fingerprint_settings)   | `Browser.getFingerprintSettings` | `{settings: OneBrowserJsonObject}`    |
| [`get_profiles`](#get_profiles)                           | `Browser.getProfiles`            | `{profiles: OneBrowserProfileInfo[]}` |
| [`get_proxy_settings`](#get_proxy_settings)               | `Browser.getProxySettings`       | `{settings: OneBrowserJsonObject}`    |
| [`login`](#login)                                         | `Browser.login`                  | `OneBrowserWindowTargetResponse`      |
| [`logout`](#logout)                                       | `Browser.logout`                 | `OneBrowserAuthResponse`              |
| [`request_new_proxy`](#request_new_proxy)                 | `Browser.requestNewProxy`        | `OneBrowserStartedResponse`           |
| [`set_fingerprint_setting`](#set_fingerprint_setting)     | `Browser.setFingerprintSetting`  | `{setting: OneBrowserJsonObject}`     |
| [`set_proxy_settings`](#set_proxy_settings)               | `Browser.setProxySettings`       | `{settings: OneBrowserJsonObject}`    |
| [`set_proxy_type`](#set_proxy_type)                       | `Browser.setProxyType`           | `{settings: OneBrowserJsonObject}`    |
| [`signin`](#signin)                                       | `Browser.signin`                 | `OneBrowserAuthResponse`              |
| [`signup`](#signup)                                       | `Browser.signup`                 | `OneBrowserAuthResponse`              |
| [`verify`](#verify)                                       | `Browser.verify`                 | `OneBrowserAuthResponse`              |

- **[Debugging](#debugging)** (18 tools)
  - [`check_proxy_connection`](#check_proxy_connection)
  - [`create_profile`](#create_profile)
  - [`create_window_for_profile`](#create_window_for_profile)
  - [`delete_profile`](#delete_profile)
  - [`generate_fingerprint`](#generate_fingerprint)
  - [`get_fingerprint_setting`](#get_fingerprint_setting)
  - [`get_fingerprint_settings`](#get_fingerprint_settings)
  - [`get_profiles`](#get_profiles)
  - [`get_proxy_settings`](#get_proxy_settings)
  - [`login`](#login)
  - [`logout`](#logout)
  - [`request_new_proxy`](#request_new_proxy)
  - [`set_fingerprint_setting`](#set_fingerprint_setting)
  - [`set_proxy_settings`](#set_proxy_settings)
  - [`set_proxy_type`](#set_proxy_type)
  - [`signin`](#signin)
  - [`signup`](#signup)
  - [`verify`](#verify)

## Debugging

### `check_proxy_connection`

**Description:** Starts proxy health verification for a Chrome profile in the connected browser.

**Parameters:**

- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `create_profile`

**Description:** Creates a Chrome profile in the connected browser.

**Parameters:**

- **hidden** (boolean) _(optional)_: Whether to create the profile as hidden/omitted.
- **name** (string) _(optional)_: Display name for the profile.

---

### `create_window_for_profile`

**Description:** Creates a browser window for a Chrome profile.

**Parameters:**

- **profileId** (string) **(required)**: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `delete_profile`

**Description:** Deletes a Chrome profile by stable profile identifier. The default profile cannot be deleted.

**Parameters:**

- **profileId** (string) **(required)**: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `generate_fingerprint`

**Description:** Starts fetching a new fingerprint for a Chrome profile in the connected browser.

**Parameters:**

- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `get_fingerprint_setting`

**Description:** Gets one fingerprint masking setting for a Chrome profile in the connected browser.

**Parameters:**

- **name** (string) **(required)**: Masking preference name, for example "screen_resolution".
- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `get_fingerprint_settings`

**Description:** Gets all supported fingerprint masking settings for a Chrome profile in the connected browser.

**Parameters:**

- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `get_profiles`

**Description:** Gets the list of Chrome profiles from the connected browser.

**Parameters:** None

---

### `get_proxy_settings`

**Description:** Gets proxy settings for a Chrome profile in the connected browser.

**Parameters:**

- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `login`

**Description:** Opens the One Browser web [`login`](#login) page in the connected browser. Use this first in a new 1Browser session so the user can authorize 1Browser and unlock the full browser feature set.

**Parameters:** None

---

### `logout`

**Description:** Signs out the current One Browser user account.

**Parameters:** None

---

### `request_new_proxy`

**Description:** Requests a new catalog proxy for the current paid proxy type and country.

**Parameters:**

- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `set_fingerprint_setting`

**Description:** Sets one fingerprint masking setting for a Chrome profile in the connected browser.

**Parameters:**

- **name** (string) **(required)**: Masking preference name, for example "screen_resolution".
- **value** (any) **(required)**: New setting value. Expected type depends on the preference.
- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `set_proxy_settings`

**Description:** Sets all proxy settings for a Chrome profile in the connected browser.

**Parameters:**

- **settings** (object) **(required)**: Proxy values: {user, free, tor, datacenter, mobile, resident}.
- **type** (string) **(required)**: Proxy type display slug, for example "User proxy".
- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `set_proxy_type`

**Description:** Changes only the active proxy type for a Chrome profile in the connected browser.

**Parameters:**

- **type** (string) **(required)**: Proxy type display slug, for example "User proxy".
- **profileId** (string) _(optional)_: Stable profile identifier returned by [`get_profiles`](#get_profiles).

---

### `signin`

**Description:** Signs in a One Browser user account in the connected browser.

**Parameters:**

- **email** (string) **(required)**: User email address.
- **password** (string) **(required)**: User password.

---

### `signup`

**Description:** Registers a One Browser user account in the connected browser.

**Parameters:**

- **email** (string) **(required)**: User email address.
- **password** (string) **(required)**: User password.

---

### `verify`

**Description:** Sends email verification for the current One Browser user account.

**Parameters:** None

---
