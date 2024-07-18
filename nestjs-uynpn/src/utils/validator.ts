export function validateAndParseNumber(value: any): number {
    if (typeof value !== 'string') {
        throw new Error(`Invalid number: ${value}`);
    }
    
    const parsedValue = parseInt(value, 10);
    
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw new Error(`Invalid number: ${value}`);
    }
    
    return parsedValue;
}
