import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StudentContext } from "../Context/StudentContext";

const Item = styled.li`
    display: flex;
    padding: 6px 8px;
    list-style-type: none;

    & + & {
        border-top: 1px solid #000;
    }
`;

const Day = styled.span``;

const Name = styled.em`
    margin-left: 16px;
    font-weight: bold;
`;

const ButtonWrap = styled.div`
    margin: 0 0 0 auto;
`;

const Button = styled.button`
    margin-left: 8px;
`;

const AddButton = styled(Button)``;

const DeleteButton = styled(Button)``;

const SubjectItem = ({ subject }) => {
    const { subjectList, addSubject, deleteSubject } = useContext(StudentContext);
    const isSelected = subjectList.filter(item => item.id === subject.id).length;
    const [isInit, setIsInit] = useState(true);

    // 처음에 한번만 호출
    useEffect(() => {
        console.log("SubjectItem - 생성");
        setIsInit(false);
    }, []);

    // isSelected 가 변경될 때마다 호출
    useEffect(() => {
        if (!isInit) console.log("SubjectItem - 리렌더링", subject);
    }, [isSelected]);

    return (
        <Item>
            <Day>{subject.day}</Day>
            <Name>{subject.name}</Name>
            <ButtonWrap>
                <AddButton type={"button"} disabled={isSelected} onClick={() => addSubject(subject)}>
                    추가
                </AddButton>
                <DeleteButton type={"button"} disabled={!isSelected} onClick={() => deleteSubject(subject.id)}>
                    삭제
                </DeleteButton>
            </ButtonWrap>
        </Item>
    );
};

export default SubjectItem;
