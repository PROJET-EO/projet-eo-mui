export const addErrorIntoField = (errors:boolean, setValid:(value?:boolean)=>void):void => {
    errors? setValid(true) : setValid(false);
}