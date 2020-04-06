module.exports = {
  name: 'entries',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/entries',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
