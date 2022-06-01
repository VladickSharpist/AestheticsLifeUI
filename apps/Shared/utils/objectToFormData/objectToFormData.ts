const isArray = (value: any) => Array.isArray(value);
const isBoolean = (value: any) => typeof value === 'boolean';
const isObject = (value: any) => typeof value === 'object' && !isArray(value);
const isDate = (value: any) => value instanceof Date;

const isBlob = (value: any) => value
  && typeof value.size === 'number'
  && typeof value.type === 'string'
  && typeof value.slice === 'function';

const isFile = (value: any) => isBlob(value)
  && typeof value.name === 'string'
  && (typeof value.lastModifiedDate === 'object'
    || typeof value.lastModified === 'number');

export const objectToFormData = (data: Object) => {
  const formData = new FormData();
  //@ts-ignore
  const serializer = ([key, value]) => {
    if (value === null) return formData.append(key, '');
    if (isBoolean(value)) return formData.append(key, value);
    if (isArray(value)) {
      return value.forEach((val: any, index: number) => serializer([
        isFile(val) ? key : `${key}[${index}]`,
        val,
      ]));
    }
    if (isDate(value)) return formData.append(key, value.toISOString());
    if (isObject(value) && !isFile(value) && !isBlob(value)) {
      return Object.entries(value).forEach(([objKey, objVal]) => serializer([
        `${key}[${objKey}]`,
        objVal,
      ]));
    }

    return formData.append(key, value);
  };

  Object.entries(data).forEach(serializer);

  return formData;
};
