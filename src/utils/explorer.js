export const explorer = (json, criteria) => {
    
    //Recursive
    const recursiveSearch = (json, depth = 0, actualRoute = "") => {
        
        if(Array.isArray(json)){
            //Arrays loop.
            for(let i = 0; i < json.length; i++){
                const result = recursiveSearch(json[i], depth + 1, `${actualRoute}[${i}]`)
                if (result) return result
            }

        } else if (typeof(json) === "object" && json !== null) {
            //Objects loops, looking for our target.
            for(const [key, val] of Object.entries(json)){
                const newPath = actualRoute ? `${actualRoute}.${key}` : key
                if(newPath === criteria){
                    //bingo! we have got it
                    return val
                }
            const result = recursiveSearch(val, depth + 1, newPath)
            if (result) return result
            }
            
        }

        return undefined
    }

    return recursiveSearch(json)
}