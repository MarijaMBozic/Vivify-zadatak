import React, { useState, useEffect } from "react";

const yearRegex=/^(19[0-9]\d|20[0-4]\d|2050)$/

function useValidationField(value) {
    const [isvalid, setIsValid] = useState(true);

    useEffect(() => {
        (value.title) && 
        (value.subtitle) && 
        (value.description) && 
        (value.year) && (yearRegex.test(value.year)) &&
        (value.imageUrl) ?
            setIsValid(true) : setIsValid(false)
    }, [value])

    return isvalid
}

export default useValidationField