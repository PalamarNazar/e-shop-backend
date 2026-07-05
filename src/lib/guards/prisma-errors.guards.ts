import type {
  FieldConstraintMeta,
  RelationConstraintMeta,
  StringTargetMeta,
  UniqueConstraintMeta,
} from "../types/prisma-errors-meta.types.js";

export const isUniqueMeta = (meta: unknown): meta is UniqueConstraintMeta => {
  if (!meta || typeof meta !== "object") return false;

  const obj = meta as Record<string, unknown>;
  return "target" in obj && Array.isArray(obj.target);
};

export const isFieldMeta = (meta: unknown): meta is FieldConstraintMeta => {
  if (!meta || typeof meta !== "object") return false;

  const obj = meta as Record<string, unknown>;
  return "field_name" in obj && typeof obj.field_name === "string";
};

export const isStringTargetMeta = (meta: unknown): meta is StringTargetMeta => {
  if (!meta || typeof meta !== "object") return false;

  const obj = meta as Record<string, unknown>;
  return "target" in obj && typeof obj.target === "string";
};

export const isRelationConstraintMeta = (
  meta: unknown,
): meta is RelationConstraintMeta => {
  if (!meta || typeof meta !== "object") return false;

  const obj = meta as Record<string, unknown>;
  return (
    "relation_name" in obj &&
    "model_a_name" in obj &&
    "model_b_name" in obj &&
    typeof obj.relation_name === "string" &&
    typeof obj.model_a_name === "string" &&
    typeof obj.model_b_name === "string"
  );
};
