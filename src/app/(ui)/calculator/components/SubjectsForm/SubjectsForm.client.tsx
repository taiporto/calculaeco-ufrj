"use client";

import React, { Suspense } from "react";

import { Subject } from "@/api/types";
import { GradeMap } from "../../types";
import { SubjectBlock } from "../SubjectBlock";
import { useSubjectsContext } from "../../context/subjects";
import { useGradesContext } from "../../context/grades";
import Loading from "../../../loading";

export const SubjectsForm = () => {
  const {
    subjects,
    updateSubjects: setSubjects,
    isLoading: areSubjectsLoading,
  } = useSubjectsContext();
  const { setGrades } = useGradesContext();

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    const weight = subjects.find((subject) => subject.id === id)?.weight;

    console.log({ value, id, weight });

    setGrades((prevGrades) => {
      return new Map(
        prevGrades.set(id, {
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

  return <form>{subjects.map(renderSubjectBlock)}</form>;
};
