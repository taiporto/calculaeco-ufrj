import { Subject } from "@/api/types";
import React, { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { TextInput } from "@/components/general/Form/TextInput";

import * as S from "./styles";

type SubjectBlockProps = {
  subject: Subject;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteSubject: (deletedSubjectId: Subject["id"]) => void;
  onClearGrade: (subjectId: Subject["id"]) => void;
};

const SubjectBlock = ({
  subject,
  onChange,
  onDeleteSubject,
  onClearGrade,
}: SubjectBlockProps) => {
  const debounced = useDebouncedCallback(onChange, 1000);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearGrade = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = "";
      onClearGrade(subject.id);
    }
  };

  return (
    <div>
      <h3 id={`${subject.name}_label`}>{subject.name}</h3>
      <S.InputContainer>
        <TextInput
          ref={inputRef}
          id={subject.id}
          aria-labelledby={`${subject.name}_label`}
          onChange={(event) => debounced(event)}
          type={"number"}
          max="10"
          min="0"
          step="0.1"
        />
        <S.Buttons>
          <button
            onClick={clearGrade}
            value="Limpar nota"
            aria-label="Limpar nota"
          >
            <ReloadIcon />
          </button>

          <button
            onClick={() => onDeleteSubject(subject.id)}
            value={"Deletar matéria"}
            aria-label="Deletar matéria"
          >
            <TrashIcon />
          </button>
        </S.Buttons>
      </S.InputContainer>
    </div>
  );
};

export { SubjectBlock };
