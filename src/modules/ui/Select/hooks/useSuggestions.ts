import { TRestrictions } from './../Select';
import { useState, useCallback } from 'react';
import { getSuggestionsRequest } from '../network';

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState<null | Array<any>>(null);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);

  const getSuggestions = useCallback(
    async (searchTerm: string, restrictions?: TRestrictions) => {
      setSuggestionsLoading(true);
      const res = await getSuggestionsRequest(searchTerm, restrictions);
      setSuggestionsLoading(false);
      setSuggestions(res);
      return res;
    },
    [],
  );

  return { suggestions, getSuggestions, suggestionsLoading };
};
