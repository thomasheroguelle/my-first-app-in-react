import style from "./ContainerFlexArround.module.css"

interface ContainerFlexArroundProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

const ContainerFlexArround = (props: ContainerFlexArroundProps) => {
    const { title, children } = props;
    return (
        <div className={style.wrapper}>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </div>

    )
}
export default ContainerFlexArround;