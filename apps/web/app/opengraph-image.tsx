import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 300,
            marginBottom: '40px',
            color: '#1a1a1a',
            textAlign: 'center',
          }}
        >
          地図
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Map your thinking.
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#4a4a4a',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          A personal knowledge management system that extracts and maintains your beliefs, decisions, and conclusions from AI conversations.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
