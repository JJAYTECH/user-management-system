import { UntypedFormGroup } from '@angular/forms';

// Custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: UntypedFormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // Check if there's already an error on the matching control
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // Return if another validator has found an error
      return;
    }

    // Set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}