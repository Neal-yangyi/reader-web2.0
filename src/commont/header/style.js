import styled from 'styled-components'

export const TopNav = styled.div `
    height: 35px;
    border-bottom: 1px solid #e5e5e5;
    background: #f7f7f7;
`;

export const TopWrap = styled.div `
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
`;

export const SiteName = styled.span `
    position: relative;
    width: 80px;
    max-width: 80px;
    height: 36px;
    margin-right: 10px;
    margin-bottom: -1px;
    text-align: center;
    color: #575757;
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    background: #fff;
    font: 12px/35px PingFangSC-Regular,'-apple-system',Simsun;
    overflow: hidden;
    float: left;
    transition: color .3s,background-color .3s;
    
    &:hover {
        color: red;
    }
`;

export const LoginBox = styled.div `
    font: 12px/35px PingFangSC-Regular,'-apple-system',Simsun;
    float: right;
    color: #a6a6a6;
    position: relative;
`;

export const LoginBtn = styled.span `
    color: #262626;
    position: relative;
    display: block;
    height: 36px;
    float: left;
    cursor:pointer;
    
    &:hover {
        color: red;
    }
`;

export const Separator = styled.em `
    font: 12px/35px Arial;
    margin: 0 10px;
    color: #d9d9d9;
    float: left;  
`;

export const RegBtn = styled.span `
    font: 12px/35px PingFangSC-Regular,'-apple-system',Simsun;
    overflow: hidden;
    height: 35px;
    color: #a6a6a6;
    cursor:pointer;
    
    &:hover {
        color: red;
    }
`;

export const Username = styled.span `
    color: #262626;
    float: left;
    
    &:hover {
        color: red;
    }
`;

export const Message = styled.span `
    color: #262626;
    float: left;
    
    &:hover {
        color: red;
    }
`;

export const Logout = styled.span `
    color: #262626;
    float: left;
    
    &:hover {
        color: red;
    }
`;