export function SymbolMark({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7C16.6 7 13.8 9.8 13.8 13.2C13.8 16.6 16.6 19.4 20 19.4C23.4 19.4 26.2 16.6 26.2 13.2C26.2 9.8 23.4 7 20 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 20.6C16.6 20.6 13.8 23.4 13.8 26.8C13.8 30.2 16.6 33 20 33C23.4 33 26.2 30.2 26.2 26.8C26.2 23.4 23.4 20.6 20 20.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 20C7 16.6 9.8 13.8 13.2 13.8C16.6 13.8 19.4 16.6 19.4 20C19.4 23.4 16.6 26.2 13.2 26.2C9.8 26.2 7 23.4 7 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20.6 20C20.6 16.6 23.4 13.8 26.8 13.8C30.2 13.8 33 16.6 33 20C33 23.4 30.2 26.2 26.8 26.2C23.4 26.2 20.6 23.4 20.6 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function HeartIcon({ filled = false, ...props }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 20.25C11.75 20.25 11.5 20.16 11.31 19.97L5.49 14.41C3.54 12.54 3.5 9.44 5.38 7.52C7.26 5.61 10.34 5.57 12.25 7.44L12 7.69L11.76 7.44C13.66 5.57 16.75 5.61 18.62 7.52C20.5 9.44 20.46 12.54 18.51 14.41L12.69 19.97C12.5 20.16 12.25 20.25 12 20.25Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function BagIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.75 8.5H17.25L16.37 18.47C16.32 19.09 15.8 19.56 15.18 19.56H8.82C8.2 19.56 7.68 19.09 7.63 18.47L6.75 8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9.25 9V7.75C9.25 6.23 10.48 5 12 5C13.52 5 14.75 6.23 14.75 7.75V9"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function UserIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6.75 18.25C7.5 15.92 9.57 14.4 12 14.4C14.43 14.4 16.5 15.92 17.25 18.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ChevronLeftIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.7" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="8" cy="9" r="1.15" fill="currentColor" />
      <path d="M8 11.3V16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.25 16V11.3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11.25 13.4C11.25 12.14 12.05 11.3 13.25 11.3C14.45 11.3 15.25 12.14 15.25 13.4V16"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function MastercardIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="white" />
      <circle cx="14.5" cy="12" r="7" fill="#EB001B" />
      <circle cx="23.5" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
    </svg>
  );
}

export function PayPalIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="white" />
      <path d="M14.5 17.3l.8-5.3c0-.4.3-.7.7-.7h3.1c1.9 0 3.3.9 3 2.8-.3 1.9-1.8 2.8-3.7 2.8h-1.6c-.2 0-.4.1-.5.3l-.8 3.5c0 .2-.2.3-.4.3h-1.3c-.2 0-.3-.2-.3-.4z" fill="#003087"/>
      <path d="M12.7 15.3l.8-5.3c0-.4.3-.7.7-.7h3.1c1.9 0 3.3.9 3 2.8-.3 1.9-1.8 2.8-3.7 2.8h-1.6c-.2 0-.4.1-.5.3l-.8 3.5c0 .2-.2.3-.4.3h-1.3c-.2 0-.3-.2-.3-.4z" fill="#009CDE"/>
      <path d="M14.2 15.3l.4-2.7c0-.4.3-.7.7-.7h3.1c.8 0 1.5.2 2 .6-.4 1.7-1.7 2.8-3.5 2.8h-2c-.2 0-.4.1-.5.3v-.3z" fill="#012169"/>
    </svg>
  );
}

export function AmexIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="#0070CD" />
      <path d="M7 15.5h1.3l.4-.9H11l.4.9h1.3L10.2 9h-1L7 15.5zm2.3-1.9l.7-1.7.7 1.7H9.3zM12.5 15.5h1.1V11l1.4 3h.5l1.4-3v4.5H18V9h-1.2l-1.5 3.3L13.8 9h-1.3v6.5zM19.5 15.5h4v-1h-2.9v-1.7h2.5v-1h-2.5V10h2.9V9h-4v6.5zM24.2 15.5h1.3l1.1-1.9 1.1 1.9h1.3L27.2 13l1.6-2.5h-1.3l-.9 1.5-.9-1.5h-1.3L26 13l-1.8 2.5z" fill="white"/>
    </svg>
  );
}

