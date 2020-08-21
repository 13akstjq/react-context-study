import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.span`
    font-size: 12px;
    display: block;
    margin-top: 4px;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #333;
`;

const TableText = ({ text }) => {
    const [isInit, setIsInit] = useState(true);

    // 처음에 한번만 호출
    useEffect(() => {
        console.log("TableText - 생성");
        setIsInit(false);
    }, []);

    // 컴포넌트가 사라질 때 호출
    useEffect(() => {
        return () => {
            console.log("TableText - 삭제");
        };
    }, []);

    return <Text>{text}</Text>;
};

export default TableText;
