import React, { useState } from 'react'

import {LocalHead} from '@/components/general/Head/index'
import { Subject } from '@/api/types'
import { fetchSubjectsByTermAndMajor } from '@/api/fetchSubjects'

type Props = {
  fetchedSubjects: Array<Subject>;
}

type Grade = {
  [x: string]: number;
}

const Calculator = ({fetchedSubjects}:Props) => {

  const [subjects, setSubjects] = useState(fetchedSubjects);
  const [grades, setGrades] = useState<Grade>({});

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const {value, id} = e.target;

    setGrades((prevGrades) => {
      return {
        ...prevGrades,
        [prevGrades[id]]: value
      }
    })
  }

  const handleAddSubjects = () => {
    
  }

  return (
    <>
      <LocalHead pageName='Calculadora'/>
      <main>
        {subjects.map(subject => {
          return (
            <div key={subject.id}>
              <h3>
                {subject.name}
              </h3>
              <form>
                <input id={subject.id} onChange={handleGradeChange} value={grades[subject.id]} type={'number'}/>
              </form>
            </div>
          )
        })}
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {

  const {term, major} = context?.query;

  const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

  return {
    props: {
      fetchedSubjects
    }
  }
}

export default Calculator;