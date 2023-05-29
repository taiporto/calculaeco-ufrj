import { Subject } from "@/api/types";
import MajorTermForm from "@/components/MajorTermForm";
import { useFetchSubject } from "@/pages/calculator/hooks/useFetchSubject";
import React, { ChangeEvent, useState } from "react";

type AddSubjectModalProps = {
  handleAddSubject: (subjectData: Subject) => void;
};

const AddSubjectModal = ({ handleAddSubject }: AddSubjectModalProps) => {
  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>();
  const [isSelectSubjectOpen, setIsSelectSubjectOpen] = useState(false);
  const [newSubjectId, setNewSubjectId] = useState<string>("");

  const { refetch } = useFetchSubject(newSubjectId, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const addSubject = async (): Promise<void> => {
    if (!refetch) return;

    const { isLoading, data: subjectData, error } = await refetch();

    if (error) {
      console.log(error);
      return;
    }

    if (!isLoading && subjectData) {
      handleAddSubject(subjectData);
    }
  };

  const handleSubmitPreForm = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const fetchedSubjects = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/subjects?term=${term}&major=${major}`
    )
      .then((res: Response) => {
        if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

        return res.json();
      })
      .catch((e) => console.error(e));

    setSubjects(fetchedSubjects);

    setIsSelectSubjectOpen(true);
  };

  const handleNewSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewSubjectId(e.target.value);
  };

  const handleSubmitSubjectForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newSubjectId) return;
    addSubject();
  };

  return (
    <div>
      <MajorTermForm
        setMajor={setMajor}
        setTerm={setTerm}
        submitButtonValue="Pesquisar matérias"
        handleSubmitForm={handleSubmitPreForm}
      />
      {isSelectSubjectOpen && subjects && (
        <form onSubmit={handleSubmitSubjectForm}>
          <select
            name="new-subject"
            onChange={handleNewSubjectChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              {" "}
              --Selecione a matéria--{" "}
            </option>
            {subjects.map((subject) => {
              return (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Adicionar matéria" />
        </form>
      )}
    </div>
  );
};

export { AddSubjectModal };
