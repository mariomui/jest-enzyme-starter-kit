
# Dependencies
"path": "^0.12.7",
  // this was necessary for webpack to concat the entry/output dir paths.
"react": "^16.7.0",
"react-dom": "^16.7.0",
  view stuff
"webpack": "^4.28.1"
  bundling stuff

# Other  
"jest": {
  "snapshotSerializers": [
    "jest-serializer-enzyme"
  ]
}    
* //needed to snapshot Components.

# "devDependencies": {
  "@babel/core": "^7.2.2",
  "babel-core": "^6.26.3",
  "babel-loader": "^8.0.4",
  "babel-plugin-transform-class-properties": "^6.24.1",
  "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
  "babel-preset-env": "^1.7.0",
  "babel-preset-react": "^6.24.1",
  "enzyme": "2.9.1",
  * enzyme 3.0 utterly breaks the entire jest build.
  "enzyme-adapter-react-16": "^1.7.1",
  * this adapter is also needed for enzyme/jest to work properly.
  
  "eslint": "^5.10.0",
  "eslint-config-airbnb": "^17.1.0",
  "eslint-plugin-import": "^2.14.0",
  "eslint-plugin-jsx-a11y": "^6.1.2",
  "eslint-plugin-react": "^7.11.1",
  * this all came from eslint --init
  
  "jest": "^23.6.0",
  * main framework for tests
  "jest-serializer-enzyme": "^1.0.0",

  "webpack-cli": "^3.1.2"
  * used to stop webpack from complaining
}
}
