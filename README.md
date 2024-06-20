

# Smart Spender

## Trouble shooting

#### Build Issues:
- If on running `yarn ios --device` the error `Could not find scheme...` and the available escheme is showed right after:

1- Open the file: `node_modules/@react-native-community/cli-platform-apple/build/tools/getBuildConfigurationFromXcScheme.js`
2- On line 50, on the `find()` function, add the following right after the first validation 
`&& dir.charAt(0) !== '.'`