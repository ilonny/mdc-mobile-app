export const validateForm = (values: Record<string, any>) => {
  const errors = {};
  // fields?.forEach(field => {
  //   const value = _.get(values, field.name);
  //   if (!value && !notRequiredFields.includes(field.name)) {
  //     _.set(errors, field.name, 'required');
  //   }
  // });
  return errors;
};
