export const explorer = (json, criteria) => {
    
    //Recursive
    const recursiveSearch = (json, actualRoute = "") => {
        
        if(Array.isArray(json)){
            //Arrays loop.
            for(let i = 0; i < json.length; i++){
                const result = recursiveSearch(json[i], `${actualRoute}[${i}]`)
                if (result) return result
            }

        } else if (typeof(json) === "object" && json !== null) {
            //Objects loops, looking for our target.
            for(const [key, val] of Object.entries(json)){
                // not falsy actualRoute is added to the path, otherwise we provide just key
                const newPath = actualRoute ? `${actualRoute}.${key}` : key
                if(newPath === criteria){
                    /*
                      found!;_)
                      format in case of null or object (avoiding [object Object])
                    */
                    if (val === null) {
                        return "null"
                    } else if (typeof val !== "object"){
                        return String(val)
                    }
                }
            const result = recursiveSearch(val, newPath)
            if (result) return result
            }           
        }
        return undefined
    }

    return recursiveSearch(json)
}