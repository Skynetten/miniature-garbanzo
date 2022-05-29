import styled from "styled-components";


const Foot = styled.div`
    
    bottom:0 ;
    width: 100%;
    height:205px ;
    padding:20px;
    position: relative;
    text-align: center;
    background-color: #274153;
`

function Footer() {
    return (
        <Foot> <a href="/#">Privacy Policy</a> | &copy; 2022 Highradius Corporation. All Rights Reserved </Foot>
    );
}

export default Footer;