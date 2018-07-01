const VALIDATION = {
  REPORT_TITLE_MIN_CHARS: 10,
  REPORT_TITLE_MAX_CHARS: 50,
  REPORT_DESCRIPTION_MIN_CHARS: 50,
  REPORT_DESCRIPTION_MAX_CHARS: 1000,
  REPORT_EMAIL_MAX_CHARS: 100,
};

// Freeze so that the properties can't be changed elsewhere in the code or at runtime.
export default Object.freeze(VALIDATION);
