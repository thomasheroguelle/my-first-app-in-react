import style from "./ContainerFlexBetween.module.css"

interface ContainerFlexBetweenProps {
    children: JSX.Element | JSX.Element[];
    title? : string;
}

const ContainerFlexBetween = (props: ContainerFlexBetweenProps) => {
    const { children, title } = props;
    return (
        <div className={style.wrapper}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
export default ContainerFlexBetween