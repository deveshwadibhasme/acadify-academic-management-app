
export default function createRes(type, message, result) {
    
    if (result) return { type: type, message: message, result: result }

    else return { type: type, message: message }
}