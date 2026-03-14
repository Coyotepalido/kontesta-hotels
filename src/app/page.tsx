"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────── ANIMATION HELPERS ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─────────────────────────── ICONS (inline SVG) ─────────────────────────── */
const Icons = {
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.733-3.559" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
};

/* ─────────────────────────── CHAT DEMO COMPONENT ─────────────────────────── */
function ChatDemo() {
  const messages = [
    { from: "guest", text: "Hola, me gustaría reservar una habitación para el 15 de marzo, 2 noches.", lang: "ES" },
    { from: "bot", text: "Hola! Tenemos disponibilidad. Para 2 noches (15-17 marzo) le ofrecemos: Doble Estándar 89€/noche o Superior con vistas 119€/noche. Ambas incluyen desayuno buffet. ¿Cuál prefiere?" },
    { from: "guest", text: "La superior. ¿Tienen parking?", lang: "ES" },
    { from: "bot", text: "Excelente elección. Sí, tenemos parking privado por 12€/día. Además, para su estancia tenemos disponible nuestro spa con un 15% de descuento si reserva ahora. ¿Le interesa?" },
    { from: "guest", text: "Sí, parking + spa por favor. ¿Puedo hacer late checkout?", lang: "ES" },
    { from: "bot", text: "Perfecto. He añadido parking (2 días: 24€) y circuito spa para 2 personas (68€ con dto). Late checkout hasta las 14h disponible por 25€. Su reserva: 2 noches Superior + parking + spa + late checkout = 355€ total. ¿Confirmo?" },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= messages.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [isInView, messages.length]);

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-md mx-auto">
      {/* Phone header */}
      <div className="bg-teal-700 text-white px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-sm font-bold">KH</div>
        <div>
          <p className="font-semibold text-sm">Hotel Costa del Sol</p>
          <p className="text-xs text-teal-200">Kontesta Hotels &middot; En línea</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-teal-200">IA activa</span>
        </div>
      </div>
      {/* Messages */}
      <div className="p-4 space-y-3 bg-slate-50 min-h-[340px]">
        {messages.slice(0, visibleCount).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.from === "guest" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.from === "guest"
                  ? "bg-teal-600 text-white rounded-br-md"
                  : "bg-white text-slate-700 rounded-bl-md shadow-sm border border-slate-100"
              }`}
            >
              {msg.from === "bot" && (
                <span className="inline-flex items-center gap-1 text-[10px] text-teal-600 font-medium mb-1">
                  {Icons.sparkles && <span className="w-3 h-3">{Icons.sparkles}</span>} Kontesta IA
                </span>
              )}
              <p>{msg.text}</p>
            </div>
          </motion.div>
        ))}
        {visibleCount > 0 && visibleCount < messages.length && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-white px-4 py-2.5 rounded-2xl rounded-bl-md shadow-sm border border-slate-100">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Footer */}
      <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">Escribe un mensaje...</div>
        <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── UPSELLING SERVICES DATA ─────────────────────────── */
const UPSELLING_SERVICES = [
  { icon: "🏨", name: "Upgrade habitación", desc: "Superior, suite, vistas al mar" },
  { icon: "🅿️", name: "Parking", desc: "Reserva y precio dinámico" },
  { icon: "💆", name: "Spa & Wellness", desc: "Masajes, circuitos, packs" },
  { icon: "🍽️", name: "Restaurante", desc: "Mesa, menú degustación, eventos" },
  { icon: "🥐", name: "Desayuno", desc: "Añadir si no incluye la reserva" },
  { icon: "🕐", name: "Late / Early check", desc: "Salida tardía, entrada anticipada" },
  { icon: "🚐", name: "Transfer", desc: "Aeropuerto, estación, ida y vuelta" },
  { icon: "🚴", name: "Bicicletas", desc: "Alquiler por horas o por día" },
  { icon: "🏄", name: "Actividades", desc: "Kayak, senderismo, catas, tours" },
  { icon: "🎉", name: "Salón eventos", desc: "Reuniones, celebraciones" },
  { icon: "👶", name: "Cuna / Cama extra", desc: "Para familias con niños" },
  { icon: "🐾", name: "Pet-friendly", desc: "Cama mascota, comedero, canguro" },
  { icon: "🧺", name: "Lavandería", desc: "Servicio express o estándar" },
  { icon: "📶", name: "WiFi premium", desc: "Alta velocidad para trabajo" },
  { icon: "🍾", name: "Pack bienvenida", desc: "Champagne, fruta, minibar" },
  { icon: "🎭", name: "Experiencias locales", desc: "Flamenco, museos, gastronomía" },
];

/* ─────────────────────────── PRICING DATA ─────────────────────────── */
const PLANS = [
  {
    name: "Starter",
    price: "5",
    unit: "/hab/mes",
    min: "Mín. 199€/mes",
    example: "Hotel 50 hab. = 250€/mes",
    highlight: false,
    features: [
      "Mensajería WhatsApp + web chat",
      "Respuestas multiidioma automáticas",
      "Gestión de reseñas (50/mes)",
      "Panel de tareas básico",
      "1 usuario administrador",
      "Soporte por email",
    ],
  },
  {
    name: "Professional",
    price: "8",
    unit: "/hab/mes",
    min: "Mín. 349€/mes",
    example: "Hotel 50 hab. = 400€/mes",
    highlight: true,
    badge: "Más popular",
    features: [
      "Todo lo de Starter, más:",
      "Email + mensajes Booking/Airbnb",
      "Reseñas ilimitadas (Google + TripAdvisor)",
      "Upselling automático todos los servicios",
      "Módulo housekeeping completo",
      "Dashboard analytics",
      "5 usuarios",
      "Soporte prioritario",
    ],
  },
  {
    name: "Business",
    price: "11",
    unit: "/hab/mes",
    min: "Mín. 499€/mes",
    example: "Hotel 50 hab. = 550€/mes",
    highlight: false,
    features: [
      "Todo lo de Professional, más:",
      "Motor de reservas directas (sin comisión OTA)",
      "Revenue avanzado con sugerencias IA",
      "API para integraciones",
      "App personalizada para huéspedes",
      "Usuarios ilimitados",
      "Account manager dedicado",
    ],
  },
];

/* ─────────────────────────── DIFFERENTIATORS DATA ─────────────────────────── */
const DIFFERENTIATORS = [
  {
    us: "Todo integrado en una plataforma — los datos fluyen entre módulos",
    them: "4-5 herramientas separadas que no se comunican entre sí",
  },
  {
    us: "IA generativa avanzada — entiende contexto y matices, no respuestas enlatadas",
    them: "Chatbots con árboles de decisión o IA básica con respuestas predefinidas",
  },
  {
    us: "Un solo panel, un solo login, una sola factura",
    them: "Múltiples paneles, múltiples logins, múltiples facturas",
  },
  {
    us: "Upselling contextual inteligente — la IA conoce al huésped y sabe qué ofrecerle",
    them: "Upselling genérico, la misma oferta para todos los huéspedes",
  },
  {
    us: "Multiidioma nativo — responde automáticamente en el idioma del huésped",
    them: "Limitado a 2-3 idiomas o cobran extra por cada idioma adicional",
  },
  {
    us: "Tareas generadas desde la conversación — huésped pide algo y se crea la tarea",
    them: "Sistemas de tareas desconectados del canal de comunicación",
  },
  {
    us: "Sin comisiones sobre reservas — precio fijo mensual predecible",
    them: "Comisiones del 3-5% sobre cada reserva generada",
  },
  {
    us: "Setup con formación incluida (450€) — tu equipo preparado desde el día 1",
    them: "Setup oculto sin formación o formación como extra de pago",
  },
];

/* ─────────────────────────── FAQ DATA ─────────────────────────── */
const FAQS = [
  {
    q: "¿Cuánto tiempo lleva poner Kontesta Hotels en marcha?",
    a: "Entre 3 y 5 días laborables. El setup incluye configuración de todos los canales (WhatsApp, email, web chat), carga de la información de tu hotel (servicios, precios, FAQs) y formación de tu equipo. No necesitas conocimientos técnicos.",
  },
  {
    q: "¿Funciona con mi PMS actual?",
    a: "Kontesta Hotels se integra con los principales PMS del mercado (Mews, Cloudbeds, Sextaplanta, Opera y más). Si usas un PMS que no está en la lista, contacta con nosotros y lo evaluamos sin compromiso.",
  },
  {
    q: "¿En cuántos idiomas responde la IA?",
    a: "La IA responde automáticamente en más de 30 idiomas, detectando el idioma del huésped sin necesidad de configuración. Español, inglés, francés, alemán, portugués, italiano, holandés, chino, japonés, árabe y muchos más.",
  },
  {
    q: "¿La IA responde sola o necesita supervisión?",
    a: "La IA gestiona el 80-90% de las consultas de forma autónoma. Para situaciones complejas o fuera de lo habitual, deriva automáticamente la conversación a un miembro de tu equipo con todo el contexto de la conversación. Tú decides qué temas requieren intervención humana.",
  },
  {
    q: "¿Qué pasa cuando acaba la prueba de 20 días?",
    a: "Si decides continuar, eliges tu plan y sigues con normalidad. Si decides no continuar, tus datos se mantienen 30 días por si cambias de opinión, y después se eliminan completamente. Sin permanencias, sin penalizaciones.",
  },
  {
    q: "¿Puedo usar Kontesta Hotels solo para algunos canales?",
    a: "Sí. Puedes activar solo los canales que necesites (por ejemplo, solo WhatsApp) y añadir más cuando quieras. Del mismo modo, puedes activar solo los módulos que necesites: mensajería, reseñas, upselling o tareas.",
  },
  {
    q: "¿Qué soporte ofrecéis?",
    a: "Plan Starter: soporte por email en horario laboral. Plan Professional: soporte prioritario con respuesta en menos de 4 horas. Plan Business: account manager dedicado + soporte telefónico directo.",
  },
  {
    q: "¿Qué diferencia hay entre Kontesta Hotels y un chatbot normal?",
    a: "Un chatbot normal responde preguntas con respuestas predefinidas. Kontesta Hotels entiende el contexto, vende servicios de forma inteligente, genera tareas operativas, gestiona reseñas y mantiene todos los datos conectados en una sola plataforma. Es un copiloto completo, no solo un bot.",
  },
];

/* ─────────────────────────── HOW IT WORKS DATA ─────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Configura tu hotel",
    desc: "Introduce la información de tu hotel: habitaciones, servicios, precios, horarios y preguntas frecuentes. Nosotros te ayudamos con la configuración inicial.",
  },
  {
    num: "02",
    title: "Conecta tus canales",
    desc: "Activamos WhatsApp Business, email, web chat y los mensajes de Booking o Airbnb. Todo en un solo panel.",
  },
  {
    num: "03",
    title: "La IA empieza a trabajar",
    desc: "Kontesta responde huéspedes, vende servicios, gestiona reseñas y genera tareas operativas. Tú supervisas y decides.",
  },
  {
    num: "04",
    title: "Mide resultados",
    desc: "Dashboard en tiempo real con métricas: tasa de respuesta, ingresos por upselling, reseñas gestionadas, tareas completadas.",
  },
];

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    hotel: "",
    rooms: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("sent");
        setFormData({ name: "", hotel: "", rooms: "", phone: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="overflow-hidden">
      {/* ──────── NAVBAR ──────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-border flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-xl text-slate-800">
              Kontesta <span className="text-teal-600">Hotels</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#funcionalidades" className="hover:text-teal-600 transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="hover:text-teal-600 transition-colors">Cómo funciona</a>
            <a href="#precios" className="hover:text-teal-600 transition-colors">Precios</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
          </div>
          <a
            href="#contacto"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-teal-200"
          >
            Prueba 20 días gratis
          </a>
        </div>
      </nav>

      {/* ──────── HERO ──────── */}
      <section className="hero-gradient pattern-overlay pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-sm font-medium text-teal-700">Prueba 20 días gratis — sin tarjeta</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
                Una plataforma.{" "}
                <span className="text-teal-600">Toda la IA</span> que tu hotel necesita.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                Mensajería multiidioma 24/7, upselling inteligente de todos tus servicios, gestión de reseñas, tareas operativas y reservas directas. Todo integrado, todo conectado.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-amber-200"
                >
                  Empezar prueba gratis {Icons.arrow}
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 hover:border-teal-400 text-slate-700 hover:text-teal-700 px-8 py-3.5 rounded-full font-semibold text-lg transition-all"
                >
                  Ver demostración
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-teal-600">{Icons.check}</span> Sin permanencias</span>
                <span className="flex items-center gap-1.5"><span className="text-teal-600">{Icons.check}</span> Setup 450€</span>
                <span className="flex items-center gap-1.5"><span className="text-teal-600">{Icons.check}</span> Formación incluida</span>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <ChatDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────── METRICS BAR ──────── */}
      <section className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "90%", label: "Consultas resueltas sin intervención humana" },
              { value: "+35%", label: "Incremento medio en ingresos por servicios extra" },
              { value: "24/7", label: "Disponibilidad en más de 30 idiomas" },
              { value: "< 3s", label: "Tiempo de respuesta medio" },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-3xl sm:text-4xl font-bold text-teal-400">{m.value}</p>
                <p className="text-sm text-slate-400 mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── PAIN POINTS ──────── */}
      <Section id="problemas" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4">
              ¿Te suena alguno de estos problemas?
            </h2>
            <p className="text-lg text-slate-500">
              Los hoteles independientes enfrentan los mismos retos cada día. La IA los resuelve.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "😓", title: "Contestas lo mismo 100 veces al día", desc: "Horarios, precios, disponibilidad, parking, WiFi... Las mismas preguntas una y otra vez por WhatsApp, email y teléfono." },
              { icon: "💸", title: "Pierdes reservas por no responder a tiempo", desc: "Un huésped que no recibe respuesta en 10 minutos reserva en otro hotel. Especialmente de noche y fines de semana." },
              { icon: "🌍", title: "Llegas un huésped en alemán y no sabes qué dice", desc: "Turistas de toda Europa y el mundo. Google Translate no es suficiente para una experiencia profesional." },
              { icon: "📉", title: "Vendes habitaciones pero no servicios extras", desc: "Spa, parking, excursiones, restaurante, upgrades... Tienes servicios que podrían generar un 30% más de ingresos." },
              { icon: "⭐", title: "Las reseñas se acumulan sin responder", desc: "Cada reseña sin responder en Google o TripAdvisor es una oportunidad perdida de mejorar tu reputación online." },
              { icon: "📋", title: "Las tareas del staff se pierden en el camino", desc: "El huésped pide toallas, un arreglo, room service... y la información se pierde entre turnos." },
            ].map((pain, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{pain.icon}</span>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{pain.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ──────── 5 FEATURE MODULES ──────── */}
      <Section id="funcionalidades" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">5 módulos integrados</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              Todo lo que necesitas. Nada que sobre.
            </h2>
            <p className="text-lg text-slate-500">
              Cinco módulos que trabajan juntos. Lo que un huésped dice en WhatsApp se convierte en una tarea, una venta, o una reseña gestionada. Todo conectado.
            </p>
          </motion.div>

          {/* Module 1: Messaging */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-teal-600 mb-4">
                  {Icons.message}
                  <span className="text-sm font-semibold uppercase tracking-wider">Módulo 1</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Mensajería multiidioma 24/7</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Tu hotel responde en segundos, en cualquier idioma, a cualquier hora. WhatsApp, email, web chat, y mensajes de Booking y Airbnb. Todo desde un solo panel.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detecta el idioma del huésped y responde automáticamente en +30 idiomas",
                    "WhatsApp Business API, email, web chat y mensajes de OTAs",
                    "Entiende contexto y matices — no son respuestas enlatadas",
                    "Deriva a tu equipo cuando detecta situaciones que requieren atención humana",
                    "Mantiene el historial completo de cada huésped",
                    "Responde preguntas sobre disponibilidad, precios, servicios, ubicación, horarios...",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-teal-600 mt-0.5 shrink-0">{Icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl p-8 border border-teal-100">
                <div className="space-y-4">
                  {[
                    { flag: "🇬🇧", text: "Do you have availability for March 20th?", reply: "Yes! We have a Superior Room with sea view available for March 20th at 119€/night including breakfast. Shall I book it for you?" },
                    { flag: "🇩🇪", text: "Haben Sie einen Parkplatz?", reply: "Ja, wir haben einen privaten Parkplatz für 12€/Tag. Soll ich einen Platz für Sie reservieren?" },
                    { flag: "🇫🇷", text: "Le petit-déjeuner est inclus?", reply: "Oui, le petit-déjeuner buffet est inclus dans votre réservation. Il est servi de 7h30 à 10h30 dans notre restaurant principal." },
                  ].map((msg, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                      <p className="text-sm text-slate-600 mb-2"><span className="mr-2">{msg.flag}</span>{msg.text}</p>
                      <p className="text-sm text-teal-700 bg-teal-50 rounded-lg p-3 border-l-4 border-teal-400">{msg.reply}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module 2: Revenue / Upselling */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-amber-50 to-slate-50 rounded-2xl p-8 border border-amber-100">
                <p className="text-sm font-semibold text-amber-600 mb-4 uppercase tracking-wider">Ejemplo: huésped pareja, 2 noches</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <p className="text-xs text-slate-400 mb-1">Antes de llegar (email automático)</p>
                    <p className="text-sm text-slate-700">&ldquo;Hemos visto que viajan en pareja. Nuestro circuito spa tiene un 15% de descuento si reservan antes de llegar. ¿Les interesa?&rdquo;</p>
                    <p className="text-xs text-amber-600 font-semibold mt-2">+ 68€ de ingreso extra</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <p className="text-xs text-slate-400 mb-1">Durante la estancia (WhatsApp)</p>
                    <p className="text-sm text-slate-700">&ldquo;Buenas tardes. Hoy tenemos mesa disponible en nuestro restaurante a las 21h con menú degustación. ¿La reservo?&rdquo;</p>
                    <p className="text-xs text-amber-600 font-semibold mt-2">+ 90€ de ingreso extra</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <p className="text-xs text-slate-400 mb-1">Último día (WhatsApp)</p>
                    <p className="text-sm text-slate-700">&ldquo;Late checkout disponible hasta las 14h por 25€. ¿Lo añado a su estancia?&rdquo;</p>
                    <p className="text-xs text-amber-600 font-semibold mt-2">+ 25€ de ingreso extra</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-sm font-bold text-amber-700">Total ingresos extra por esta estancia: +183€</p>
                    <p className="text-xs text-amber-600">Sin esfuerzo manual. La IA lo hizo todo.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                  {Icons.revenue}
                  <span className="text-sm font-semibold uppercase tracking-wider">Módulo 2</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Upselling inteligente de todos tus servicios</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  La IA conoce el perfil de cada huésped y le ofrece el servicio adecuado, en el momento oportuno, con el tono correcto. No es spam: es servicio personalizado que genera ingresos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Upselling automático antes, durante y después de la estancia",
                    "Personalizado por perfil: pareja, familia, business, grupo",
                    "Cubre todos los servicios: habitación, spa, parking, restaurante, actividades, transfer, lavandería, WiFi premium y más",
                    "Los huéspedes lo perciben como atención personalizada, no como publicidad",
                    "Dashboard con métricas de conversión y ingresos generados",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-amber-500 mt-0.5 shrink-0">{Icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Module 3: Reviews */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-yellow-600 mb-4">
                  {Icons.star}
                  <span className="text-sm font-semibold uppercase tracking-wider">Módulo 3</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Gestión de reseñas automática</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Cada reseña respondida es una oportunidad de demostrar profesionalidad. La IA responde en el idioma del huésped con un tono personalizado que refleja la identidad de tu hotel.
                </p>
                <ul className="space-y-3">
                  {[
                    "Responde reseñas en Google y TripAdvisor automáticamente",
                    "Responde en el idioma original del huésped",
                    "Tono personalizado según el tipo de reseña (positiva, neutral, negativa)",
                    "Alerta inmediata al equipo cuando llega una reseña negativa",
                    "Solicita reseñas automáticamente después del check-out",
                    "Análisis de tendencias: qué les gusta más y qué mejorar",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-yellow-500 mt-0.5 shrink-0">{Icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-slate-50 rounded-2xl p-8 border border-yellow-100">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500 text-lg">★★★★★</span>
                      <span className="text-xs text-slate-400">Google · hace 2 horas</span>
                    </div>
                    <p className="text-sm text-slate-700 italic mb-3">&ldquo;Fantastic hotel! The spa was amazing and the staff was incredibly helpful. Will definitely come back.&rdquo;</p>
                    <div className="bg-teal-50 rounded-lg p-3 border-l-4 border-teal-400">
                      <p className="text-xs text-teal-600 font-medium mb-1">Respuesta automática de Kontesta IA</p>
                      <p className="text-sm text-teal-800">&ldquo;Thank you so much for your wonderful review! We're thrilled you enjoyed the spa — our team puts great care into creating a relaxing experience. We look forward to welcoming you back. Warm regards, Hotel Costa del Sol.&rdquo;</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500 text-lg">★★★☆☆</span>
                      <span className="text-xs text-slate-400">TripAdvisor · hace 5 horas</span>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">Alerta enviada</span>
                    </div>
                    <p className="text-sm text-slate-700 italic">&ldquo;El hotel está bien pero el aire acondicionado de nuestra habitación no funcionaba correctamente...&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module 4: Tasks */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
                <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wider">Panel de tareas en tiempo real</p>
                <div className="space-y-3">
                  {[
                    { time: "09:15", room: "Hab. 204", task: "Toallas extra solicitadas por WhatsApp", status: "Pendiente", color: "amber" },
                    { time: "09:32", room: "Hab. 512", task: "Aire acondicionado no funciona — mantenimiento", status: "En curso", color: "blue" },
                    { time: "10:00", room: "Hab. 301", task: "Late checkout confirmado hasta 14:00", status: "Completada", color: "green" },
                    { time: "10:15", room: "Hab. 108", task: "Cuna solicitada para esta noche", status: "Pendiente", color: "amber" },
                    { time: "10:45", room: "Restaurante", task: "Mesa 21h reservada — 4 personas — menú degustación", status: "Confirmada", color: "green" },
                  ].map((t, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
                      <span className="text-xs text-slate-400 shrink-0 w-10">{t.time}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-700 truncate">{t.task}</p>
                        <p className="text-xs text-slate-400">{t.room}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${
                        t.color === "amber" ? "bg-amber-100 text-amber-700" :
                        t.color === "blue" ? "bg-blue-100 text-blue-700" :
                        "bg-green-100 text-green-700"
                      }`}>{t.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                  {Icons.clipboard}
                  <span className="text-sm font-semibold uppercase tracking-wider">Módulo 4</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Tareas operativas inteligentes</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Cuando un huésped pide algo por WhatsApp, se genera automáticamente una tarea para el departamento correspondiente. Sin papeles, sin llamadas internas, sin que nada se pierda entre turnos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Tareas generadas automáticamente desde las conversaciones con huéspedes",
                    "Asignación inteligente por departamento: housekeeping, mantenimiento, recepción, restaurante",
                    "Panel visual con estado en tiempo real (pendiente, en curso, completada)",
                    "Alertas y notificaciones al equipo responsable",
                    "Historial completo vinculado a la habitación y al huésped",
                    "Informes de eficiencia operativa por departamento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-blue-500 mt-0.5 shrink-0">{Icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Module 5: Direct Bookings */}
          <motion.div variants={fadeUp}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-purple-600 mb-4">
                  {Icons.calendar}
                  <span className="text-sm font-semibold uppercase tracking-wider">Módulo 5</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Reservas directas sin comisión</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Cada reserva que entra por Booking o Airbnb tiene una comisión del 15-20%. Con Kontesta, tu hotel puede captar reservas directas por WhatsApp, email y web — sin intermediarios, sin comisiones.
                </p>
                <ul className="space-y-3">
                  {[
                    "Motor de reservas integrado en WhatsApp, email y web chat",
                    "Sin comisión por reserva — precio fijo mensual",
                    "Confirmación automática con todos los detalles de la estancia",
                    "Recordatorios pre-estancia con info práctica del hotel",
                    "Gestión de cancelaciones y modificaciones automáticas",
                    "Cada reserva directa te ahorra entre 15€ y 40€ en comisiones OTA",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-purple-500 mt-0.5 shrink-0">{Icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 bg-purple-50 rounded-xl p-5 border border-purple-100">
                  <p className="text-sm text-purple-800 font-medium mb-1">Ejemplo de ahorro real:</p>
                  <p className="text-sm text-purple-700">
                    Un hotel con 100 reservas/mes a precio medio de 150€ paga ~2.700€/mes en comisiones OTA. Si Kontesta convierte solo el 20% en reservas directas, ahorras <span className="font-bold">540€/mes</span> — más que el coste de la plataforma.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-2xl p-8 border border-purple-100">
                <div className="text-center mb-6">
                  <p className="font-serif text-2xl text-slate-900">Comparativa de costes</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-5 border border-red-100 text-center">
                    <p className="text-sm font-semibold text-red-700 mb-2">Con OTAs</p>
                    <p className="text-3xl font-bold text-red-600">15-20%</p>
                    <p className="text-xs text-red-500 mt-1">de comisión por reserva</p>
                    <p className="text-xs text-red-400 mt-3">100 reservas × 150€ =</p>
                    <p className="text-lg font-bold text-red-600">2.700€/mes</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-5 border border-teal-200 text-center">
                    <p className="text-sm font-semibold text-teal-700 mb-2">Con Kontesta</p>
                    <p className="text-3xl font-bold text-teal-600">0%</p>
                    <p className="text-xs text-teal-500 mt-1">de comisión por reserva</p>
                    <p className="text-xs text-teal-400 mt-3">Precio fijo desde</p>
                    <p className="text-lg font-bold text-teal-600">199€/mes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ──────── ALL UPSELLING SERVICES ──────── */}
      <Section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Revenue completo</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              Upselling inteligente para todos tus servicios
            </h2>
            <p className="text-lg text-slate-500">
              La IA sabe qué ofrecer y cuándo. Pareja → spa + restaurante. Familia → cuna + actividades. Business → WiFi + early check-in. Todo automático.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {UPSELLING_SERVICES.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{s.icon}</span>
                <p className="text-xs font-semibold text-slate-700 mb-0.5">{s.name}</p>
                <p className="text-[11px] text-slate-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ──────── WHY INTEGRATED ──────── */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">La diferencia</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              Una plataforma integrada vs. herramientas que no se hablan
            </h2>
            <p className="text-lg text-slate-500">
              Cuando todo está conectado, los datos fluyen y la magia ocurre. Cuando usas 5 herramientas separadas, pierdes tiempo, datos y oportunidades.
            </p>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100 flex items-start gap-3">
                  <span className="text-teal-600 mt-0.5 shrink-0">{Icons.check}</span>
                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase mb-1">Kontesta Hotels</p>
                    <p className="text-sm text-teal-800">{d.us}</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Herramientas separadas</p>
                    <p className="text-sm text-slate-500">{d.them}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ──────── DEMO VIDEO ──────── */}
      <Section id="demo" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Demostración</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              Mira cómo funciona en 3 minutos
            </h2>
            <p className="text-lg text-slate-500">
              Un recorrido real por la plataforma: desde la conversación con el huésped hasta el dashboard de resultados.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-teal-600/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </div>
              <p className="text-slate-400 text-sm">Video demo disponible próximamente</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ──────── HOW IT WORKS ──────── */}
      <Section id="como-funciona" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Proceso</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              En marcha en menos de una semana
            </h2>
            <p className="text-lg text-slate-500">
              De la primera llamada a la IA respondiendo huéspedes. Sin complicaciones técnicas.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="text-6xl font-bold text-teal-100 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 text-teal-200">
                    {Icons.arrow}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ──────── PRICING ──────── */}
      <Section id="precios" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Precios transparentes</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
              Un precio justo por todo lo que necesitas
            </h2>
            <p className="text-lg text-slate-500">
              Sin comisiones ocultas. Sin letra pequeña. Sin sorpresas. Setup de 450€ con instalación y formación de tu equipo incluida.
            </p>
          </motion.div>
          <motion.p variants={fadeUp} className="text-center text-sm text-slate-400 mb-14">
            Todos los planes incluyen 20 días de prueba gratuita. Sin tarjeta de crédito.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PLANS.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "pricing-highlight relative"
                    : "bg-white border border-slate-200"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-teal-600">{plan.price}€</span>
                  <span className="text-sm text-slate-500">{plan.unit}</span>
                </div>
                <p className="text-xs text-slate-400 mb-1">{plan.min}</p>
                <p className="text-xs text-teal-600 font-medium mb-6">{plan.example}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-teal-500 mt-0.5 shrink-0">{Icons.check}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    plan.highlight
                      ? "bg-teal-600 hover:bg-teal-700 text-white hover:shadow-lg hover:shadow-teal-200"
                      : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  Empezar prueba gratis
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Enterprise — Para cadenas y grupos hoteleros</h3>
              <p className="text-sm text-slate-500 mb-4">
                Multi-propiedad, SSO, integraciones custom, account manager dedicado y SLA garantizado. Precios a medida según volumen.
              </p>
              <a href="#contacto" className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                Contactar para presupuesto personalizado →
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ──────── FAQ ──────── */}
      <Section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Preguntas frecuentes</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3">
              Todo lo que necesitas saber
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-slate-800">{faq.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ──────── CONTACT FORM ──────── */}
      <Section id="contacto" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Empieza ahora</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mt-3 mb-4">
                Prueba Kontesta Hotels 20 días gratis
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                Sin tarjeta de crédito, sin compromiso. Configura tu hotel, conecta tus canales y comprueba los resultados antes de decidir.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    {Icons.shield}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Sin permanencias</h4>
                    <p className="text-sm text-slate-500">Cancela cuando quieras. Tus datos se mantienen 30 días por si vuelves.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    {Icons.building}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Setup con formación incluida</h4>
                    <p className="text-sm text-slate-500">450€ únicos. Configuramos todo y formamos a tu equipo. Sin costes técnicos ocultos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    {Icons.globe}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Equipo en España</h4>
                    <p className="text-sm text-slate-500">Soporte en español, en tu zona horaria. Entendemos la hostelería española.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a href="https://wa.me/34624013936?text=Hola%2C%20me%20interesa%20Kontesta%20Hotels" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                  <span className="text-green-600">{Icons.whatsapp}</span>
                  WhatsApp directo
                </a>
                <span className="text-slate-300">|</span>
                <a href="tel:+34624013936" className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">
                  {Icons.phone}
                  +34 624 013 936
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              {formStatus === "sent" ? (
                <div className="bg-white rounded-2xl p-8 border border-teal-200 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600">{Icons.check}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Mensaje enviado correctamente</h3>
                  <p className="text-slate-500">Nos pondremos en contacto contigo en menos de 24 horas. Gracias por tu interés en Kontesta Hotels.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Hotel *</label>
                      <input
                        type="text"
                        required
                        value={formData.hotel}
                        onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800"
                        placeholder="Nombre de tu hotel"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">N.º de habitaciones</label>
                      <input
                        type="text"
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800"
                        placeholder="Ej: 50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800"
                      placeholder="tu@hotel.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensaje</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none text-slate-800"
                      placeholder="Cuéntanos sobre tu hotel y qué necesitas..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-amber-200"
                  >
                    {formStatus === "sending" ? "Enviando..." : "Solicitar prueba gratuita de 20 días"}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center">Error al enviar. Inténtalo de nuevo o contáctanos por WhatsApp.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ──────── FINAL CTA ──────── */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Tu hotel merece la mejor tecnología.
              <br />
              <span className="text-teal-400">Sin la complejidad.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Únete a los hoteles que ya usan IA para responder más rápido, vender más servicios y ofrecer una experiencia inolvidable a sus huéspedes.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#contacto"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-amber-900/30"
            >
              Empieza tu prueba gratis de 20 días {Icons.arrow}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ──────── FOOTER ──────── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-border flex items-center justify-center">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="font-bold text-lg text-white">
                Kontesta <span className="text-teal-400">Hotels</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Un producto de{" "}
              <a href="https://cpgestudioia.tech" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                CPG Estudio IA
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="https://cpgestudioia.tech/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</a>
              <a href="https://cpgestudioia.tech/aviso-legal" className="hover:text-slate-300 transition-colors">Aviso legal</a>
              <a href="https://cpgestudioia.tech/cookies" className="hover:text-slate-300 transition-colors">Cookies</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Kontesta Hotels. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
