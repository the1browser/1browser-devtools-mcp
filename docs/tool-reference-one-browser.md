<!-- AUTO GENERATED DO NOT EDIT - run 'npm run gen' to update-->

# 1Browser MCP Tool Reference

The tools in this reference are backed by 1Browser-specific DevTools Protocol methods typed in [`src/types/browser-profiles.d.ts`](../src/types/browser-profiles.d.ts) and implemented in [`src/tools/profiles.ts`](../src/tools/profiles.ts).

## Protocol methods

| Tool                                                      | DevTools Protocol method         | Return type                           |
| --------------------------------------------------------- | -------------------------------- | ------------------------------------- |
| [`create_profile`](#create_profile)                       | `Browser.createProfile`          | `{profile: OneBrowserProfileInfo}`    |
| [`create_window_for_profile`](#create_window_for_profile) | `Browser.createWindowForProfile` | `OneBrowserWindowTargetResponse`      |
| [`get_profiles`](#get_profiles)                           | `Browser.getProfiles`            | `{profiles: OneBrowserProfileInfo[]}` |
| [`login`](#login)                                         | `Browser.login`                  | `OneBrowserWindowTargetResponse`      |
| [`logout`](#logout)                                       | `Browser.logout`                 | `OneBrowserAuthResponse`              |
| [`signin`](#signin)                                       | `Browser.signin`                 | `OneBrowserAuthResponse`              |
| [`signup`](#signup)                                       | `Browser.signup`                 | `OneBrowserAuthResponse`              |
| [`verify`](#verify)                                       | `Browser.verify`                 | `OneBrowserAuthResponse`              |

- **[Debugging](#debugging)** (8 tools)
  - [`create_profile`](#create_profile)
  - [`create_window_for_profile`](#create_window_for_profile)
  - [`get_profiles`](#get_profiles)
  - [`login`](#login)
  - [`logout`](#logout)
  - [`signin`](#signin)
  - [`signup`](#signup)
  - [`verify`](#verify)

## Debugging

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

### `get_profiles`

**Description:** Gets the list of Chrome profiles from the connected browser.

**Parameters:** None

---

### `login`

**Description:** Opens the One Browser web [`login`](#login) page in the connected browser.

**Parameters:** None

---

### `logout`

**Description:** Signs out the current One Browser user account.

**Parameters:** None

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
