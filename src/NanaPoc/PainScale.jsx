import { styles } from "./styles";

function PainButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.painBtn,
        border: active ? "2px solid #111" : "1px solid #ddd",
        transform: active ? "scale(1.02)" : "scale(1)",
      }}
    >
      {label}
    </button>
  );
}

export default function PainScale({
  selectedPart,
  painLevel,
  setPainLevel,
  onBack,
  onSave,
}) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>2) How bad is the pain?</h2>

      <p style={{ marginTop: 0, opacity: 0.85 }}>
        Body part: <b>{selectedPart}</b>
      </p>

      <div style={styles.painGrid}>
        <PainButton
          label="🙂 Mild"
          active={painLevel === "Mild"}
          onClick={() => setPainLevel("Mild")}
        />
        <PainButton
          label="😟 Medium"
          active={painLevel === "Medium"}
          onClick={() => setPainLevel("Medium")}
        />
        <PainButton
          label="😣 Strong"
          active={painLevel === "Strong"}
          onClick={() => setPainLevel("Strong")}
        />
        <PainButton
          label="😭 Worst"
          active={painLevel === "Worst"}
          onClick={() => setPainLevel("Worst")}
        />
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button style={styles.secondaryBtn} onClick={onBack}>
          ← Back
        </button>

        <button
          style={{
            ...styles.primaryBtn,
            opacity: painLevel ? 1 : 0.5,
            cursor: painLevel ? "pointer" : "not-allowed",
          }}
          disabled={!painLevel}
          onClick={onSave}
        >
          Save entry
        </button>
      </div>

      <p style={styles.tip}>
        PoC = body part + pain level + save. Enough to validate 3D idea.
      </p>
    </div>
  );
}
