import React, { RefObject, useRef } from "react";
import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { x } from "@xstyled/styled-components";
import { useDebouncedCallback } from "use-debounce";

import { Subject } from "@/api/types";
import { TextInput } from "@/components/general/Form/TextInput";

import { useSubjectsContext } from "../../context/subjects";

import * as S from "./styles";

type SubjectBlockProps = {
  subject: Subject;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteSubject: (deletedSubjectId: Subject["id"]) => void;
  onClearGrade: (subjectId: Subject["id"]) => void;
};

function isEllipsisActive(ref: RefObject<HTMLLabelElement>) {
  if (!ref.current) return true;

  const element = ref.current;

  if (element.clientWidth < element.scrollWidth) {
    var style = window.getComputedStyle(element);
    return style.textOverflow === "ellipsis";
  }

  return false;
}

const SubjectBlock = ({
  subject,
  onChange,
  onDeleteSubject,
  onClearGrade,
}: SubjectBlockProps) => {
  const { subjects } = useSubjectsContext();

  const debounced = useDebouncedCallback(onChange, 1000);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const subjectId = subject.id.toString() + subject.code;

  const clearGrade = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = "";
      onClearGrade(subject.id);
    }
  };

  return (
    <x.div textAlign="left" col={subjects.length > 1 ? 1 / 2 : 1} p={4}>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <x.label
              ref={labelRef}
              fontSize=".9rem"
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
            <S.TooltipContent
              sideOffset={-1}
              $shouldActivate={isEllipsisActive(labelRef)}
            >
              {subject.name}
              <S.TooltipArrow />
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
