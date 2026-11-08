import { describe, expect, it } from 'vitest';
import { getQaCredentials } from './qaCredentials';

describe('getQaCredentials', () => {
  it('returns the configured QA account passwords', () => {
    expect(getQaCredentials({
      QA_STUDENT_PASSWORD: 'student-pass',
      QA_FACULTY_PASSWORD: 'faculty-pass',
      QA_ADMIN_PASSWORD: 'admin-pass',
      QA_REGISTRATION_PASSWORD: 'registration-pass',
    })).toEqual({
      student: 'student-pass',
      faculty: 'faculty-pass',
      admin: 'admin-pass',
      registration: 'registration-pass',
    });
  });

  it('reports all missing QA password variables without exposing values', () => {
    expect(() => getQaCredentials({ QA_STUDENT_PASSWORD: ' ' }))
      .toThrow('Missing required QA password environment variables: QA_STUDENT_PASSWORD, QA_FACULTY_PASSWORD, QA_ADMIN_PASSWORD, QA_REGISTRATION_PASSWORD');
  });
});
