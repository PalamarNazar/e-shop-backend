export const PrismaErrorCodes = {
  UniqueViolation: { code: "P2002", message: "DuplicateName" },
  RecordNotFound: { code: "P2025", message: "RecordNotFound" },
  ForeignKeyViolation: { code: "P2003", message: "ForeignKeyViolation" },
} as const;
