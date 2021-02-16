function testCircleRadiusDefaultsTo10() {
  let note = new Note();
  assert.isTrue(note.radius === 10);
};

testCircleRadiusDefaultsTo10();
