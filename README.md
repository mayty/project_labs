**Notes App** - cross platform iOS & Android mobile app for creating notes, which provides multiple ways of organizing things and follows popular mobile apps best practices. </br>

**Notes App** will use `serverless` implementation. This means what it would have only `Front-End` part.

- `TypeScript` & `JavaScript` - main languages & technologies for developing cross platform part of app
- `React Native` - core part of mobile app.
- `React` - core part of mobile app UI.
- `Firebase` - e.g. `Cloud Firestore` will be used for `serverless` implementation.
- `Visual Studio Code`, `XCode`, `Android Studio` - main IDEs for developing and building mobile app

#### Authentication flow

- user is able to create account with existed `Google` accounts or create separated account by `email` & `password`.
- sign up & sign in with `Social Accounts` (only `Google`) and with `email` & `password`


#### Search flow
- opportunity to find user notes by title + body values.

#### Detail note view flow

- this screen offer ability to interact with note by change note content, provide color for note background, pin note, etc.
- this also support many feature from `MainScreen` - e.g. removing note, etc.

#### Settings

- theme mode, manage account, about page.
- user is able to sign out from this screen.
- password change.
- deactivating account.
- selecting app theme.
- sign out ability.


### Notes
- note creation.
- displaying all user notes.
- search notes by title.
- customize note by changing color.
- edit & remove notes.

### General
- custom error handling (drop-down alerts)


- **Notes App** should follow best native mobile apps practices for iOS and Android.
- **Notes App** should be a performance optimized and reliable software product.
