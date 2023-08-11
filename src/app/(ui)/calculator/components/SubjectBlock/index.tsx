import { Subject } from "@/api/types";
import React, { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { TextInput } from "@/components/general/Form/TextInput";

import * as Tooltip from "@radix-ui/react-tooltip";

import { x } from "@xstyled/styled-components";

import * as S from "./styles";
import { useSubjectsContext } from "../../context/subjects";

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
  const { subjects } = useSubjectsContext();

  const debounced = useDebouncedCallback(onChange, 1000);
  const inputRef = useRef<HTMLInputElement>(null);

  const subjectId = subject.id.toString() + subject.code;

  const clearGrade = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = "";
      onClearGrade(subject.id);
    }
  };

  return (
    <x.div textAlign="left" col={subjects.length > 1 ? 1 / 2 : 1} p={2}>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <x.label
              fontSize=".82rem"
              display="inline-block"
              maxW="85%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontWeight="medium"
              htmlFor={subjectId}
            >
              {subject.name}
            </x.label>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <S.TooltipContent className="TooltipContent" sideOffset={5}>
              {subject.name}
              <S.TooltipArrow className="TooltipArrow" />
            </S.TooltipContent>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <S.InputContainer>
        <TextInput
          ref={inputRef}
          id={subjectId}
          onChange={(event) => debounced(event)}
          type={"number"}
          max="10"
          min="0"
          step="0.1"
          rightSlot={
            <button
              onClick={clearGrade}
              value="Limpar nota"
              aria-label="Limpar nota"
            >
              <ReloadIcon />
            </button>
          }
        />
        <div>
          <button
            onClick={() => onDeleteSubject(subject.id)}
            value={"Deletar matéria"}
            aria-label="Deletar matéria"
          >
            <TrashIcon />
          </button>
        </div>
      </S.InputContainer>
    </x.div>
  );
};

export { SubjectBlock };
