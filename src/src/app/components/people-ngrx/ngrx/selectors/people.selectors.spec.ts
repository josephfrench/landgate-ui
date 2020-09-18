import * as fromPeople from '../reducers/people.reducer';
import { selectPeopleState } from './people.selectors';

describe('People Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPeopleState({
      [fromPeople.peopleFeatureKey]: { people: []}
    });

    expect(result).toEqual({people: []});
  });
});
