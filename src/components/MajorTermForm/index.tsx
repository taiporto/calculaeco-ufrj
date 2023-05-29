import { Major } from "@/api/types";
import { useFetchAllMajorsData } from "@/hooks/useFetchMajorsData";
import React, { ChangeEvent, useRef } from "react";

type MajorTermFormType = {
  setMajor: (value: string) => void;
  setTerm: (value: string) => void;
  submitButtonValue: string;
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
};

const MajorTermForm = ({
  setMajor,
  setTerm,
  submitButtonValue,
  handleSubmitForm,
}: MajorTermFormType) => {
  const termRef = useRef<HTMLSelectElement>(null);

  const { isLoading, error, majorsData } = useFetchAllMajorsData();

  if (error) {
    console.error(error);
    return null;
  }

  const resetSelectability = () => {
    termRef.current
      ?.querySelectorAll("option")
      .forEach((option) => ((option as HTMLOptionElement).disabled = false));
  };

  const handleMajorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    resetSelectability();

    const { value } = e.target;

    setMajor(value);

    if (["jcs", "pp", "pe", "rtv"].includes(value)) {
      const baseCurriculumOptions = termRef.current?.querySelectorAll(
        "option.base_curriculum"
      );

      if (baseCurriculumOptions) {
        baseCurriculumOptions.forEach((option) => {
          (option as HTMLOptionElement).disabled = true;
        });
      }
    }

    if (value === "cs") {
      const specializationOptions = termRef.current?.querySelectorAll(
        "option.specialization"
      );

      if (specializationOptions) {
        specializationOptions.forEach((option) => {
          (option as HTMLOptionElement).disabled = true;
        });
      }
    }
  };

  const handleTermChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTerm(e.target.value);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    !isLoading && majorsData && (
      <form onSubmit={handleSubmitForm}>
        <select
          name="major"
          onChange={handleMajorChange}
          defaultValue={"default"}
        >
          <option value="default" disabled>
            {" "}
            --Selecione o curso--{" "}
          </option>
          {majorsData.map((major: Major) => (
            <option key={major.id} id={major.id} value={major.id}>
              {major.name}
            </option>
          ))}
        </select>
        <select
          name="term"
          onChange={handleTermChange}
          defaultValue={"default"}
          ref={termRef}
        >
          <option value="default" disabled>
            {" "}
            --Selecione o período--{" "}
          </option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((term) => {
            return (
              <option
                className={term <= 3 ? "base_curriculum" : "specialization"}
                id={`${term}_periodo`}
                key={`${term}_periodo`}
                value={term}
              >
                {term}º período
              </option>
            );
          })}
        </select>
        <input type="submit" value={submitButtonValue} />
      </form>
    )
  );
};

export default MajorTermForm;
