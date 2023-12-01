## Create Expo project
npx create-expo-app AwesomeProject

- for Typescript
npx create-expo-app -t expo-template-blank-typescript AwesomeProject

add 
```package.json
{
  "scripts": {
    "ts:check": "tsc"
    ... 
  }
}
```

## Start the project
cd AwesomeProject
npx expo start

npx expo install