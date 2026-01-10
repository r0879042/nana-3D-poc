import { useState } from "react";
import BodyScene from "./BodyScene";
import PainScale from "./PainScale";
import Summary from "./Summary";
import { styles } from "./styles";

export default function NanaPoc() {
  const [step, setStep] = useState(1);
  const [selectedPart, setSelectedPart] = useState(null);
  const [painLevel, setPainLevel] = useState(null);
  const [savedEntry, setSavedEntry] = useState(null);

  function resetFlow() {
    setStep(1);
    setSelectedPart(null);
    setPainLevel(null);
    setSavedEntry(null);
  }

  function saveEntry() {
    const entry = {
      bodyPart: selectedPart,
      painLevel,
      date: new Date().toLocaleString(),
    };

    setSavedEntry(entry);
    localStorage.setItem("nana_last_entry", JSON.stringify(entry));
    setStep(3);
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={{ margin: 0 }}>Nana – 3D Body Map PoC</h1>
        <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
          PoC: tap a body part → choose pain level → save summary.
        </p>
      </div>

      {step === 1 && (
        <div style={styles.card}>
          <h2 style={styles.title}>1) Tap where it hurts</h2>

          <div style={styles.row}>
            <BodyScene selectedPart={selectedPart} onSelect={setSelectedPart} />

            <div style={styles.side}>
              <div style={styles.infoBox}>
                <p style={{ margin: 0, fontWeight: 600 }}>Selected:</p>
                <p style={{ margin: "6px 0 0" }}>
                  {selectedPart ? selectedPart : "Nothing yet"}
                </p>
              </div>

              <button
                style={{
                  ...styles.primaryBtn,
                  opacity: selectedPart ? 1 : 0.5,
                  cursor: selectedPart ? "pointer" : "not-allowed",
                }}
                disabled={!selectedPart}
                onClick={() => setStep(2)}
              >
                Next: Choose pain level →
              </button>

              <button style={styles.secondaryBtn} onClick={resetFlow}>
                Reset
              </button>

              <p style={styles.tip}>Tip: Click a box to highlight it.</p>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <PainScale
          selectedPart={selectedPart}
          painLevel={painLevel}
          setPainLevel={setPainLevel}
          onBack={() => setStep(1)}
          onSave={saveEntry}
        />
      )}

      {step === 3 && (
        <Summary savedEntry={savedEntry} onNewReport={resetFlow} />
      )}

      <div style={styles.footer}>
        <p style={{ margin: 0, opacity: 0.75 }}>
          PoC goal: prove <b>tap detection</b>, <b>pain input</b>, and{" "}
          <b>saving</b>. Design doesn’t matter.
        </p>
      </div>
    </div>
  );
}
