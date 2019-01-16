import styled from 'styled-components'

export const Title = styled.h3 `
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    overflow: hidden;
    padding-bottom: 4px;
    color: #1a1a1a;
    border-bottom: 1px solid #666;
    font-family: FZZCYSK;
`;

export const BookList = styled.ul `
    overflow: hidden;
    height: 568px;
`;

export const BookItem = styled.li `
    border-top: 1px solid #e6e6e6;
    height: 31px;
    overflow: hidden;
`;

export const Brackets = styled.em `
    font-family: PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    font-size: 13px;
`;

export const NovelName = styled.strong `
    position: relative;
    float: left;
    margin-left: -3px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap
    color: #1a1a1a;
`;