import { ImageResponse } from 'next/og'

export const alt = 'Balaji Enterprise | Surat\'s Leading Electrical Supplier'
export const size = {
  width: 1200,
  height: 600,
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
          padding: '40px',
          border: '20px solid #1674D3',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '-0.05em',
            marginBottom: '20px',
          }}
        >
          Balaji Enterprise
        </div>
        <div
          style={{
            fontSize: '30px',
            color: '#EAB308',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            textAlign: 'center',
            borderBottom: '4px solid #EAB308',
            paddingBottom: '10px',
          }}
        >
          Surat • Industrial Specialist
        </div>
        <div
          style={{
            marginTop: '40px',
            fontSize: '24px',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.5,
          }}
        >
          Premium PVC Tapes, Bare Copper Wire & Brass Components for heavy industrial winding.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
