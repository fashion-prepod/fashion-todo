
function validateIsEmpty (val) {
    return  val.trim().length === 0 ? 'You should type something' : '';
}

function validateHasNumbers (val) {
    return /^[0-9\s]+$/.test(val) ? 'String should not contain only numbers' : '';
}

function validateMinLength (val) {
    return val.length < 3 ? 'String length should be more than 3 chars' : '';
}


export const VALIDATION_TYPE = {
    IS_EMPTY: "IS_EMPTY",
    ONLY_NUMBERS: "ONLY_NUMBERS",
    MIN_LENGTH: "MIN_LENGTH",
    // должна быть одна большая буква,
    // один спец символ,
    // не должно быть пробелов,

};

const VALIDATION_HANDLERS = {
    IS_EMPTY: validateIsEmpty,
    ONLY_NUMBERS: validateHasNumbers,
    MIN_LENGTH: validateMinLength
};


export const validate = (val, config) => {
    return config.reduce((validationMessage, validationFuncName) => {
        return validationMessage ?
            validationMessage :
            VALIDATION_HANDLERS[validationFuncName](val);
    }, '');
};
