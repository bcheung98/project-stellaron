export function elementalColors(element: string | undefined) {
    switch (element) {
        case "Physical":
            return `#a8a8a8`
        case "Fire":
            return `#e62a29`
        case "Ice":
            return `#07a0ff`
        case "Lightning":
            return `#b54bd3`
        case "Wind":
            return `#42c38c`
        case "Quantum":
            return `#6778fd`
        case "Imaginary":
            return `#e5b909`
        default:
            return `rgb(202, 166, 112)`
    }
}