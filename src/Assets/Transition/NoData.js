import styled from 'styled-components';

const Banner = styled.div`
    position: absolute;
    bottom: 10px;
    padding : 0 5px;
    border-radius: 5px;
    animation: 2s slide-right;
    font-size: 0.5rem!important;
    background-color: black;

    @keyframes slide-right {
    from{
            margin-left: -100%;
        }
      to{
            margin-left: 0%;
        }
    }
  `

function NoData() {
    return (
        <Banner><p style={{ color: 'white' }}> No data recieved! </p></Banner>
    );
}

export default NoData;