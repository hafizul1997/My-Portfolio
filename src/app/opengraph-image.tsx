
import { ImageResponse } from "next/og";

export const alt = "Hafizul Islam - Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080D18",
          color: "#F1F5F9",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -100,
            width: 550,
            height: 550,
            borderRadius: 275,
            background: "#1D4ED8",
            opacity: 0.18,
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#60A5FA",
            letterSpacing: 5,
            marginBottom: 35,
          }}
        >
          HAFIZUL.DEV
        </div>

        <div
          style={{
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          Hi, I&apos;m Hafizul Islam.
        </div>

        <div
          style={{
            fontSize: 38,
            color: "#60A5FA",
            fontWeight: 700,
            marginTop: 18,
          }}
        >
          Full-Stack Web Developer
        </div>

        <div
          style={{
            fontSize: 23,
            color: "#A1AFC2",
            marginTop: 28,
          }}
        >
          Building modern web experiences with Next.js, React & TypeScript.
        </div>

        <div
          style={{
            width: 90,
            height: 5,
            background: "#60A5FA",
            borderRadius: 10,
            marginTop: 42,
          }}
        />

        <div
          style={{
            fontSize: 19,
            color: "#64748B",
            marginTop: 28,
          }}
        >
          DUBAI, UNITED ARAB EMIRATES
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
