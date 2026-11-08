const credentialVariables = {
  student: 'QA_STUDENT_PASSWORD',
  faculty: 'QA_FACULTY_PASSWORD',
  admin: 'QA_ADMIN_PASSWORD',
  registration: 'QA_REGISTRATION_PASSWORD',
};

export function getQaCredentials(env = process.env) {
  const missing = Object.values(credentialVariables)
    .filter((name) => typeof env[name] !== 'string' || env[name].trim().length === 0);

  if (missing.length > 0) {
    throw new Error(`Missing required QA password environment variables: ${missing.join(', ')}`);
  }

  return Object.fromEntries(
    Object.entries(credentialVariables).map(([role, name]) => [role, env[name]])
  );
}
