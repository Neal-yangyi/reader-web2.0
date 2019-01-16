import styled from 'styled-components'

export const ClassifyList = styled.div `
    position: relative;
    top: -11px;
    width: 214px;
    height: 240px;
    border: 1px solid #e6e6e6;
    border-top: none;
    float: left;
`;

export const ClassifyItem = styled.div `
    float: left;
    width: 50%;
    height: 60px;
    background: #f7f6f2;
`;

export const Label = styled.cite `
    padding-left: 17px;
    position: relative;
    display: block;
    overflow: hidden;
    height: 60px;
    padding-top: 10px;
`;

export const Icon = styled.i `
    float: left;
    width: 24px;
    height: 24px;
    margin: 2px 8px 0 0;
    transition: margin ease-out .3s;
    font-size: 24px;
    font-style: normal;
`;

export const Title = styled.span `
    float: left;
    max-width: 30px;
`;

export const LabelName = styled.i `
    font: 14px/1 PingFangSC-Regular,'-apple-system',Simsun;
`;