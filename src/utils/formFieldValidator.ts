import {
  FormFieldValidator,
  FormFieldValidatorType,
} from '../components/FormMessage';

/**
 * @internal
 */
export function validateFormField(
  value: string,
  required: boolean,
  validators: FormFieldValidator[]
): boolean {
  if (required && value.length === 0) return false;
  if (validators.length === 0 || (!required && value.length === 0)) return true;

  return validators.every((validator) => {
    switch (validator.key) {
      case FormFieldValidatorType.NUMBER: {
        const val = Number(value);
        if (isNaN(val)) return false;
        if (validator.min && typeof validator.min !== 'number') return false;
        if (validator.max && typeof validator.max !== 'number') return false;
        if (typeof validator.min === 'number' && val < validator.min)
          return false;
        if (typeof validator.max === 'number' && val > validator.max)
          return false;
        return true;
      }
      case FormFieldValidatorType.ENUM: {
        if (typeof value !== 'string') return false;
        if (validator.enums && Array.isArray(validator.enums)) {
          if (validator.enums.length > 0 && !validator.enums.includes(value)) {
            return validator.allow_other;
          }
        }
        return true;
      }
      case FormFieldValidatorType.TEXT: {
        if (typeof value !== 'string') return false;
        if (typeof validator.min_length === 'number') {
          if (value.length < validator.min_length) return false;
        }
        if (typeof validator.max_length === 'number') {
          if (value.length > validator.max_length) return false;
        }
        return true;
      }
      case FormFieldValidatorType.REGEX: {
        if (typeof value !== 'string') return false;
        if (validator.regex) {
          if (typeof validator.regex !== 'string') return false;
          if (!new RegExp(validator.regex).test(value)) return false;
        }
        return true;
      }
      case FormFieldValidatorType.DECIMAL_PLACE: {
        if (value.length === 0) return false;
        const val = Number(value);
        if (isNaN(val)) return false;
        if (
          validator.max_decimal_place &&
          typeof validator.max_decimal_place !== 'number'
        )
          return true;
        if (
          typeof validator.max_decimal_place === 'number' &&
          validator.max_decimal_place > 0 &&
          !isMetMaxDecimals(val, validator.max_decimal_place)
        )
          return false;
        return true;
      }
      default:
        return true;
    }
  });
}

/**
 * @internal
 */
function isMetMaxDecimals(value: number, numMaxDecimals: number): boolean {
  const valueStr = value.toString();
  const decimalIndex = valueStr.indexOf('.');
  if (decimalIndex === -1) {
    return true;
  }
  const numDecimals = valueStr.slice(decimalIndex + 1).length;
  return numDecimals <= numMaxDecimals;
}
