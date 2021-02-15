function testCircleRadiusDefaultsTo10() {
  var note = new Note();

  if (note.radius !== 10) {
    throw new Error("Circle size is not 10");
  }
};

testCircleRadiusDefaultsTo10();
