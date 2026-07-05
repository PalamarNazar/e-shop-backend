import { isFieldMeta, isUniqueMeta, isStringTargetMeta } from "../guards/prisma-errors.guards.js";

export class PrismaErrorExtractor {
  public static getFieldName(meta: unknown): string | null {
    if (!meta) return null;

    if (isUniqueMeta(meta)) return meta.target.join(", ");
    if (isFieldMeta(meta)) return meta.field_name;
    if (isStringTargetMeta(meta)) return meta.target;

    return null;
  }
}