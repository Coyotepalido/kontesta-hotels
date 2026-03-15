export default function Privacidad() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium mb-8 inline-block">&larr; Volver a Kontesta Hotels</a>
        <h1 className="font-serif text-4xl text-slate-900 mb-8">Politica de Privacidad</h1>
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <p><strong>Ultima actualizacion:</strong> 15 de marzo de 2026</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">1. Responsable del tratamiento</h2>
          <p>CPG Estudio IA (en adelante, "Kontesta Hotels" o "nosotros") es responsable del tratamiento de los datos personales recogidos a traves de este sitio web.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email de contacto: contacto@cpgestudioia.tech</li>
            <li>Telefono: +34 624 013 936</li>
            <li>Sitio web: https://kontesta-hotels.vercel.app</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">2. Datos que recopilamos</h2>
          <p>Recopilamos los datos que nos proporcionas voluntariamente a traves del formulario de contacto:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Nombre del hotel</li>
            <li>Numero de habitaciones</li>
            <li>Telefono (opcional)</li>
            <li>Direccion de email</li>
            <li>Mensaje o consulta</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">3. Finalidad del tratamiento</h2>
          <p>Los datos recogidos se utilizan exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder a tu consulta o solicitud de informacion</li>
            <li>Gestionar la solicitud de prueba gratuita del producto Kontesta Hotels</li>
            <li>Enviarte comunicaciones comerciales relacionadas con nuestros servicios (solo si das tu consentimiento)</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">4. Base legal</h2>
          <p>El tratamiento de tus datos se basa en tu consentimiento explicito al enviar el formulario de contacto, asi como en el interes legitimo de responder a tus consultas comerciales.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">5. Conservacion de datos</h2>
          <p>Tus datos se conservaran mientras sean necesarios para la finalidad para la que fueron recogidos y durante los plazos legalmente establecidos. Si solicitas la eliminacion de tus datos, procederemos a hacerlo en un plazo maximo de 30 dias.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">6. Derechos del usuario</h2>
          <p>Puedes ejercer tus derechos de acceso, rectificacion, supresion, portabilidad, limitacion y oposicion enviando un email a contacto@cpgestudioia.tech. Respondemos en un plazo maximo de 30 dias.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">7. Seguridad</h2>
          <p>Implementamos medidas tecnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la perdida o la destruccion. Los datos del formulario se transmiten cifrados mediante HTTPS.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">8. Terceros</h2>
          <p>Utilizamos los siguientes servicios de terceros para el funcionamiento del sitio:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vercel:</strong> alojamiento web (Estados Unidos, cumple Privacy Shield)</li>
            <li><strong>Resend:</strong> envio de emails transaccionales</li>
          </ul>
          <p>No vendemos ni compartimos tus datos con terceros con fines comerciales.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8">9. Contacto</h2>
          <p>Si tienes cualquier duda sobre esta politica de privacidad, puedes contactarnos en contacto@cpgestudioia.tech o llamar al +34 624 013 936.</p>
        </div>
      </div>
    </main>
  );
}
