import { serve } from 'https://deno.fresh.dev/std@0.168.0/http/server.ts'

interface RequestBody {
  name?: string
}

serve(async (req) => {
  try {
    const { name = 'World' } = await req.json() as RequestBody

    const data = {
      message: `Hello ${name}!`,
      timestamp: new Date().toISOString()
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})