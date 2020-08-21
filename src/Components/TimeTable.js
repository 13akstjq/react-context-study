import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StudentContext } from "../Context/StudentContext";
import TableText from "./TableText";

const Wrap = styled.div``;

const Title = styled.h2`
    text-align: center;
`;

const Table = styled.table`
    border: 1px solid #333;
    border-collapse: collapse;
    table-layout: fixed;
    width: 900px;
`;

const Th = styled.th`
    border: 1px solid #333;
`;

const Td = styled.td`
    border: 1px solid #333;
    height: 200px;
    padding: 8px;
    vertical-align: top;
`;

const TimeTable = () => {
    // StudentContext에서 과목리스트를 가져옴
    const { subjectList } = useContext(StudentContext);
    const days = ["월", "화", "수", "목", "금"];
    const [isInit, setIsInit] = useState(true);

    // 처음에 한번만 호출
    useEffect(() => {
        console.log("TimeTable - 생성");
        setIsInit(false);
    }, []);

    // subjectList 가 변경될 때마다 호출
    useEffect(() => {
        if (!isInit) console.log("TimeTable - 리렌더링");
    }, [subjectList]);

    return (
        <Wrap>
            <Title>시간표</Title>
            <Table>
                <colgroup>
                    <col width={"20%"}></col>
                </colgroup>
                <thead>
                    <tr>
                        <Th>월</Th>
                        <Th>화</Th>
                        <Th>수</Th>
                        <Th>목</Th>
                        <Th>금</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {days.map(day => (
                            <Td key={day}>
                                {subjectList.map(item => {
                                    if (item.day === day) return <TableText key={item.id} text={item.name} />;
                                })}
                            </Td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </Wrap>
    );
};

export default TimeTable;
