module.exports = function validateFormDataAndResponse(condition, formData, responseObject , strictCheck = false) {
    if (!condition && (!formData || !responseObject)) {
        throw new Error('formData and responseObject are mandatory when condition is false');
    }
    let isValid = false;
    if (condition) {
        for (const key in formData) {
            if (formData[key] == "" || formData[key] == null) {
                isValid = false;
            } else {
                isValid = true;
                break;
            }
        }
    } else {
        const keys = Object.keys(formData);
        if (strictCheck) {
            for (let key of keys) {
                if (key in responseObject) {
                    if (formData[key] === responseObject[key]) {
                        isValid = false;
                    } else {
                        isValid = true;
                        break;
                    }
                }
            }
        } else {
            for (let key of keys) {
                if (key in responseObject) {
                    if (formData[key] == responseObject[key] || (formData[key] == null && responseObject[key] == "") || (formData[key] == "" && responseObject[key] == null)) {
                        isValid = false;
                    } else {
                        isValid = true;
                        break;
                    }
                }
            }
        }
    }

    return isValid;
};
