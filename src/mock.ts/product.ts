export interface IProductImg {
    src: string,
    alt: string
}

export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    isAvailable: boolean,
    image: IProductImg
}

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        title: "Burger",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 10,
        image: {
            src: "/IMG.png",
            alt: "photo d'un burger "
        },
        isAvailable: true
    },
    {
        id: 2,
        title: "Pizza",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 10,
        image: {
            src: "/IMG.png",
            alt: "photo d'un burger "
        },
        isAvailable: true
    },
    {
        id: 3,
        title: "Dessert",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 10,
        image: {
            src: "/IMG.png",
            alt: "photo d'un burger "
        },
        isAvailable: true
    }
]

export interface ILinks {
    id: number,
    title: string,
    url: string
}
export const LINKS: ILinks[] = [
    {
        id: 1,
        title: "Microsoft",
        url: "https://www.microsoft.com/fr-fr"
    },
    {
        id: 2,
        title: "Apple",
        url: "https://www.apple.com/fr/"
    },
    {
        id: 3,
        title: "Meta ",
        url: "https://about.meta.com/fr/"
    },
    {
        id: 3,
        title: "Amazon ",
        url: "https://www.amazon.fr/"
    },
    {
        id: 3,
        title: "Alphabet ",
        url: "https://www.instagram.com/"
    },
]