export function ApplePayIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="white" />
      <path d="M10.2 12.1c0-1.7 1.4-2.5 1.4-2.5-.8-1.2-2.1-1.3-2.5-1.3-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.6-2.5-.6-1.3 0-2.5.8-3.2 1.9-1.4 2.3-.4 5.7 1 7.7.7 1 1.4 2.1 2.5 2.1 1 0 1.4-.6 2.7-.6 1.3 0 1.6.6 2.7.6 1.1 0 1.7-1 2.4-2 .8-1.1 1.1-2.1 1.1-2.2s-2.3-.9-2.3-3.6zM8.5 7.2c.5-.7.9-1.6.8-2.5-.8.1-1.8.6-2.4 1.2-.5.6-.9 1.5-.8 2.4 1 0 1.9-.5 2.4-1.1z" fill="black"/>
      <path d="M17.5 10.5h3.3c1.5 0 2.4.9 2.4 2.2s-.9 2.2-2.4 2.2h-1.9v3.2h-1.4v-7.6zm3.3 3.2c.7 0 1.1-.3 1.1-1s-.4-1-1.1-1h-1.9v2h1.9zM24.2 15.9c0-1 1-1.6 2.2-1.6 1.2 0 1.9.4 1.9 1.1v-.1c0-.5-.4-.8-1-.8-.5 0-.9.2-1 .6h-1.3c.1-.9 1-1.5 2.3-1.5 1.5 0 2.4.8 2.4 2v2.3h-1.2c-.1-.3-.2-.5-.3-.7-.3.5-1 .9-1.6.9-1 0-1.7-.6-1.7-1.5v.3zm2.8 0c0-.4-.3-.6-.8-.6s-.8.2-.8.6.3.6.8.6.8-.2.8-.6zM30 14.8l1.5 3.9 1.5-3.9h1.6l-2.3 5.6h-1.6l-2.3-5.6h1.6z" fill="black"/>
    </svg>
  );
}

export function GooglePayIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="white" />
      <path d="M11 11.5c0-.4 0-.8-.1-1.2h-3.8v2.3h2.1c-.1.6-.5 1.2-.9 1.5v1.3h1.5c.9-.8 1.4-2 1.4-2.8l-0.2-1.1z" fill="#4285F4"/>
      <path d="M7.1 15.5c1.1 0 2-.4 2.7-1l-1.5-1.3c-.4.3-.9.5-1.3.5-1 0-1.9-.8-2.2-1.8H3.3V13c.8 1.5 2.3 2.5 3.8 2.5z" fill="#34A853"/>
      <path d="M4.9 11.9c-.1-.3-.1-.7-.1-1s0-.7.1-1V8.6H3.3c-.3.7-.5 1.4-.5 2.2s.2 1.5.5 2.2l1.6-1.1z" fill="#FBBC05"/>
      <path d="M7.1 7.4c.6 0 1.1.2 1.6.6l1.2-1.2c-.8-.8-1.8-1.3-2.8-1.3-1.6 0-3 1-3.8 2.4l1.6 1.2c.4-1 1.2-1.7 2.2-1.7z" fill="#EA4335"/>
      <path d="M16.5 10.5h3.3c1.5 0 2.4.9 2.4 2.2s-.9 2.2-2.4 2.2h-1.9v3.2h-1.4v-7.6zm3.3 3.2c.7 0 1.1-.3 1.1-1s-.4-1-1.1-1h-1.9v2h1.9zM24.2 15.9c0-1 1-1.6 2.2-1.6 1.2 0 1.9.4 1.9 1.1v-.1c0-.5-.4-.8-1-.8-.5 0-.9.2-1 .6h-1.3c.1-.9 1-1.5 2.3-1.5 1.5 0 2.4.8 2.4 2v2.3h-1.2c-.1-.3-.2-.5-.3-.7-.3.5-1 .9-1.6.9-1 0-1.7-.6-1.7-1.5v.3zm2.8 0c0-.4-.3-.6-.8-.6s-.8.2-.8.6.3.6.8.6.8-.2.8-.6zM30 14.8l1.5 3.9 1.5-3.9h1.6l-2.3 5.6h-1.6l-2.3-5.6h1.6z" fill="#5F6368"/>
    </svg>
  );
}

export function OPayIcon(props) {
  return (
    <svg viewBox="0 0 38 24" fill="none" {...props}>
      <rect width="38" height="24" rx="4" fill="#6033FF" />
      <path d="M11 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" fill="white"/>
      <path d="M17.5 10.5h3.3c1.5 0 2.4.9 2.4 2.2s-.9 2.2-2.4 2.2h-1.9v3.2h-1.4v-7.6zm3.3 3.2c.7 0 1.1-.3 1.1-1s-.4-1-1-1h-2v2h2zM24.2 15.9c0-1 1-1.6 2.2-1.6 1.2 0 1.9.4 1.9 1.1v-.1c0-.5-.4-.8-1-.8-.5 0-.9.2-1 .6h-1.3c.1-.9 1-1.5 2.3-1.5 1.5 0 2.4.8 2.4 2v2.3h-1.2c-.1-.3-.2-.5-.3-.7-.3.5-1 .9-1.6.9-1 0-1.7-.6-1.7-1.5v.3zm2.8 0c0-.4-.3-.6-.8-.6s-.8.2-.8.6.3.6.8.6.8-.2.8-.6zM30 14.8l1.5 3.9 1.5-3.9h1.6l-2.3 5.6h-1.6l-2.3-5.6h1.6z" fill="white"/>
    </svg>
  );
}