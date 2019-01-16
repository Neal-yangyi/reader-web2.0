import styled from 'styled-components'

export const RankListWrap = styled.div `
    position: relative;
    z-index: 1;
    float: left;
    width: 216px;
    
`;

export const Title = styled.h3 `
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    overflow: hidden;
    padding-bottom: 4px;
    color: #1a1a1a;
    border-bottom: 1px solid #666;
`;

export const FirstPlace = styled.li `
    clear: both;
    zoom: 1;
    height: 114px;
    margin-bottom: -1px;
`;

export const BookWrap = styled.div `
`;

export const BookInfo = styled.div `
    width: 132px;
    float: left;
`;

export const BookCover = styled.div `
    position: relative;
    z-index: 4;
    float: right;
    width: 52px;
    height: 91px;
    margin-top: -3px;
    margin-right: 8px;
    text-align: center;
`;

export const Cover = styled.img `
    width: 52px;
    height: 87px;
    outline: 1px solid transparent;
`;

export const First = styled.h3 `
    font: 700 14px/18px Arial;
    width: 36px;
    height: 18px;
    margin-bottom: 3px;
    text-align: center;
    color: #fff;
    background: #bf2c24;
`;

export const FirstTitle = styled.h4 `
    font: 16px/24px PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    overflow: hidden;
    height: 24px;
    color: #1a1a1a;
`;

export const RecNum = styled.em `
    font-family: Arial;
    font-size: 18px;
    margin-right: 3px;
`;

export const Digital = styled.p `
    font-size: 12px;
    overflow: hidden;
    height: 24px;
    margin-bottom: 4px;
    padding: 3px 0 0;
    color: #bf2c24;
`;

export const Author = styled.p `
    font-family: PingFangSC-Regular,'-apple-system',Simsun;
    font-size: 12px;
    overflow: hidden;
    height: 16px;
`;

export const Point = styled.i `
    color: #a6a6a6;
    font-family: Arial;
    margin: 0 5px;
`;

export const RankListItem = styled.li `
    clear: both;
    height: 31px;
`;

export const NumBox = styled.div `
    float: left;
    width: 28px;
    height: 32px;
`;

export const Second = styled.span `
    color: #fff;
    background: #e67225;
    font: 700 14px/16px Arial;
    display: block;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin-top: 8px;
    text-align: center;
    letter-spacing: -1px;
`;

export const Third = styled.span `
    color: #fff;
    background: #e6bf25;
    font: 700 14px/16px Arial;
    display: block;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin-top: 8px;
    text-align: center;
    letter-spacing: -1px;
`;

export const Other = styled.span `
    font: 700 14px/16px Arial;
    display: block;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin-top: 8px;
    text-align: center;
    letter-spacing: -1px;
    color: #666;
    background: #ededed;
`;

export const NameBox = styled.div `
    position: relative;
    float: left;
    height: 30px;
    border-top: 1px solid #e6e6e6;
`;

export const Total = styled.i `
    font: 12px/32px PingFangSC-Regular,'-apple-system',Simsun;
    float: right;
    overflow: hidden;
    width: 72px;
    text-align: right;
    white-space: normal;
    text-overflow: ellipsis;
    color: #b3b3b3;
`;