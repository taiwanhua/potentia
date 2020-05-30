import React, { useEffect, useState } from 'react';

export const useFetch = (url_,param_) => {
    console.log(param_)
    const [State, setState] = useState(null);

    useEffect(() => {
        const MyFetch = async (Url_, Parma_ = {}) => {
            try {
                const Response = await fetch(Url_, Parma_)
                    .then(Result => {
                        const ResultJson = Result.clone().json();//Respone.clone()

                        return ResultJson;
                    })
                    .then((PreResult) => {
                        setState(PreResult)
                        console.log(PreResult)
                        return PreResult;
                    })
                    .catch((Error) => {

                    })
                    .finally(() => {

                    });

                return Response;
            } catch (Error) {

            }
        }
        
        MyFetch(url_,param_)

    }, [url_,param_])

    return State;
}


