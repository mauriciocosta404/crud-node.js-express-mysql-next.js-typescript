import * as C from './style';
const Header=()=>{
    return(
        <C.NavContainer>
            <ul>
                <li><a className='active' href="/">Cadastrar</a></li>
                <li><a href="/gamesList">Games</a></li>
            </ul>
        </C.NavContainer>
    )
}
export default Header;