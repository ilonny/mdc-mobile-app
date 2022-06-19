import { TOption } from './../Select';

export const mapSuggestions = (suggestions: any): TOption[] => {
  if (Array.isArray(suggestions)) {
    return suggestions.map(suggestion => {
      return {
        label: suggestion.description,
        value: suggestion,
      };
    });
  }
  return [];
};
