"use client";

import React, { useEffect, useState } from "react";

import { Subject } from "@/api/types";
import { GradeMap } from "../../types";
import { SubjectBlock } from "../SubjectBlock";
import { useSubjectsContext } from "../../context/subjects";
import { useGradesContext } from "../../context/grades";

export const SubjectsForm = () => {
  const { subjects, setSubjects } = useSubjectsContext();
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
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== deletedSubjectId)
    );
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

  return (
    <form>
      {subjects.map((subject) => {
        return (
          <SubjectBlock
            key={subject.id}
            subject={subject}
            onChange={handleGradeChange}
            onDeleteSubject={handleDeleteSubject}
            onClearGrade={handleClearGrade}
          />
        );
      })}
    </form>
  );
};
