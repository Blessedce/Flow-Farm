// Analytics.jsx
import { useState, useEffect } from "react";
import PerformanceChart from "./PerformanceChart";

const C = {
  bg:     "#f0f2f5",
  card:   "#ffffff",
  text:   "#1a2035",
  muted:  "#8a94a6",
  border: "#e4e8f0",
  temp:   "#93c5e8",
  ph:     "#a8d672",
  water:  "#4f6ef7",
  up:     "#4caf88",
  down:   "#e06b6b",
};

// ─── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({ data, color }) {
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const W = 80, H = 32;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((v - min) / range) * H;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedValue({ value, decimals = 0, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = null;
    const end = parseFloat(value);
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 900, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay((e * end).toFixed(decimals));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);
  return <>{display}{suffix}</>;
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, suffix, decimals, delta, color, sparkData }) {
  const isUp = delta >= 0;
  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: "20px 20px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </p>
      <p style={{ margin: "8px 0 0", fontSize: 30, fontWeight: 800, color: C.text, letterSpacing: "-0.03em", lineHeight: 1 }}>
        <AnimatedValue value={value} suffix={suffix} decimals={decimals} />
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: isUp ? C.up : C.down,
          background: isUp ? "rgba(76,175,136,0.1)" : "rgba(224,107,107,0.1)",
          padding: "3px 8px", borderRadius: 20,
        }}>
          {isUp ? "▲" : "▼"} {Math.abs(delta)}%
        </span>
        <Sparkline data={sparkData} color={color} />
      </div>
    </div>
  );
}

// ─── Analytics Page ───────────────────────────────────────────────────────────
export default function Analytics() {
  const stats = [
    {
      label: "Temperature",
      value: 31.2, suffix: "°C", decimals: 1, delta: 0.5,
      color: C.temp,
      sparkData: [30, 30.5, 31, 31.2, 31, 30.8, 31.1, 31.2],
    },
    {
      label: "Water Level",
      value: 61, suffix: "%", decimals: 0, delta: 1.8,
      color: C.water,
      sparkData: [22, 40, 55, 61, 58, 60, 61, 61],
    },
    {
      label: "pH Level",
      value: 8.1, suffix: "", decimals: 1, delta: -0.3,
      color: C.ph,
      sparkData: [6, 7, 7.5, 8, 8.1, 8.05, 8.1, 8.1],
    },
  ];

  return (
    <div style={{ padding: "28px", background: C.bg, minHeight: "100%", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", color: C.text, margin: 0 }}>
          Analytics
        </h1>
        <p style={{ fontSize: 13, color: C.muted, marginTop: 4, margin: 0 }}>
          Real-time performance monitoring
        </p>
      </div>

      {/* Stat Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 14,
        marginBottom: 20,
      }}>
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Performance Chart */}
      <PerformanceChart />
    </div>
  );
}