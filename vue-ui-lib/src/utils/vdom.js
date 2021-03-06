export function isVNode(node) {
  return node !== null && typeof node === 'object' && node.hasOwnProperty('componentOptions');
};
