import styled from "styled-components";
import { Button } from "components/Button";
import Imgproduct from "assets/image-product.svg";
import CartIcon from "assets/v6-icon (free).svg"
import tree1 from "assets/tree1.svg"
import tree2 from "assets/tree2.svg"


const HeaderStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    text-align: center;
    height: auto;
    width: 100%;
    padding: 0 300px 60px 304px;
    line-height: 64px;
    background-color: #F0F0F0;

    .Layout-Content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1226px;
    }

    .title-header{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 686px;  
              
    }

    .title-header h1{
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 74px;
        line-height: 55px;
        text-transform: capitalize;

    }

    .title-header p{
        font-family: 'Roboto';
        text-align: left;
        font-weight: 400;
        font-size: 30px;
        line-height: 55px;
        text-transform: capitalize;

    }
    
    .flex-container{
        display: flex; 
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .flex-container p {
        margin: 0;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 29px;
        line-height: 34px;
    }

    .title-header Button:hover{
        background-color: #ff6f61;
        cursor: pointer;
    }

    .Group-tree img:first-child{
        position: absolute;
        width: 132.34px;
        left: 0px;
        top: 375px;
    }

    .Group-tree img:last-child{
        width: auto;
        position: absolute;
        right: 0;
        top: 165px;
    
    }

`;


const Header = () => {
    return (
        <HeaderStyled>
            <div className='Layout-Content'>
            <img src={tree1} alt="tree1" />

                <div className='title-header'>
                    <h1>Collections</h1>
                    <p>you can explore ans shop many differnt collection
                        from various barands here.</p>
                    <Button className='flex-container' width="223px" height="72px" bgColor="#1E2832" textColor="#fff">
                            <img src={CartIcon} alt='cart-icon' ></img> 
                            <p>Shop now</p></Button>
                </div>
                <img src={Imgproduct} alt="img-product" />
                <img src={tree2} alt="tree2" />

            </div>
            <div className="Group-tree">
            </div>
        </HeaderStyled>
    );
};

export default Header;