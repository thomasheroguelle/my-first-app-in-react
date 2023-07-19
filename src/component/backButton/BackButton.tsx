// const BackButton = () => {
//     return (<button>Back</button>)
// }
// export default BackButton;

import { log } from "console";

// 1
// const Button = () => {
//     return <button className={style.button} type="button" onClick={() => alert("hi!")}>
//     Say hi!
//   </button>
// }

// 2
// const BackButton = () => {
//     return <button onMouseOver={() => console.log("CLIQUE !!!!!!!!")}>
//         Back
//     </button>;
// };
// const BackButton = () => {
//     return <button onMouseOut={() => alert("NE PARS PAS !!!!")}>
//         Back
//     </button>;
// };
const BackButton = () => {
    return <button onMouseDown={() => console.log("File moi tes identifiants ")}>
        Back
    </button>;
};


export default BackButton;
