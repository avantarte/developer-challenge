type TTag = "Available" | "Coming soon" | "Sold out"

interface IWork {
    id: number
    title: string,
    tags: Array<TTag>,
    image: string,
    url: string,
    price: number
}