let count = 1;

export const resetId = () => {
  count = 1;
}

export const getNextId = () => {
  return `element-id-${count++}`;
}