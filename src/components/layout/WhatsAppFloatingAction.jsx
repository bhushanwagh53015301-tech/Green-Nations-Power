import {
  WHATSAPP_CONSULTATION_MESSAGE,
  WHATSAPP_NUMBER,
} from '../../constants'
import { toWhatsAppHref } from '../../solar/helpers'

function WhatsAppFloatingAction() {
  const href = toWhatsAppHref(WHATSAPP_NUMBER, WHATSAPP_CONSULTATION_MESSAGE)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[calc(9.75rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105 md:bottom-28 md:right-8"
      aria-label="WhatsApp Green Nations power"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden>
        <path d="M12.04 0C5.41 0 .02 5.39.02 12.02c0 2.12.56 4.19 1.62 6.02L0 24l6.14-1.61a11.96 11.96 0 0 0 5.9 1.51h.01c6.63 0 12.02-5.39 12.02-12.02C24.07 5.39 18.68 0 12.04 0zM12.04 21.8h-.01c-1.8 0-3.56-.49-5.1-1.42l-.36-.21-3.65.96.98-3.56-.24-.37a9.76 9.76 0 0 1-1.5-5.18c0-5.38 4.38-9.76 9.77-9.76 2.6 0 5.05 1.01 6.89 2.85a9.69 9.69 0 0 1 2.87 6.9c0 5.38-4.38 9.76-9.77 9.76zm5.35-7.3c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.65.14-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.07-.29-.14-1.21-.45-2.3-1.45-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.44.12-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.24-.58-.48-.5-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.45 0 1.44 1.03 2.83 1.18 3.02.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.97-1.37.24-.67.24-1.23.17-1.37-.07-.14-.24-.21-.53-.35z" />
      </svg>
    </a>
  )
}

export default WhatsAppFloatingAction

