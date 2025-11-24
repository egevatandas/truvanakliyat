import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  try {
    // Read the favicon image from public folder
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.png')
    const faviconBuffer = fs.readFileSync(faviconPath)
    const faviconBase64 = `data:image/png;base64,${faviconBuffer.toString('base64')}`

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={faviconBase64}
            alt="Truva Nakliyat"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fallback if file read fails
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
          }}
        >
          <div
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: '#D62027',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            T
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  }
}

