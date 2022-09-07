import { PropsWithChildren, ReactNode } from "react";
import Header from '../header/header';
const MainContainer=({children}:PropsWithChildren)=>{
    return(
        <main>
                <Header/>
                {children}
        </main>
    )
}
export default MainContainer;