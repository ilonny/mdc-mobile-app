import { request } from '../../../httpClient';
import { AUTOCOMPLETE_PLACES_PATH } from '../constants';
import { mapSuggestions } from '../helpers';
import { TRestrictions } from '../Select';

export const getSuggestionsRequest = async (
  searchTerm: string,
  restrictions?: TRestrictions,
) => {
  if (!restrictions) {
    restrictions = {};
  }
  const res = await request({
    method: 'POST',
    path: AUTOCOMPLETE_PLACES_PATH,
    body: JSON.stringify({
      input: searchTerm,
      ...restrictions,
    }),
  });
  if (Array.isArray(res?.data?.autocompletePredictions)) {
    return mapSuggestions(res?.data?.autocompletePredictions);
  }
  return res;
};
