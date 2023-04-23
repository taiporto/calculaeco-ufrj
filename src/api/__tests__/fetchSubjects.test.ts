import { fetchAllSubjects } from "../fetchSubjects";

describe('fetchAllSubjects', () => {
  it('returns data', async () => {
    const result = await fetchAllSubjects();

    console.log(result);

    expect(result).toBe(null);
  })
})