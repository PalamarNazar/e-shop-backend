export interface UniqueConstraintMeta {
  target: string[];
}
export interface FieldConstraintMeta {
  field_name: string;
}
export interface StringTargetMeta {
  target: string;
}
export interface RelationConstraintMeta {
  relation_name: string;
  model_a_name: string;
  model_b_name: string;
}

export type ErrorResolver = (meta: unknown) => readonly [number, string];