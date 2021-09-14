const makeRequest = (typeOfReq, distination, body) =>{
    if(typeOfReq === "GET"){
        return fetch(distination);
    } else {
        return fetch(distination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    }
};

export default makeRequest;

