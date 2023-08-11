"use client";

import React, { useCallback } from "react";

import { Subject } from "@/api/types";
import { GradeMap } from "../../types";
import { SubjectBlock } from "../SubjectBlock";
import { useSubjectsContext } from "../../context/subjects";
import { useGradesContext } from "../../context/grades";

import { x } from "@xstyled/styled-components";
import { FormContainer } from "@/components/general/Form/styles";

export const SubjectsForm = () => {
  const { subjects, updateSubjects: setSubjects } = useSubjectsContext();
  const { setGrades } = useGradesContext();

  const calculateWidth = () => {
    if (!subjects) return "100%";

    const { length } = subjects;

    if (!length) return "100%";

    if (length === 1) return "70%";

    return "55%";
  };

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    const weight = subjects.find((subject) => subject.id === +id)?.weight;

    setGrades((prevGrades) => {
      return new Map(
        prevGrades.set(+id, {
          value: +value,
          weight: weight ?? 0,
        })
      );
    });
    return;
  };

  const handleDeleteSubject = (deletedSubjectId: Subject["id"]) => {
    handleClearGrade(deletedSubjectId);
    setSubjects(subjects.filter((subject) => subject.id !== deletedSubjectId));
  };

  const handleClearGrade = (subjectId: Subject["id"]) => {
    setGrades((prevGrades: GradeMap) => {
      if (prevGrades) {
        const newMap = new Map(prevGrades);
        if (newMap.has(subjectId) && newMap.delete(subjectId))
          return newMap as GradeMap;
      }
      return prevGrades;
    });
  };

  const renderSubjectBlock = (subject: Subject) => {
    return (
      <SubjectBlock
        key={subject.id}
        subject={subject}
        onChange={handleGradeChange}
        onDeleteSubject={handleDeleteSubject}
        onClearGrade={handleClearGrade}
      />
    );
  };

  return (
    <x.div p={10}>
      <FormContainer
        row
        m="-2 auto"
        justifyContent="center"
        w={calculateWidth()}
      >
        {subjects && subjects.length ? (
          subjects.map(renderSubjectBlock)
        ) : (
          <p>Adicione algumas matérias!</p>
        )}
      </FormContainer>
    </x.div>
  );
};
