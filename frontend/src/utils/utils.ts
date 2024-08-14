import { v4 as uuidv4 } from 'uuid';
export const generateUUID = () : string => {
    return uuidv4();
}

export const splitCamelCaseString = (str: string) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .trim();
}