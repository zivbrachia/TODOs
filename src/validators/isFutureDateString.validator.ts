import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsFutureDateString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsFutureDateString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const currentDate = new Date();
          const inputDate = new Date(value);
          return inputDate > currentDate;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a future date`;
        },
      },
    });
  };
}
