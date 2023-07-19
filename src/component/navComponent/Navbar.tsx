const linksArray = [
    {
        id : 1,
        name: "HOME",
    },
    {
        id : 2,
        name: "PRODUITS",
    },
    {
        id : 3,
        name: "A PROPOS",
    },
    {
        id : 4,
        name: "CONTACT",
    },
]

const Links = () => {
    return (
        <nav>
            <ul>
                {linksArray.map((link) => <li key={link.id}>{link.name}</li>)}
            </ul>
        </nav>
    )
}
export default Links;