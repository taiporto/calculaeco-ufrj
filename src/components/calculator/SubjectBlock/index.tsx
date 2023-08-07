import { Subject } from "@/api/types";
import React, { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { TextInput } from "@/components/general/Form/TextInput";

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
      <div>
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
        <button
          onClick={clearGrade}
          value="Limpar nota"
          aria-label="Limpar nota"
        >
          <ReloadIcon />
        </button>
      </div>

      <button
        onClick={() => onDeleteSubject(subject.id)}
        value={"Deletar matéria"}
        aria-label="Deletar matéria"
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export { SubjectBlock };
