import styled from 'styled-components'

export const NoticeWrap = styled.div `
    position: relative;
    width: 214px;
    height: 248px;
    margin-bottom: 10px;
    text-align: center;
    border: 1px solid #e6e6e6;
    background: #fcfcfa;
`;

export const NoticeTitle = styled.h3 `
    font: 700 16px/1 PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    overflow: hidden;
    width: 160px;
    margin: 0 auto 8px;
    padding-top: 12px;
`;

export const NoticeList = styled.div `
    padding-left: 5px;
`;

export const NoticeItem = styled.li `
    font: 14px/25px PingFangSC-Regular,'-apple-system',Simsun;
    overflow: hidden;
    height: 25px;
    margin-bottom: 5px;
    text-align: left;
`;

export const Brackets = styled.i `
    font-family: PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
`;