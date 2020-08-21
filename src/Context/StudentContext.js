import React, { createContext, useState } from "react";

export const StudentContext = createContext();

// 하위 컴포넌트들에게 학생 정보 Context를 넘겨주는 Provider
const StudentContextProvider = ({ children }) => {
    const [subjectList, setSubjectList] = useState([]);

    // 과목 추가
    const addSubject = subject => {
        setSubjectList([...subjectList, subject]);
    };

    // 과목 삭제
    const deleteSubject = id => {
        setSubjectList(subjectList.filter(item => item.id !== id));
    };

    return <StudentContext.Provider value={{ subjectList, addSubject, deleteSubject }}>{children}</StudentContext.Provider>;
};

// TODO - useStudentContext 만들기

export default StudentContextProvider;
