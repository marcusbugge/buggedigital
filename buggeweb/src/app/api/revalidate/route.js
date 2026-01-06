import { revalidateTag, revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const secret = request.headers.get('x-sanity-secret')
    
    // Verifiser at forespørselen kommer fra Sanity
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalider alle prosjekter via tag (inkluderer projects-preview)
    revalidateTag('projects')
    revalidateTag('projects-preview')
    
    // Revalider forsiden (hvor preview-prosjektene vises)
    revalidatePath('/')
    revalidatePath('/', 'page')
    
    // Revalider prosjektsidene
    revalidatePath('/prosjekter')
    revalidatePath('/prosjekter', 'page')
    
    // Hvis det er en spesifikk prosjekt-endring, revalider også den siden
    if (body?.slug?.current) {
      revalidatePath(`/prosjekter/${body.slug.current}`)
    }
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      body 
    })
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err.message 
    }, { status: 500 })
  }
}

