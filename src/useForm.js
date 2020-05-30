import React, { useState } from 'react';

export const useForm = (initialValue, regExp) => {

    const [Value, setValue] = useState(initialValue);

    return [Value, (e) => { setValue(e.target.value) }, RegExp(regExp).test(Value) ? null : <p>驗證錯誤</p>]
}