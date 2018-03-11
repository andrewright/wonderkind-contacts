export const isEqualObjects = (object1, object2) => Object.keys(object1).every(key => object1[key] === object2[key]);
