import { h } from "@stencil/core";

export function LoadingSlot() {
  return (
    <slot name="loading">
      <LoadingSkeleton />
    </slot>
  );
}
export function LoadingSkeleton() {
  return (
    <div style={{ width: "100%" }}>
      <sl-skeleton style={{ marginBottom: "28px" }}></sl-skeleton>
      <sl-skeleton style={{ marginBottom: "28px" }}></sl-skeleton>
      <sl-skeleton style={{ marginBottom: "28px" }}></sl-skeleton>
      <sl-skeleton style={{ marginBottom: "28px" }}></sl-skeleton>
      <sl-skeleton></sl-skeleton>
    </div>
  );
}
export function EmptySlot({ label }: { label: string; }) {
  return (
    <slot name="empty">
      <EmptySkeleton label={label} />
    </slot>
  );
}
export function EmptySkeleton({ label }: { label: string; }) {
  return (
    <div style={{ width: "100%" }}>
      <sqm-text>
        <h3 style={{ color: "#777777" }}>{label}</h3>
      </sqm-text>
    </div>
  );
}
