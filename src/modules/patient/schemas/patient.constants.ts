type IPatientStatus = 'INFECTED' | 'RECOVERED' | 'NEVER_INFECTED' | 'DEAD';
export const PatientStatus: IPatientStatus[] = [
  'NEVER_INFECTED',
  'INFECTED',
  'RECOVERED',
  'DEAD',
];

export const CNIC_REGEX_EXP = '^[0-9]{5}-[0-9]{7}-[0-9]{1}$';
