export default function Cookies() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium mb-8 inline-block">&larr; Volver a Kontesta Hotels</a>
        <h1 className="font-serif text-4xl text-slate-900 mb-8">Politica de Cookies</h1>
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <p><strong>Ultima actualizacion:</strong> 15 de marzo de 2026</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">1. Que son las cookies</h2>
          <p>Las cookies son pequenos archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Se utilizan para mejorar la experiencia de navegacion, recordar preferencias y analizar el uso del sitio.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">2. Cookies que utilizamos</h2>
          <p>Este sitio web utiliza unicamente cookies tecnicas y estrictamente necesarias para su correcto funcionamiento:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">Cookie</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">Tipo</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">Finalidad</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">Duracion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-slate-100">__vercel_live_token</td>
                  <td className="px-4 py-2 border-b border-slate-100">Tecnica</td>
                  <td className="px-4 py-2 border-b border-slate-100">Necesaria para el funcionamiento del hosting en Vercel</td>
                  <td className="px-4 py-2 border-b border-slate-100">Sesion</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">3. Cookies de terceros</h2>
          <p>Este sitio web embebe un video de YouTube. YouTube puede establecer cookies propias cuando reproduces el video. Puedes consultar la politica de cookies de YouTube en su sitio web.</p>
          <p>No utilizamos cookies de analitica, publicidad ni seguimiento de terceros.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">4. Como gestionar las cookies</h2>
          <p>Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que desactivar las cookies puede afectar al funcionamiento de algunas funcionalidades del sitio.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Chrome:</strong> Configuracion &gt; Privacidad y seguridad &gt; Cookies</li>
            <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
            <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
            <li><strong>Edge:</strong> Configuracion &gt; Privacidad &gt; Cookies</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">5. Contacto</h2>
          <p>Si tienes cualquier duda sobre nuestra politica de cookies, puedes contactarnos en contacto@cpgestudioia.tech o llamar al +34 624 013 936.</p>
        </div>
      </div>
    </main>
  );
}
