import { styles } from "./styles";

export default function Summary({ savedEntry, onNewReport }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>3) Summary (auto-generated)</h2>

      {savedEntry ? (
        <div style={styles.summaryBox}>
          <p style={{ margin: 0 }}>
            <b>Where:</b> {savedEntry.bodyPart}
          </p>
          <p style={{ margin: "8px 0 0" }}>
            <b>Intensity:</b> {savedEntry.painLevel}
          </p>
          <p style={{ margin: "8px 0 0", opacity: 0.75 }}>
            Saved: {savedEntry.date}
          </p>

          <hr style={{ margin: "16px 0", opacity: 0.25 }} />

          <p style={{ margin: 0 }}>
            <b>Simple summary:</b> Pain in the <b>{savedEntry.bodyPart}</b>,
            intensity <b>{savedEntry.painLevel}</b>.
          </p>
        </div>
      ) : (
        <p>No saved entry found.</p>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button style={styles.primaryBtn} onClick={onNewReport}>
          New report
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => {
            const last = localStorage.getItem("nana_last_entry");
            alert(last ? last : "Nothing in localStorage yet");
          }}
        >
          Check localStorage
        </button>
      </div>
    </div>
  );
}
