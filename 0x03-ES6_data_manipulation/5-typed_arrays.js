const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // create buffer with length bytes
  const buffer = new ArrayBuffer(length);
  // create DataView to manipulate the buffer
  const view = new DataView(buffer);

  // starting from byte 'position' modify that byte to have the value of 'value'
  view.setInt8(position, value);

  return view;
};

export default createInt8TypedArray;
