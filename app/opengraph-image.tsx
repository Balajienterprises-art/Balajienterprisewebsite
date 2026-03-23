import { ImageResponse } from 'next/og'

export const alt = 'Balaji Enterprise | Industrial Electrical Supplier Surat'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F3D81',
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
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#1674D3',
              border: '2px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            BE
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              fontStyle: 'italic',
              textTransform: 'uppercase',
            }}
          >
            Balaji Enterprise
          </div>
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#93C5FD',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          #1 Industrial Electrical Supplier in Surat, Gujarat
        </div>
        <div
            style={{
              marginTop: '60px',
              display: 'flex',
              gap: '40px',
              fontSize: '20px',
              color: '#EAB308',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
        >
          <span>PVC Tapes</span>
          <span>•</span>
          <span>Copper Wire</span>
          <span>•</span>
          <span>Brass Hardware</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
