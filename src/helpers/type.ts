import type {SelectObject} from "../type/select-object";

export const objToArrSelectObject = (obj: object): SelectObject[] => {
    return Object.entries(obj).map(([key, value]) => ({value: key.toString(), title: value.toString()}));
}
