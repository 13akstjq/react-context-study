import React, { useEffect } from "react";
import SubjectItem from "./SubjectItem";
import styled from "styled-components";

const Wrap = styled.div`
    max-width: 500px;
`;

const Title = styled.h2`
    text-align: center;
`;

const List = styled.ul`
    border: 1px solid #333;
    padding: 0;
`;

const SubjectList = () => {
    const subjectList = [
        {
            id: "1",
            day: "월",
            name: "React 뿌수기",
            score: "2"
        },
        {
            id: "2",
            day: "화",
            name: "Vuex를 이용한 상태관리",
            score: "2"
        },
        {
            id: "3",

            day: "수",
            name: "Redux-saga 기초",
            score: "2"
        },
        {
            id: "4",
            day: "목",
            name: "styled-components 심화"
        },
        {
            id: "5",
            day: "금",
            name: "React Hook 기초",
            score: "2"
        },
        {
            id: "6",

            day: "화",
            name: "Jest 활용하기",
            score: "2"
        },
        {
            id: "7",
            day: "목",
            name: "React 렌더링 최적화 심화",
            score: "2"
        }
    ];

    // 처음에 한번만 호출
    useEffect(() => {
        console.log("SubjectList - 생성");
    }, []);

    return (
        <Wrap>
            <Title>수강 가능한 과목</Title>
            <List>
                {subjectList.map(subjectItem => (
                    <SubjectItem key={subjectItem.id} subject={subjectItem} />
                ))}
            </List>
        </Wrap>
    );
};

export default SubjectList;
