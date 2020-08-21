import React from "react";
import SubjectList from "./SubjectList";
import styled from "styled-components";
import TimeTable from "./TimeTable";
import StudentContextProvider from "../Context/StudentContext";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

function App() {
    return (
        <StudentContextProvider>
            {/* 하위에 있는 모든 컴포넌트에서 학생 정보를 사용할 수 있음 */}
            <Wrapper>
                <SubjectList></SubjectList>
                <TimeTable></TimeTable>
            </Wrapper>
        </StudentContextProvider>
    );
}

export default App;
